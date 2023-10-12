import { HashTagItem } from "./Item";

const hashtags = [
  "전체",
  "맨투맨",
  "F/W 자켓",
  "디자이너 브랜드",
  "스커트",
  "#데님",
  "#빈티지",
  "스포츠",
  "브라운",
  "모자",
  "레더자켓",
  "심플한",
  "후드집업",
  "와이드팬츠",
];

const HashTagList: React.FC = () => {
  return (
    <div>
      {hashtags.map((tag, index) => (
        <HashTagItem key={index} tag={tag} />
      ))}
    </div>
  );
};

export default HashTagList;
