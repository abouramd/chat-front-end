"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function Page() {
  const [data, setData] = useState(null);

  useEffect(async (): void => {
    const response = await fetch("/api/auth/isauth", {
      method: "get",
      headers: {
        credentials: "include",
      },
    });

    setData(await response.json());
  }, []);

  const clickhandler = async () => {
    const response = await fetch("/api/auth/logout", {
      method: "get",
      headers: {
        credentials: "include",
      },
    });
    setData(await response.json());
  };

  return (
    <div>
      {data && <h1>{data.message}</h1>}
      <Button onClick={clickhandler}>log out</Button>
    </div>
  );
}
