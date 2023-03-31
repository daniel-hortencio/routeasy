"use client";

import { ReactNode } from "react";

export interface InputBaseProps {
  placeholder?: string;
  type?: "text" | "password";
  icon?: ReactNode;
}

export const InputBase = ({ placeholder, type, icon }: InputBaseProps) => {
  return (
    <div className="bg-white px-6 flex items-center h-12 justify-between rounded-full ">
      <input
        placeholder={placeholder}
        type={type}
        className="w-full placeholder-textGray-dark"
        autoComplete="off"
      />
      {icon && <div className="ml-4">{icon}</div>}
    </div>
  );
};
