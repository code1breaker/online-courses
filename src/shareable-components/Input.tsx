"use client";

import { validateEmail, validateText } from "@/utils/validate";
import { useState } from "react";

interface InputType {
  type: string;
  label: string;
  name: string;
  placeholder: string;
  className?: string;
}

const Input = ({ type, label, name, placeholder, className }: InputType) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    setError("")
  };

  const handleInputBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {type,value} = e.target
    if (value.trim() == "") {
      setError(`${name} is required`);
      return
    }

    switch(type){
      case "text":
        setError(validateText(value))
        break;
      case "email":
        setError(validateEmail(value))
        break;
    }

  };

  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm md:text-base font-medium">{label}</label>
      <input
        type={type}
        name={name}
        value={input}
        placeholder={placeholder}
        className={`bg-[#FCFCFD] p-3 md:p-4 border-2 border-[#F1F1F3] outline-none rounded-lg placeholder:text-[#656567] ${error && "border-red-500"}  ${className}`}
        onChange={handleInputChange}
        onBlur={handleInputBlur}
      />
      {error && (
        <label className="text-sm text-red-500 font-medium">{error}</label>
      )}
    </div>
  );
};

export default Input;
