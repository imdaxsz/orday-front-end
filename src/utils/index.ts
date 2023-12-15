/**
 * @description 현재와 createdAt 사이의 경과 시간을 계산합니다.
 * @param createdAt Date string
 * @returns string 경과 시간
 */
export const getElapsedTime = (createdAt: string) => {
  const now = new Date().getTime();
  const prev = new Date(createdAt).getTime();
  const elapsed = Math.floor((now - prev) / 1000);
  let result = "";
  if (elapsed < 60) result = "방금 전";
  else if (elapsed >= 60 && elapsed < 3600)
    result = `${Math.floor(elapsed / 60)}분 전`;
  else if (elapsed >= 3600 && elapsed < 86400)
    result = `${Math.floor(elapsed / 3600)}시간 전`;
  else if (elapsed >= 86400 && elapsed < 172800) result = "어제";
  else result = createdAt.split("T")[0];
  return result;
};

export const calculateItemValues = (productItems: CartItem[]) => {
  const price =
    productItems.length > 0
      ? productItems
          .map((item) => Number(item.price) * item.amount)
          .reduce((acc, cur) => acc + cur)
      : 0;
  const sale =
    productItems.length > 0
      ? productItems
          .map((item) => Number(item.discountPrice) * item.amount)
          .reduce((acc, cur) => acc + cur)
      : 0;
  const shipping = 0;

  return { price, sale, shipping };
};
