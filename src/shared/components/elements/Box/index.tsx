import { CSSProperties, ReactNode } from "react";

export type BoxElementType =
  | "div"
  | "header"
  | "nav"
  | "section"
  | "footer"
  | "main";
interface Props {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
  as?: BoxElementType;
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
    main: (
      <main style={style} className={className}>
        {children}
      </main>
    ),
  };

  return element[as];
};
