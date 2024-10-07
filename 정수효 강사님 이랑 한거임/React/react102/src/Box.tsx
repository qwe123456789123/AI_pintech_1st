import { CSSProperties } from "react";

type propsType = {
  backgroundColor: "red" | "blue" | "lime" | "pink";
  widht: string;
  height: string;
  text: string;
};

const Box = (props: propsType) => {
  const color: CSSProperties = {
    width: props.widht,
    height: props.height,
    backgroundColor: props.backgroundColor,
  };
  return <div style={color}>{props.text}</div>;
};

export default Box;
