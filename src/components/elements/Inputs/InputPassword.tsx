"use client";

import { useState } from "react";
import { InputBase, InputBaseProps } from "./InputBase";
import Icon from "../Icon";

interface Props extends InputBaseProps {}

export const InputPassword = ({ placeholder }: Props) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <InputBase
      placeholder={placeholder}
      type={showPassword ? "text" : "password"}
      icon={(
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
        >
          <Icon name={showPassword ? "HiOutlineEyeOff" : "HiOutlineEye"} size={20}/>
        </button>
      )}
    />
  );

 
};
