
import { NextRouter } from "next/router";


const logout = async (
  router : NextRouter
) => {
  try {
    const response = await fetch("/api/auth/logout",
      {
        credentials: "include",
      });
    
    if (response.status === 200) {
      router.push("/login");
    } else {
      // throw new Error("Failed to logout");
    }
  }
  catch (error) {
    console.error(error);
  }
}

export default logout;