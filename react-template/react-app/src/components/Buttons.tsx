import React from "react";

interface Props {
  children: string;
  color?: string;
  onClick: () => void;
}

const Buttons = ({ children, onClick, color = "primary" }: Props) => {
  return (
    <div className={"btn btn-" + color} onClick={onClick}>
      {children}
    </div>
  );
};

export default Buttons;
