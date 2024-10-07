import { CSSProperties } from "react";

type propsType = {
  backgroundColor: string;
};

const Color = (props: propsType) => {
  const Colors: CSSProperties = {
    backgroundColor: props.backgroundColor,
    borderRadius: "9999px",
    width: "200px",
    height: "200px",
  };
  return <div style={Colors}></div>;
};

export default Color;
