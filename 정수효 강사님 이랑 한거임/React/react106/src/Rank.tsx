import { CSSProperties } from "react";

export type rankprops = {
  ranknum: number;
};

const Rank = (props: rankprops) => {
  const ranknumberstyle: CSSProperties = {
    fontSize: "12px",
  };

  return <div style={ranknumberstyle}>{props.ranknum}</div>;
};

export default Rank;
