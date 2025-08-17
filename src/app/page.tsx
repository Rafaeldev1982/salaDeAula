"use client"

import { useState } from "react";

const Page = () => {
  const [showSecret, setShowSecret] = useState(false);

  const handleClickButton = () => {
    setShowSecret(!showSecret);

  };

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <button onClick={handleClickButton} className="bg-blue-500">{showSecret ? 'Ocultar' : 'Mostrar'}</button>
      {showSecret &&
        <div className="p-3 bg-blue-300 roubded-md mt-3">Aárea secreta</div>
      }
    </div>
  );
}

export default Page;      