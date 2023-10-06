import { useState, useEffect } from "react";
import styled from "styled-components";

import { colors } from "@/styles/colors";

const TagItem = styled.div<{ active: boolean }>`
  padding: 8px 16px;
  margin: 8px;
  background-color: ${(props) =>
    props.active ? colors.primary[80] : colors.neutral[10]};
  color: ${(props) => (props.active ? colors.neutral[10] : colors.neutral[40])};
  cursor: pointer;
  border-radius: 16px;
  display: inline-block;
`;

interface HashTagItemProps {
  tag: string;
}

export const HashTagItem: React.FC<HashTagItemProps> = ({ tag }) => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  useEffect(() => {
    if (tag === "전체") {
      setActive(true);
    }
  }, [tag]);

  return (
    <TagItem active={active} onClick={handleClick}>
      {tag}
    </TagItem>
  );
};
