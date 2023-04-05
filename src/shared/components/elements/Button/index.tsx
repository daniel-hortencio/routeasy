interface Props {
  text: string | JSX.Element;
  size?: "small" | "large";
  height?: "low" | "high";
  color?: "primary" | "secondary" | "warning";
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
    const color_schemes = {
      primary: "bg-primary hover:bg-primaryHover text-white",
      secondary:
        "bg-secondary text-primary hover:bg-primaryHover hover:text-white",
      warning: "bg-warning hover:bg-warningHover text-white",
    };

    let className =
      " rounded-full flex justify-center items-center transition-all flex-nowrap";

    className += ` ${color_schemes[color]}`;
    className += ` ${height === "high" ? "h-12" : "h-8 text-sm"}`;
    className += ` ${size === "small" ? "w-12" : "w-full"}`;

    return className;
  }

  return (
    <button className={getClassName()} onClick={onClick}>
      {text}
    </button>
  );
};
