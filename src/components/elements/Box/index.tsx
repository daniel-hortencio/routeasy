import { CSSProperties, ReactNode } from "react";

interface Props {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export const Box = ({ children, className, style }: Props) => {
  return (
    <div style={style} className={className}>
      {children}
    </div>
  );
};
