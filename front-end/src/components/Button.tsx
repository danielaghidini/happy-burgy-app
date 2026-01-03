type ButtonType = {
  title: string;
  variant?: "fill" | "outline";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  title,
  variant = "fill",
  className,
  ...props
}: ButtonType) => {
  const defaultClass = "btn-fill mt-2 cursor-pointer";
  const outlineClass = "btn-outline mt-2 cursor-pointer";
  return (
    <button
      className={`${variant === "fill" ? defaultClass : outlineClass} ${className || ""}`}
      {...props}
    >
      {title}
    </button>
  );
};

export default Button;
