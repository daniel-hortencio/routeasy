"use client";

import { InputBase, InputBaseProps } from "./InputBase";

interface Props extends InputBaseProps {}

export const InputText = ({ placeholder }: Props) => {
  return <InputBase type="text" placeholder={placeholder} />;
};
