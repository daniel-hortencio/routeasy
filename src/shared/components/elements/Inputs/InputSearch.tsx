"use client";

import { InputBase, InputBaseProps } from "./InputBase";
import Icon from "../Icon";
import { useState } from "react";
import { Box } from "../Box";

interface Props extends InputBaseProps {
  variant?: "fixed" | "collapsible";
}

export const InputSearch = ({ placeholder, variant = "fixed" }: Props) => {
  const [collapsed, setCollapsed] = useState(true);
  const [value, setValue] = useState("");

  return (
    <Box className={`relative flex justify-end flex-auto`}>
      <div
        className={`bg-white flex items-center h-12 justify-between rounded-full overflow-hidden relative shadow-md text-textGray-dark fill-textGray-dark focus-within:text-primary focus-within:fill-primary transition-all ${
          variant === "collapsible" && collapsed ? "w-12" : "w-full"
        }`}
      >
        <input
          placeholder={placeholder}
          value={value}
          onBlur={() => {
            if (variant === "collapsible" && value === "") setCollapsed(true);
          }}
          onChange={(e) => setValue(e.target.value)}
          className={`w-full placeholder-textGray-dark pl-6 pr-14 h-full text-textDefault `}
          autoComplete="off"
        />
        <div className="absolute h-full right-0 flex items-center">
          <button
            type="button"
            className="p-1.5 m-2  hover:text-primary transition-all "
            onClick={() => setCollapsed(false)}
          >
            <Icon name="MagnifyingGlass" size={24} />
          </button>
        </div>
      </div>
    </Box>
  );
};
