import { useState } from "react";

import useImageCompress from "./useImageCompress";

export default function useWriteReview({ mode }: { mode: string | null }) {
  const [text, setText] = useState("");
  const [file, setFile] = useState<File | null>(null); // 서버에 넘길 File
  const [fileUrl, setFileUrl] = useState("");
  const [rating, setRating] = useState(3);

  const { isLoading, compressImage } = useImageCompress();

  // TODO: 수정 모드일 경우, 리뷰 내용 요청
  if (mode === "edit") console.log("수정 모드");

  // 별점 입력
  const onRatingChange = (i: number) => {
    setRating(i);
  };

  // 파일 첨부
  const onFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
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

  const onSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (file) console.log(file);
    console.log(text, rating);
    // api 요청
  };

  return {
    isImageCompressing: isLoading,
    text,
    setText,
    rating,
    onRatingChange,
    fileUrl,
    onFileChange,
    clearFile,
    onSubmit,
  };
}
