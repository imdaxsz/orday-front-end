import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useLocation } from "react-router-dom";

import { getOrderList, getOrderStatus } from "@/api/OrderApi";

export default function useOrderList() {
  const location = useLocation();
  const pathname = location.pathname.replace("/", "");
  const isOrderListPage = pathname.includes("/order");

  const [ref, inView] = useInView();
  const [orderStatus, setOrderStatus] = useState<OrderStatus>();
  const [orderList, setOrderList] = useState<OrderListInfo[]>([]);
  const [nextKey, setNextKey] = useState<number | null>(null);

  const fetchOrderStatus = async () => {
    try {
      const data = await getOrderStatus();
      setOrderStatus(data);
    } catch (error) {
      console.log("Error fetching order status: ", error);
    }
  };

  const fetchOrderList = async () => {
    const {
      cursorRequest: { key },
      body: data,
    } = await getOrderList(nextKey, 5);
    !isOrderListPage
      ? setOrderList(data.splice(0, 2))
      : setOrderList((prev) => [...prev, ...data]);
    setNextKey(key);
  };
  useEffect(() => {
    fetchOrderStatus();
    fetchOrderList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (inView && nextKey !== -1) fetchOrderList();
  }, [inView]);

  return { ref, isOrderListPage, orderStatus, orderList };
}
