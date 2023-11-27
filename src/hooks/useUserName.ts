import { useEffect, useState } from "react";

import { getUserName } from "@/api/AuthApi";

export default function useUserName() {
  const [userName, setUserName] = useState("");

  const fetchUserName = async () => {
    try {
      const name = await getUserName();
      setUserName(name);
    } catch (error) {
      console.log("Error fetching username: ", error);
    }
  };

  useEffect(() => {
    fetchUserName();
  }, []);

  return {
    userName,
  };
}
