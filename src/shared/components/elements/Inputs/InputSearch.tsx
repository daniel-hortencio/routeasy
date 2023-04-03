"use client";

import { InputBase, InputBaseProps } from "./InputBase";
import Icon from "../Icon";

interface Props extends InputBaseProps {}

export const InputSearch = ({ placeholder }: Props) => {
  return (
    <InputBase
      placeholder={placeholder}
      className="shadow-md text-textGray-dark focus-within:text-primary"
      icon={
        <button
          type="button"
          className="p-2 m-2  hover:text-primary transition-all"
        >
          <Icon name="CgSearch" size={24} />
        </button>
      }
    />
  );
};
