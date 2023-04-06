import { Squash } from "hamburger-react";
import { Dispatch, SetStateAction } from "react";
import Icon from "../Icon";

interface Props {
  isOpen: boolean;
  onChange: Dispatch<SetStateAction<boolean>>;
}

/* export const MenuMobileIcon = ({ isOpen, onChange }: Props) => {
  return <Squash toggled={isOpen} toggle={onChange} duration={0.2} />;
}; */

export const MenuMobileIcon = ({ isOpen, onChange }: Props) => {
  return (
    <button
      className="h-full flex items-center"
      onClick={() => onChange(!isOpen)}
    >
      <Icon name={isOpen ? "List" : "X"} size={32} />
    </button>
  );
};
