"use client"

import { useState } from "react";

const Page = () => {
  const [count, setCount] = useState<number>(0);

  const handleClickButton = () => {
    setCount(count + 1);
  };

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <p>{count}</p>
      <button onClick={handleClickButton} className="bg-red-500">+1</button>

    </div>
  );
}

export default Page;      