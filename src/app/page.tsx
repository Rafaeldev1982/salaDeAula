"use client"

import { CustomButton } from "@/components/CustomButton";
import { FormEvent } from "react";

const Page = () => {

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert('Formulário enviado!');
  }

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <h1 className="text-5xl mb-3">Form de login</h1>
      <form onSubmit={handleFormSubmit}>
        <input type="text" />
        <input type="submit" />
      </form>

    </div>
  );
}

export default Page;    