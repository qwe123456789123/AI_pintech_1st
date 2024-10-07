import { useState } from "react";
import Fruit from "./Fruit";

const Test = () => {
  const [furuirs, setfuruirs] = useState({
    apple: { amount: 0, price: 1000 },
    banana: { amount: 0, price: 1500 },
    orange: { amount: 0, price: 2000 },
  });

  const changeapple = () => {
    setfuruirs((prev) => {
      return { ...prev, apple: { amount: prev.apple.amount + 1, price: 1000 } };
    });
  };
  const changebanana = () => {
    setfuruirs((prev) => {
      return {
        ...prev,
        banana: { amount: prev.banana.amount + 1, price: 1500 },
      };
    });
  };

  const changeorange = () => {
    setfuruirs((prev) => {
      return {
        ...prev,
        orange: { amount: prev.orange.amount + 1, price: 2000 },
      };
    });
  };

  return (
    <div>
      <Fruit
        click={changeapple}
        fruitname={"사과"}
        fruitamount={furuirs.apple.amount}
      />
      <Fruit
        click={changebanana}
        fruitname={"바나나"}
        fruitamount={furuirs.banana.amount}
      />
      <Fruit
        click={changeorange}
        fruitname={"오렌지"}
        fruitamount={furuirs.orange.amount}
      />
      <span>
        총 갯수 :{" "}
        {furuirs.apple.amount + furuirs.banana.amount + furuirs.orange.amount} /
      </span>
      <span>
        총 가격 :{" "}
        {furuirs.apple.amount * furuirs.apple.price +
          furuirs.banana.amount * furuirs.banana.price +
          furuirs.orange.amount * furuirs.orange.price}
      </span>
    </div>
  );
};

export default Test;
