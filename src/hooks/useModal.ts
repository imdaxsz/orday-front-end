import { useEffect, useState } from "react";

export function useModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (!isModalOpen) return;

    document.body.style.cssText = `
      position: fixed;
      top: -${window.scrollY}px;
      overflow-y: ${
        window.innerWidth - document.body.clientWidth > 0 ? "scroll" : "hidden"
      };
      width: 100%;
  `;

    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    };
  }, [isModalOpen]);

  return {
    isModalOpen,
    openModal,
    closeModal,
  };
}
