import { useState } from "react";

// 임시
interface GuestOrderForm {
  guestName: string;
  orderNo: string;
  phone: {
    first: string;
    second: string;
    third: string;
  };
}

export default function useGuestOrder() {
  type PHONEPART = "first" | "second" | "third";

  const [form, setForm] = useState<GuestOrderForm>({
    guestName: "",
    orderNo: "",
    phone: {
      first: "",
      second: "",
      third: "",
    },
  });

  const [error, setError] = useState({
    guestName: false,
    orderNo: false,
    phone: false,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    part?: PHONEPART,
  ) => {
    const { id, value } = e.target;
    if (part && part in form.phone) {
      setForm((prev) => ({
        ...prev,
        phone: { ...prev.phone, [part]: value },
      }));
    } else setForm((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    for (const key in error) setError((prev) => ({ ...prev, [key]: false }));

    if (form.guestName.trim().length === 0)
      setError((prev) => ({ ...prev, guestName: true }));
    if (form.orderNo.trim().length === 0)
      setError((prev) => ({ ...prev, orderNo: true }));
    const { phone } = form;
    if (
      phone.first.trim().length === 0 ||
      phone.second.trim().length === 0 ||
      phone.third.trim().length === 0
    )
      setError((prev) => ({ ...prev, phone: true }));
    console.log(form);

    // API 요청
  };

  return { form, error, handleInputChange, handleSubmit };
}
