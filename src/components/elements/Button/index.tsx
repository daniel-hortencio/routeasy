import { HTMLAttributes } from "react";

interface Props {
  text: string;
  size?: "small" | "large";
  color?: "primary" | "secondary";
  onClick: () => void;
}

export const Button = ({
  text,
  size = "small",
  color = "secondary",
  onClick,
}: Props) => {
  function getClassName() {
    let className =
      "h-12 rounded-full flex justify-center items-center transition-all";

    className += ` ${
      color === "primary"
        ? "bg-primary hover:bg-primaryHover text-white "
        : "bg-secondary"
    }`;
    className += ` ${size === "small" ? "w-12" : "w-full"}`;

    return className;
  }

  return (
    <button className={getClassName()} onClick={onClick}>
      {text}
    </button>
  );
};
