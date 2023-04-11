"use client";

import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  as?:
    | "p"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "strong"
    | "small"
    | "span";
}

export const Text = ({ children, className, as = "p" }: Props) => {
  const getClassName = () => `text-textDefault ${className}`;

  const element = {
    p: <p className={getClassName()}>{children}</p>,
    h1: <h1 className={getClassName()}>{children}</h1>,
    h2: <h2 className={getClassName()}>{children}</h2>,
    h3: <h3 className={getClassName()}>{children}</h3>,
    h4: <h4 className={getClassName()}>{children}</h4>,
    h5: <h5 className={getClassName()}>{children}</h5>,
    h6: <h6 className={getClassName()}>{children}</h6>,
    strong: <strong className={getClassName()}>{children}</strong>,
    small: <small className={getClassName()}>{children}</small>,
    span: <span className={getClassName()}>{children}</span>,
  };

  return element[as];
};
