import { CSSProperties } from "react";

type propsType = {
  backgroundColor: "pink" | "orange" | "skyblue" | "red";
  size: "small" | "medium" | "large";
};
const Box = (props: propsType) => {
  const sizemap = {
    small: "50px",
    medium: "100px",
    large: "200px",
  };
  const boxstyle: CSSProperties = {
    background: props.backgroundColor,
    width: sizemap[props.size],
    height: sizemap[props.size],
  };
  return <div style={boxstyle}></div>;
};
export default Box;
