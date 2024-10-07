import { CSSProperties } from "react";

export type positionprops = {
  img: string;
};

const Position = (props: positionprops) => {
  const positionstyle: CSSProperties = {
    width: "20px",
    height: "20px",
  };

  const imgStyle: CSSProperties = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };
  return (
    <div style={positionstyle}>
      <img style={imgStyle} src={props.img} alt="" />
    </div>
  );
};

export default Position;
