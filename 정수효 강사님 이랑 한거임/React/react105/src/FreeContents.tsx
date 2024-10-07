import { CSSProperties } from "react";

type freeContentsProps = {
  services: string;
};

const FreeContents = (props: freeContentsProps) => {
  const freeContentsStyle: CSSProperties = {
    backgroundColor: "#f1f3f6",
    padding: "8px 12px",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "15px",
  };

  const serviceStyle: CSSProperties = {
    fontSize: "12px",
    fontWeight: "bold",
    color: "#999FA9",
  };

  const freeStyle: CSSProperties = {
    fontSize: "12px",
  };

  return (
    <div style={freeContentsStyle}>
      <span style={serviceStyle}>무료 서비스</span>
      <span style={freeStyle}>{props.services}</span>
    </div>
  );
};

export default FreeContents;
