import { CSSProperties } from "react";
import Color from "./Color";

const CircleWan = () => {
  const gridStyle: CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    gap: "30px",
  };

  const backgroundColor = [
    "#f7d794",
    "#f8a5c2",
    "#f3a683",
    "#786fa6",
    "#778beb",
    "#63cdda",
    "#cf6a87",
    "#546de5",
    "#f5cd79",
    "#e66767",
  ];

  return (
    <section style={gridStyle}>
      {backgroundColor.map((v) => (
        <Color backgroundColor={v} />
      ))}
    </section>
  );
};

export default CircleWan;
