"use client"
import { ReactNode } from "react"

type ButtonPropType = {
  children: ReactNode,
  variant?:"primary" | "secondary" | "tertiary",
  onClick:()=>void
}
type stylesType = {
  [key:string] : string
}
const Button = ({children,variant="primary",onClick}:ButtonPropType) => {

    const styles:stylesType = {
        primary:"bg-primary text-white",
        secondary:"bg-white",
        tertiary:""
    }

  return (
    <button onClick={onClick} className={`${styles[variant]} rounded-lg px-5 py-3 lg:px-6 text-sm 2xl:text-lg w-fit h-fit`}>
      {children}
    </button>
  )
}

export default Button
