import { useState, useEffect, useCallback, useMemo } from "react";
import { useInView } from "react-intersection-observer";
import { useLocation, useSearchParams } from "react-router-dom";

import {
  getBestAllProducts,
  getBestCategoryProducts,
  getBrandProducts,
  getCategoryProducts,
  getNewOrSaleProducts,
} from "@/api/ProductApi";

export default function useProductList(brandId?: number) {
  const [ref, inView] = useInView();

  const [searchParams] = useSearchParams();

  const [isLoading, setIsLoading] = useState(false);
  /**
   * 전체 카테고리일 경우 = 0
   */
  const categoryId = Number(searchParams.get("category")) ?? 0;
  const subCategoryId = Number(searchParams.get("sub-category")) ?? 0;

  const location = useLocation();
  const pathname = location.pathname.replace("/", "");
  const initialOption = {
    id: 0,
    name: "최신순",
    value: "new",
  };
  const [selectedOption, setSelectedOption] = useState(initialOption);
  const [nextKey, setNextKey] = useState<number | null>(null);

  const [products, setProducts] = useState<Product[]>([]);
  const [categoryBestItems, setCategoryBestItems] = useState<Product[]>();

  const params: ProductListRequestParams = useMemo(() => {
    return {
      key: nextKey,
      sortId: selectedOption.id,
    };
  }, [nextKey, selectedOption.id]);

  if (pathname === "products" || brandId) {
    params.categoryId = categoryId;
    params.subCategoryId = subCategoryId;
  }
  if (brandId) {
    params.brandId = brandId;
  }

  const fetchBestCategoryProducts = async () => {
    setIsLoading(true);
    try {
      const data = await getBestCategoryProducts(categoryId, subCategoryId);
      setCategoryBestItems(data);
    } catch (error) {
      console.log("Error fetching products: ", error);
    }
    setIsLoading(false);
  };

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      // NEW, SALE 상품 목록 조회
      if (pathname === "new" || pathname == "sale") {
        const {
          cursorRequest: { key },
          body,
        } = await getNewOrSaleProducts(params, pathname);
        setProducts((prev) => [...prev, ...body]);
        setNextKey(key);
      }
      // BEST 상품 목록 조회
      if (pathname === "best") {
        const data = await getBestAllProducts();
        setProducts(data);
      }
      // 카테고리 상품 목록 조회
      if (pathname === "products") {
        const {
          cursorRequest: { key },
          body,
        } = await getCategoryProducts(params);
        setProducts((prev) => [...prev, ...body]);
        setNextKey(key);
      }
      // 브랜드 상품 목록 조회
      if (brandId) {
        const {
          cursorRequest: { key },
          body,
        } = await getBrandProducts(params);
        setProducts((prev) => [...prev, ...body]);
        setNextKey(key);
      }
    } catch (error) {
      console.log("Error fetching products: ", error);
    }
    setIsLoading(false);
  }, [params, pathname, brandId]);

  // 무한 스크롤 조회
  useEffect(() => {
    if (inView && nextKey !== -1) fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  // 정렬 옵션이 바뀌면 상품 리스트 초기화
  useEffect(() => {
    setProducts([]);
    setNextKey(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedOption.id]);

  // 카테고리가 바뀌면 상품 리스트 초기화
  useEffect(() => {
    setProducts([]);
    setCategoryBestItems([]);
    setNextKey(null);
    if (pathname === "best") fetchData();
    if (pathname === "products") {
      fetchBestCategoryProducts();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryId, subCategoryId, pathname]);

  return {
    isLoading,
    ref,
    products,
    selectedOption,
    setSelectedOption,
    categoryBestItems,
    pathname,
  };
}
