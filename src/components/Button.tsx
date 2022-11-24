import React, { FC, ReactNode } from "react";
import clsx from "clsx";
interface Button extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "secondary";
  children: ReactNode;
}

export const Button: FC<Button> = ({ variant, children, ...rest }) => {
  return (
    <button
      {...rest}
      className={clsx(
        `bg-${variant} p-1 px-2 rounded-md hover:bg-${variant}/20`
      )}
    >
      {children}
    </button>
  );
};
