import { CSSProperties } from "react";
import Rank, { rankprops } from "./Rank";
import CharacterName, { characterprops } from "./CharacterName";
import Tier, { tierproprs } from "./Tier";
import Position, { positionprops } from "./Position";
import Winningrate, { winningrateprops } from "./Winningrate";
import Pickrate, { pickrateprops } from "./Pickrate";
import Benrate, { benrateprops } from "./Benrate";
import Difficulty, { difficultyprops } from "./Difficulty";

type CardProps = rankprops &
  characterprops &
  tierproprs &
  positionprops &
  winningrateprops &
  pickrateprops &
  benrateprops &
  difficultyprops;

const Card = (props: CardProps) => {
  const cardStyle: CSSProperties = {
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  };
  return (
    <article style={cardStyle}>
      <Rank ranknum={}></Rank>
      <CharacterName img={""} text={""}></CharacterName>
      <Tier img={""}></Tier>
      <Position img={""}></Position>
      <Winningrate text={""}></Winningrate>
      <Pickrate text={""}></Pickrate>
      <Benrate text={""}></Benrate>
      <Difficulty img={""}></Difficulty>
    </article>
  );
};

export default Card;
