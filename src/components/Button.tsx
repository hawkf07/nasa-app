import React, { FC } from "react";
import clsx from "clsx";
interface Button extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "secondary";
}

export const Button: FC<Button> = ({ variant, ...rest }) => {
  return (
    <button {...rest} className={clsx(`bg-${variant} p-3 `)}>
      {variant}
    </button>
  );
};
