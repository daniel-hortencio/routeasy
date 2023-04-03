import { CSSProperties, ReactNode } from "react";

interface Props {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
  as?: "div" | "header" | "nav" | "section" | "footer";
}

export const Box = ({ children, className, style, as = "div" }: Props) => {
  const element = {
    div: (
      <div style={style} className={className}>
        {children}
      </div>
    ),
    header: (
      <header style={style} className={className}>
        {children}
      </header>
    ),
    nav: (
      <nav style={style} className={className}>
        {children}
      </nav>
    ),
    section: (
      <section style={style} className={className}>
        {children}
      </section>
    ),
    footer: (
      <footer style={style} className={className}>
        {children}
      </footer>
    ),
  };

  return element[as];
};
