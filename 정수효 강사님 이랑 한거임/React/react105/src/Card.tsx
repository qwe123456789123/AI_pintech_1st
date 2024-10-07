import { CSSProperties } from "react";
import CardDown from "./CardDown";

type CardProps = CardUpperProps;

const Card = (props: CardProps) => {
  const cardStyle: CSSProperties = {
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  };
  return (
    <article style={cardStyle}>
      <CardUpper {...props} />
      <CardDown />
    </article>
  );
};

export default Card;
