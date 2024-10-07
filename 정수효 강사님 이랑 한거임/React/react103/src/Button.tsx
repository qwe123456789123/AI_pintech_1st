import { CSSProperties } from "react";

type propsType = {
  color: string;
  padding: string;
  text: string;
};

const Button = (props: propsType) => {
  const buttonstyle: CSSProperties = {
    color: props.color,
    padding: props.padding,
  };
  return <button style={buttonstyle}>{props.text}</button>;
};
export default Button;
