import { useState, useEffect, useCallback } from "react";
import { useInView } from "react-intersection-observer";
import { useSearchParams } from "react-router-dom";

import { getBrandProducts } from "@/api/ProductApi";

export default function useProductList(brandId?: number) {
  const [ref, inView] = useInView();

  const [searchParams] = useSearchParams();
  /**
   * 전체 카테고리일 경우 = 0
   */
  const categoryId = Number(searchParams.get("category")) ?? 0;
  const subCategoryId = Number(searchParams.get("sub-category")) ?? 0;

  const [selectedOption, setSelectedOption] = useState({
    id: 0,
    name: "최신순",
    value: "new",
  });

  const [products, setProducts] = useState<Product[]>([]);
  const [nextKey, setNextKey] = useState<number | null>(null);

  const fetchData = useCallback(async () => {
    try {
      // 브랜드 상품 목록 조회
      if (brandId) {
        const {
          cursorRequest: { key },
          body,
        } = await getBrandProducts(
          brandId,
          categoryId,
          subCategoryId,
          selectedOption.id,
          nextKey,
        );
        setProducts((prev) => [...prev, ...body]);
        setNextKey(key);
      }
      // TODO: 일반 카테고리 상품 조회
    } catch (error) {
      console.log("Error fetching products: ", error);
    }
  }, [brandId, categoryId, nextKey, selectedOption.id, subCategoryId]);

  // 무한 스크롤 조회
  useEffect(() => {
    if (inView && nextKey !== -1) fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  // // 카테고리 또는 정렬 옵션이 바뀌면 상품 리스트 초기화
  useEffect(() => {
    setProducts([]);
    setNextKey(null);
  }, [categoryId, subCategoryId, selectedOption.id]);

  return { ref, products, selectedOption, setSelectedOption };
}
