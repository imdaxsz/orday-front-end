import { useState, useEffect } from "react";

import {
  createReview,
  getReviewDetail,
  getProductsInfo,
  testGetEditReviewData,
  testGetReviewProductInfo,
  updateReview,
  updateReviewImage,
} from "@/api/ReviewApi";

import useImageCompress from "./useImageCompress";
import { useNavigate } from "react-router-dom";

export default function useWriteReview({
  mode,
  id,
  orderId,
}: {
  mode: string | null;
  id: number;
  orderId: number;
}) {
  const [content, setContent] = useState("");
  const [file, setFile] = useState<File | null>(null); // 서버에 넘길 File
  const [fileUrl, setFileUrl] = useState("");
  const [rating, setRating] = useState(3);

  // 리뷰 수정 시 서버에서 받아온 기존 리뷰 데이터
  const [userContent, setUserContent] = useState(content);
  const [userRating, setUserRating] = useState(rating);
  const [userFileUrl, setUserFileUrl] = useState(fileUrl);

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
      } = await testGetEditReviewData(id);
      // getReviewDetail
      setContent(content);
      setUserContent(content);
      setRating(rating);
      setUserRating(rating);
      setFileUrl(reviewImageUrl);
      setUserFileUrl(reviewImageUrl);
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

  const fetchProductData = async (id: number) => {
    try {
      // 상품 정보 가져오기
      const [{ id: productId, imageUrl, name, color, size }] =
        await testGetReviewProductInfo(id);
      // getProductsInfo
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
    setRating(i);
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.currentTarget.value.length > 100) return;
    setContent(e.currentTarget.value);
  };

  // 파일 첨부
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files && files.length === 1) {
      const compressedImage = await compressImage(files[0]);
      if (!compressedImage) return;
      setFile(compressedImage);
      const reader = new FileReader();
      reader.readAsDataURL(compressedImage);
      reader.onloadend = (finishedEvent) => {
        if (
          finishedEvent.target &&
          typeof finishedEvent.target.result == "string"
        ) {
          setFileUrl(finishedEvent.target.result);
        } else console.log("변환 실패");
      };
    }
    e.target.value = ""; // reset
  };

  // 파일 삭제
  const clearFile = () => {
    setFile(null);
    setFileUrl("");
  };

  const validateContent = () => {
    if (content.trim().length === 0) {
      alert("리뷰 내용을 작성해 주세요!");
      return false;
    }
    return true;
  };

  const requestCreateReview = async () => {
    const dto: CreateReviewDto = {
      productReviewRequest: {
        orderId,
        productId: productInfo.productId,
        content,
        rating,
      },
    };
    if (file) dto.image = file;
    console.log(dto);
    try {
      await createReview(dto);
      navigate("/myPage/reviews");
    } catch (error) {
      console.log("Error uploading review: ", error);
    }
  };

  const requestUpdateReview = async () => {
    // 별점, 리뷰 내용 중 변동이 있는 데이터만 보냄
    const dto: ReviewEditContent = {};
    if (content !== userContent) dto.content = content;
    if (rating !== userRating) dto.rating = rating;
    if (Object.keys(dto).length === 0) return;
    try {
      await updateReview(id, dto);
      navigate("/myPage/reviews");
    } catch (error) {
      console.log("Error updating review: ", error);
    }
  };

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (file) console.log(file);
    if (validateContent()) {
      if (mode === "new") {
        await requestCreateReview();
      } else if (mode === "edit") {
        await requestUpdateReview();
        if (file) await updateReviewImage(id, file);
        // 기존에 업로드했던 이미지를 삭제하는 경우
        else if (fileUrl === "" && userFileUrl !== "")
          await updateReviewImage(id);
      }
    }
  };

  return {
    isImageCompressing: isLoading,
    productInfo,
    content,
    handleContentChange,
    rating,
    handleRatingChange,
    fileUrl,
    handleFileChange,
    clearFile,
    handleSubmit,
  };
}
