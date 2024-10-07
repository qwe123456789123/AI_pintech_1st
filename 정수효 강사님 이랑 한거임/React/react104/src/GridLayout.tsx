import { CSSProperties, ReactNode } from "react";

type gridlayoutProps = {
  columnNumer: number;
  component: ReactNode;
};

const GridLaYout = (props: gridlayoutProps) => {
  const gridlayoutStyle: CSSProperties = {
    display: "grid",
    gridTemplateColumns: `repeat(${props.columnNumer},1fr)`,
    gap: "10px",
  };
  return <section style={gridlayoutStyle}></section>
};
