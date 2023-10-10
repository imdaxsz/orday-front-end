import { useState, useEffect } from "react";
import styled from "styled-components";

interface HashTagItemProps {
  tag: string;
}

const TagItem = styled.div<{ active: boolean }>`
  padding: 8px 16px;
  margin: 8px;
  background-color: ${({ theme, active }) =>
    active ? theme.colors.primary[80] : theme.colors.neutral[10]};
  color: ${({ theme, active }) =>
    active ? theme.colors.neutral[10] : theme.colors.neutral[40]};
  cursor: pointer;
  border-radius: 16px;
  display: inline-block;
`;

export const HashTagItem: React.FC<HashTagItemProps> = ({
  tag,
}: HashTagItemProps) => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive((prev) => !prev);
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
