import { CSSProperties } from "react";

export type difficultyprops = {
  img: string;
};

const Difficulty = (props: difficultyprops) => {
  const difficultystyle: CSSProperties = {
    width: "20px",
    height: "20px",
    borderWidth: "99999px",
  };
  const imgStyle: CSSProperties = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };
  return (
    <div style={difficultystyle}>
      <img style={imgStyle} src={props.img} alt="" />
    </div>
  );
};

export default Difficulty;
