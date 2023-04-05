interface Props {
  text: string | JSX.Element;
  size?: "small" | "large";
  height?: "low" | "high";
  color?: "primary" | "secondary";
  onClick?: () => void;
}

export const Button = ({
  text,
  size = "small",
  color = "secondary",
  height = "high",
  onClick,
}: Props) => {
  function getClassName() {
    let className =
      " rounded-full flex justify-center items-center transition-all flex-nowrap";

    className += ` ${
      color === "primary"
        ? "bg-primary hover:bg-primaryHover text-white "
        : "bg-secondary text-primary hover:bg-primaryHover hover:text-white "
    } ${height === "high" ? "h-12" : "h-8 text-sm"}`;

    className += ` ${size === "small" ? "w-12" : "w-full"}`;

    return className;
  }

  return (
    <button className={getClassName()} onClick={onClick}>
      {text}
    </button>
  );
};
