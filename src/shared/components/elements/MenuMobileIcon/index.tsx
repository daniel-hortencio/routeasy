import { Squash } from "hamburger-react";
import { Dispatch, SetStateAction } from "react";

interface Props {
  isOpen: boolean;
  onChange: Dispatch<SetStateAction<boolean>>;
}

export const MenuMobileIcon = ({ isOpen, onChange }: Props) => {
  return <Squash toggled={isOpen} toggle={onChange} duration={0.2} />;
};
