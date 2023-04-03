"use client";

import { ReactNode } from "react";

export interface InputBaseProps {
  placeholder?: string;
  type?: "text" | "password";
  icon?: ReactNode;
}

export const InputBase = ({ placeholder, type, icon }: InputBaseProps) => {
  return (
    <div className="bg-white  flex items-center h-12 justify-between rounded-full overflow-hidden relative">
      <input
        placeholder={placeholder}
        type={type}
        className="w-full placeholder-textGray-dark pl-6 pr-14 h-full"
        autoComplete="off"
      />
      {icon && (
        <div className="absolute h-full right-0 flex items-center">{icon}</div>
      )}
    </div>
  );
};
