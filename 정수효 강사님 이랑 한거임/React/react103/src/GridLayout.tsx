import { CSSProperties } from "react";
import Button2 from "./Button2";

const GridLayout = () => {
  const gridstyle: CSSProperties = {
    display: "grid",
    gridAutoColumns: "reprat(3,1fr)",
    gap: "20px",
  };

  return (
    <section style={gridstyle}>
      <Button2 backgroundColor="Primary" borderRadius="Hard"></Button2>
      <Button2 backgroundColor="Primary" borderRadius="Smooth"></Button2>
      <Button2 backgroundColor="Primary" borderRadius="Circle"></Button2>
      <Button2 backgroundColor="Hover" borderRadius="Hard"></Button2>
      <Button2 backgroundColor="Hover" borderRadius="Smooth"></Button2>
      <Button2 backgroundColor="Hover" borderRadius="Circle"></Button2>
      <Button2 backgroundColor="Deactive" borderRadius="Hard"></Button2>
      <Button2 backgroundColor="Deactive" borderRadius="Smooth"></Button2>
      <Button2 backgroundColor="Deactive" borderRadius="Circle"></Button2>
    </section>
  );
};
export default GridLayout;
