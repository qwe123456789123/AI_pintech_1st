import { CSSProperties } from "react";
import Button from "./Button";

type buttongridlayoutptops = {
  colnmnNumver: number;
};

const Grid = (props: buttongridlayoutptops) => {
  const gridstyle: CSSProperties = {
    display: "grid",
    gridTemplateColumns: `repeat(${props.colnmnNumver},1fr)`,
    gap: "20px",
  };
  return (
    <section style={gridstyle}>
      <Button backgroundColor="deactive" borderRadius="Circle"></Button>
      <Button backgroundColor="deactive" borderRadius="Hard"></Button>
      <Button backgroundColor="deactive" borderRadius="Smooth"></Button>
      <Button backgroundColor="hover" borderRadius="Smooth"></Button>
      <Button backgroundColor="hover" borderRadius="Circle"></Button>
      <Button backgroundColor="hover" borderRadius="Hard"></Button>
      <Button backgroundColor="primary" borderRadius="Smooth"></Button>
      <Button backgroundColor="primary" borderRadius="Hard"></Button>
      <Button backgroundColor="primary" borderRadius="Circle"></Button>
    </section>
  );
};
export default Grid;
