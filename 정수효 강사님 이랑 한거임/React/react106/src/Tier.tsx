import { CSSProperties } from "react";

export type tierproprs = {
  img: string;
};

const Tier = (props: tierproprs) => {
  const tierstyle: CSSProperties = {
    width: "20px",
    height: "20px",
  };

  const imgStyle: CSSProperties = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };
  return (
    <div style={tierstyle}>
      <img style={imgStyle} src={props.img} alt="" />
    </div>
  );
};

export default Tier;
