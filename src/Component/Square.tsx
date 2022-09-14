import React from "react";

type SquareProps = {
  onClick: React.MouseEventHandler;
  value: string;
};

export default function Square(props: SquareProps) {
  return (
    <button
      className="square"
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
}
