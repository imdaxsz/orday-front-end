import { useRef } from "react";

import { BodyContainer, Comment } from "../style";

import Action from "./Action";

export default function TipContent() {
  const commentRef = useRef<HTMLTextAreaElement | null>(null);

  const focusCommentInput = () => {
    if (commentRef.current) {
      commentRef.current.focus();
    }
  };

  return (
    <>
      <BodyContainer />
      <Comment ref={commentRef} placeholder="최소 100자 이상 작성하세요." />
      <Action commentRef={commentRef} focusCommentInput={focusCommentInput} />
    </>
  );
}
