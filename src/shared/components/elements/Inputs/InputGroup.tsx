"use client";

import { ReactNode } from "react";

interface Props {
  label: string;
  children: ReactNode;
  linkText?: string;
  linkTo?: string;
}

export const InputGroup = ({ label, children, linkText, linkTo }: Props) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <label className=" font-semibold text-custom-gray-300">{label}</label>
        {linkText && (
          <a
            href={linkTo}
            className="text-primary hover:text-primary-dark transition-all"
          >
            {linkText}
          </a>
        )}
      </div>
      {children}
    </div>
  );
};
