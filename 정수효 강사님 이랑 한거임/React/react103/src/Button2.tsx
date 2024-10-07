import { CSSProperties } from "react";

type propsType = {
  backgroundColor: "Primary" | "Hover" | "Deactive";
  borderRadius: "Hard" | "Smooth" | "Circle";
};

const Button2 = (props: propsType) => {
  const radiusstyle = {
    Hard: "0px",
    Smooth: "10px",
    Circle: "20px",
  };
  const backgroundstyle = {
    Primary: "#205bf3",
    Hover: "#478df5",
    Deactive: "#979797",
  };
  const buttonstyle: CSSProperties = {
    backgroundColor: backgroundstyle[props.backgroundColor],
    borderRadius: radiusstyle[props.borderRadius],
    width: "100px",
    height: "100px",
  };
  return <button style={buttonstyle}></button>;
};
export default Button2;
