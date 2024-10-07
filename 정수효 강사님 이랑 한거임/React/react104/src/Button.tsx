import { CSSProperties } from "react";

type propsType = {
  borderRadius: "Hard" | "Smooth" | "Circle";
  backgroundColor: "primary" | "hover" | "deactive";
};

const Button = (props: propsType) => {
  const sizestyle = {
    Hard: "0px",
    Smooth: "30px",
    Circle: "50px",
  };
  const backgroundstyle = {
    primary: "red",
    hover: "yellow",
    deactive: "blue",
  };
  const buttonstyle: CSSProperties = {
    backgroundColor: backgroundstyle[props.backgroundColor],
    borderRadius: sizestyle[props.borderRadius],
    width: "100px",
    height: "100px",
    padding: "10px 30px",
    color: "white",
    fontSize: "32px",
    border: "none",
  };
  return <button style={buttonstyle}></button>;
};
export default Button;
