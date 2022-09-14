import React from "react";

type SquareProps = {
  onClick: () => void;
  value: string | null;
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
