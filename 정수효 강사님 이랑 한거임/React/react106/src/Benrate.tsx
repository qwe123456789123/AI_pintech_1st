import { CSSProperties } from "react";

export type benrateprops = {
  text: string;
};

const Benrate = (props: benrateprops) => {
  const benratestyle: CSSProperties = {
    fontSize: "12px",
    fontWeight: "bold",
  };
  return <div style={benratestyle}>{props.text}</div>;
};

export default Benrate;
