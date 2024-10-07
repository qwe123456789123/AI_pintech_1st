import { CSSProperties } from "react";

export type characterprops = {
  img: string;
  text: string;
};

const CharacterName = (props: characterprops) => {
  const characterstyle: CSSProperties = {
    width: "20px",
    height: "20px",
  };
  const imgStyle: CSSProperties = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "10px",
  };
  const charactername: CSSProperties = {
    fontSize: "12px",
  };

  return (
    <div style={characterstyle}>
      <img style={imgStyle} src={props.img} alt="" />
      <span style={charactername}></span>
    </div>
  );
};
export default CharacterName;
