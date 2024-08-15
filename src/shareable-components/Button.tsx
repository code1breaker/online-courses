"use client";
import { ReactNode } from "react";

type ButtonPropType = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "tertiary" | "quatrernary";
  onClick: (e:React.MouseEvent<HTMLButtonElement>)=>void;
  value?: string,
  className?: string
};

type stylesType = {
  [key: string]: string;
};

const Button = ({ children, variant = "primary", onClick, value, className } : ButtonPropType) => {
  const styles: stylesType = {
    primary: "bg-primary text-white",
    secondary: "bg-white",
    tertiary: "",
    quatrernary:"bg-[#FCFCFD] border-[1px] border-[#F1F1F3]",
  };

  return (
    <button
      onClick={onClick}
      className={`${styles[variant]} rounded-lg px-5 py-3 lg:px-6 text-sm 2xl:text-lg min-w-fit w-full h-full ${className}`}
      value={value}
    >
      {children}
    </button>
  );
};

export default Button;
