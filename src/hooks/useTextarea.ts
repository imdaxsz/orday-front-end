import { useRef } from "react";

export default function useTextarea() {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  // textarea 내용 길이에 따라 높이 자동 조절
  const setTextareaHeight = () => {
    if (textareaRef && textareaRef.current) {
      textareaRef.current.style.height = "0px";
      const scrollHeight = textareaRef.current.scrollHeight;
      textareaRef.current.style.height = scrollHeight + "px";
    }
  };

  return { textareaRef, setTextareaHeight };
}
