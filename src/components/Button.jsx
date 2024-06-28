
const Button = ({children,variant="primary",onClick}) => {

    const styles = {
        primary:"bg-primary text-white",
        secondary:"bg-white",
        tertiary:""
    }

  return (
    <button onClick={onClick} className={`${styles[variant]} rounded-lg px-5 py-3 lg:px-6 text-sm 2xl:text-lg`}>
      {children}
    </button>
  )
}

export default Button
