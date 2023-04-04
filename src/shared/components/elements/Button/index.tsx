interface Props {
  text: string | JSX.Element;
  size?: "small" | "large";
  color?: "primary" | "secondary";
  onClick?: () => void;
}

export const Button = ({
  text,
  size = "small",
  color = "secondary",
  onClick,
}: Props) => {
  function getClassName() {
    let className =
      "h-12 rounded-full flex justify-center items-center transition-all flex-nowrap";

    className += ` ${
      color === "primary"
        ? "bg-primary hover:bg-primaryHover text-white "
        : "bg-secondary text-primary hover:bg-primaryHover hover:text-white "
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
