import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { getReviewProductsInfo } from "@/api/ProductApi";
import {
  createReview,
  getReviewDetail,
  updateReview,
  updateReviewImage,
} from "@/api/ReviewApi";

import useImageCompress from "./useImageCompress";

export default function useWriteReview({
  mode,
  id,
  orderId,
}: {
  mode: string | null;
  id: number;
  orderId: number;
}) {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState<ReviewForm>({
    content: "",
    rating: 3,
    file: null,
    fileUrl: "",
  });

  // 리뷰 수정 시 서버에서 받아온 기존 리뷰 데이터
  const [existingReview, setExistingReview] = useState({
    content: form.content,
    rating: form.rating,
    fileUrl: form.fileUrl,
  });

  // 리뷰 대상 상품 정보
  const [productInfo, setProductInfo] = useState<
    ReviewProductBaseInfo & { imageUrl: string }
  >({ productId: 0, name: "", color: "", size: "", imageUrl: "" });

  const { isLoading, compressImage } = useImageCompress();

  const navigate = useNavigate();

  // 수정 모드일 경우, 수정할 리뷰 정보 요청
  const fetchReviewData = async (id: number) => {
    try {
      const {
        content,
        rating,
        reviewImageUrl,
        productImageUrl,
        productId,
        name,
        color,
        size,
      } = await getReviewDetail(id);
      setForm((prev) => ({
        ...prev,
        content,
        rating,
        fileUrl: reviewImageUrl,
      }));
      setExistingReview({
        content,
        rating,
        fileUrl: reviewImageUrl,
      });
      setProductInfo({
        productId,
        name,
        color,
        size,
        imageUrl: productImageUrl,
      });
    } catch (error) {
      console.log("Error fetching review data: ", error);
    }
  };

  // 리뷰 작성일 경우 상품 정보 조회
  const fetchProductData = async (id: number) => {
    try {
      const [{ id: productId, imageUrl, name, color, size }] =
        await getReviewProductsInfo([id]);
      setProductInfo({ productId, name, color, size, imageUrl });
    } catch (error) {
      console.log("Error fetching product data: ", error);
    }
  };

  // 작성 mode에 따라 필요한 정보 fetch
  useEffect(() => {
    if (mode === "new" && id) fetchProductData(id);
    else if (mode === "edit" && id) fetchReviewData(id);
  }, [id, mode]);

  // 별점 입력
  const handleRatingChange = (i: number) => {
    setForm((prev) => ({ ...prev, rating: i }));
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length > 100) return;
    setForm((prev) => ({ ...prev, content: e.target.value }));
  };

  // 파일 첨부
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files && files.length === 1) {
      const compressedImage = await compressImage(files[0]);
      if (!compressedImage) return;
      setForm((prev) => ({ ...prev, file: compressedImage }));
      const reader = new FileReader();
      reader.readAsDataURL(compressedImage);
      reader.onloadend = (finishedEvent) => {
        if (
          finishedEvent.target &&
          typeof finishedEvent.target.result == "string"
        ) {
          const fileUrl = finishedEvent.target.result;
          setForm((prev) => ({
            ...prev,
            fileUrl,
          }));
        } else console.log("변환 실패");
      };
    }
    e.target.value = ""; // reset
  };

  // 파일 삭제
  const clearFile = () => {
    setForm((prev) => ({ ...prev, file: null, fileUrl: "" }));
  };

  const validateContent = () => {
    if (form.content.trim().length === 0) {
      alert("리뷰 내용을 작성해 주세요!");
      return false;
    }
    return true;
  };

  const requestCreateReview = async () => {
    const formData = new FormData();
    formData.append(
      "productReviewRequest",
      new Blob(
        [
          JSON.stringify({
            orderId,
            productId: productInfo.productId,
            content: form.content,
            rating: form.rating,
          }),
        ],
        {
          type: "application/json",
        },
      ),
    );
    if (form.file) {
      formData.append("image", form.file);
    }
    try {
      await createReview(formData);
      navigate("/myPage/reviews");
    } catch (error) {
      console.log("Error uploading review: ", error);
    }
  };

  const requestUpdateReview = async () => {
    // 별점, 리뷰 내용 중 변동이 있는 데이터만 보냄
    const dto: ReviewEditContent = {};
    if (form.content !== existingReview.content) dto.content = form.content;
    if (form.rating !== existingReview.rating) dto.rating = form.rating;
    if (Object.keys(dto).length === 0) return;
    try {
      await updateReview(id, dto);
      navigate("/myPage/reviews");
    } catch (error) {
      console.log("Error updating review: ", error);
    }
  };

  const requestUpdateReviewImage = async (id: number, file?: File | null) => {
    try {
      if (file) await updateReviewImage(id, file);
      else if (form.fileUrl === "" && existingReview.fileUrl !== "")
        await updateReviewImage(id);
      navigate("/myPage/reviews");
    } catch (error) {
      console.log("Error updating review image: ", error);
    }
  };

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateContent()) {
      setLoading(true);
      if (mode === "new") {
        await requestCreateReview();
      } else if (mode === "edit") {
        await requestUpdateReview();
        await requestUpdateReviewImage(id, form.file);
      }
      setLoading(false);
    }
  };

  return {
    isImageCompressing: isLoading,
    isReviewUploading: loading,
    productInfo,
    form,
    handleContentChange,
    handleRatingChange,
    handleFileChange,
    clearFile,
    handleSubmit,
  };
}
