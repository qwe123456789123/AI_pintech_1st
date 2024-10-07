import { CSSProperties } from "react";

export type AlbumProps = {
  image: string;
};

const Album = (props: AlbumProps) => {
  const divStyle: CSSProperties = {
    width: "130px",
    height: "150px",
  };

  const imgStyle: CSSProperties = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "10px",
  };

  return (
    <div style={divStyle}>
      <img style={imgStyle} src={props.image} alt="" />
    </div>
  );
};
export default Album;
