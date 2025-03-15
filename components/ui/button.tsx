import { ButtonHTMLAttributes, FC, ReactNode } from "react";

import { twMerge } from "tailwind-merge";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  className?: string;
  variant?: "default" | "icon" | "faded";
  px?: boolean;
  radius?: "none" | "sm" | "md" | "lg" | "xl" | "full";
};

const baseStyles =
  "text-sm 2xl:text-base cursor-pointer h-[30px] 2xl:h-[36px] min-w-[30px] py-2 px-3.5 flex items-center justify-center disabled:cursor-not-allowed transition";

const borderRadius = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  full: "rounded-full",
};

const buttonVariants = {
  default: "bg-primary text-white",
  icon: "rounded-full hover:bg-gray-100 h-fit 2xl:h-fit w-fit p-3",
  faded: "bg-primary/13 text-primary hover:bg-primary/20",
};

const Button: FC<ButtonProps> = ({
  children,
  className,
  variant = "default",
  radius = "md",
  px = true,
  ...props
}) => {
  return (
    <button
      className={twMerge(
        baseStyles,
        px && "px-6",
        borderRadius[radius],
        buttonVariants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
