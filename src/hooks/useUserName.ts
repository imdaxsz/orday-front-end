import { useEffect, useState } from "react";

import { getUserName } from "@/api/AuthApi";

export default function useUserName() {
  const [isLoading, setIsLoading] = useState(false);
  const [userName, setUserName] = useState("");

  const fetchUserName = async () => {
    setIsLoading(true);
    try {
      const name = await getUserName();
      setUserName(name);
    } catch (error) {
      console.log("Error fetching username: ", error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchUserName();
  }, []);

  return {
    isUserNameLoading: isLoading,
    userName,
  };
}
