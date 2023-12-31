import imageCompression from "browser-image-compression";
import { useState } from "react";

export default function useImageCompress() {
  const [isLoading, setIsLoading] = useState(false);

  const compressImage = async (imageFile: File) => {
    if (isLoading) return;
    setIsLoading(true);
    console.log(`원본 이미지 사이즈 : ${imageFile.size / 1024 / 1024} MB`);

    const options = {
      maxSizeMB: 10,
      maxWidthOrHeight: 1920,
    };

    try {
      const compressedFile = await imageCompression(imageFile, options);
      console.log(
        `압축된 이미지 사이즈 : ${compressedFile.size / 1024 / 1024} MB`,
      );
      setIsLoading(false);
      return compressedFile;
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      alert("이미지 압축 실패! 다시 시도해 주세요.");
    }
  };

  return { compressImage, isLoading };
}
