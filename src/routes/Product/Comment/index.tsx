import { useState } from "react";
import { BiSolidPencil } from "react-icons/bi";
import { FaArrowRight } from "react-icons/fa6";

import PhotoDetail from "../PhotoDetail";

import DropDown from "./Dropdown";
import { graphData } from "./graphdata";
import Review from "./Review";
import ReviewRatingComponent from "./ReviewRating";
import {
  ProductText,
  ProductReview,
  ProductPhoto,
  PhotoReview,
  Photo,
} from "./style";

const photoData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function ProductComment() {
  const reviewedItems = graphData.filter((item) => item.count !== 0);
  const [isPhotoDetail, setPhotoDetail] = useState(false);

  const handlePhotoDetail = () => {
    setPhotoDetail(true);
  };

  return (
    <ProductText>
      {isPhotoDetail ? (
        <PhotoDetail setPhotoDetail={setPhotoDetail} photoData={photoData} />
      ) : (
        <>
          <ProductReview>
            리뷰({reviewedItems.length})
            <BiSolidPencil />
          </ProductReview>
          <ReviewRatingComponent />
          <ProductPhoto>
            사진({photoData.length})
            <FaArrowRight onClick={handlePhotoDetail} />
          </ProductPhoto>
          <PhotoReview>
            {photoData.slice(0, 7).map((_, index) => (
              <Photo key={index} />
            ))}
          </PhotoReview>
          <DropDown />
          <Review />
        </>
      )}
    </ProductText>
  );
}
