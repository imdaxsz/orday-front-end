import { useState } from "react";

export default function useCheckBox<T extends { id: number }>(itemList?: T[]) {
  const [checkedListById, setCheckedListById] = useState<number[]>([]);

  const resetCheckedList = () => {
    setCheckedListById([]);
  };

  const handleCheckChange = (id: number) => {
    const isChecked = checkedListById.includes(id);

    if (isChecked) {
      setCheckedListById((prev) => prev.filter((el) => el !== id));
    } else {
      setCheckedListById((prev) => [...prev, id]);
    }
  };

  const handleAllCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    if (checked) {
      itemList && setCheckedListById(itemList.map((item: T) => item.id));
    } else {
      resetCheckedList();
    }
  };

  return {
    checkedListById,
    resetCheckedList,
    handleCheckChange,
    handleAllCheck,
  };
}
