import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

export const Footer = ({ children }: Props) => {
  return (
    <footer>
      <h1>Footer</h1>
      {children}
    </footer>
  );
};
