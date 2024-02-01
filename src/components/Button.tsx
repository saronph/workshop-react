interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: React.ReactNode;
  title?: string;
  isAdmin?: boolean;
  isReset?: boolean;
}

export function Button({
  title,
  isAdmin,
  isReset,
  children,
  ...rest
}: ButtonProps) {
  const bgColor = isReset
    ? "mt-10 border-2 p-2 bg-red-400"
    : "mt-10 border-2 p-2 bg-gray-300";
  return (
    <button className={bgColor} {...rest}>
      {children}
      {/* {title}
      {isAdmin ? "admin" : "user"} */}
    </button>
  );
}
