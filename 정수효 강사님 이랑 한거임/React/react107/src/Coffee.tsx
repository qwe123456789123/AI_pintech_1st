import { useState } from "react";
import Cafe from "./Cafe";

const Coffee = () => {
  const [coffee, setcoffee] = useState({
    Americano: { amount: 0, price: 1000 },
    Latte: { amount: 0, price: 1500 },
    Bubbletea: { amount: 0, price: 2000 },
  });

  const changeAmericano = () => {
    setcoffee((prev) => {
      return {
        ...prev,
        Americano: { amount: prev.Americano.amount + 1, price: 1000 },
      };
    });
  };
  const changeLatte = () => {
    setcoffee((prev) => {
      return {
        ...prev,
        Latte: { amount: prev.Latte.amount + 1, price: 1500 },
      };
    });
  };

  const changeBubbletea = () => {
    setcoffee((prev) => {
      return {
        ...prev,
        Bubbletea: { amount: prev.Bubbletea.amount + 1, price: 2000 },
      };
    });
  };

  return (
    <div>
      <Cafe
        click={changeAmericano}
        menuname={"아메리카노"}
        menuamount={coffee.Americano.amount}
      />
      <Cafe
        click={changeLatte}
        menuname={"라떼"}
        menuamount={coffee.Latte.amount}
      />
      <Cafe
        click={changeBubbletea}
        menuname={"버블티"}
        menuamount={coffee.Bubbletea.amount}
      />
      <span>
        총 갯수 :{" "}
        {coffee.Americano.amount +
          coffee.Latte.amount +
          coffee.Bubbletea.amount}{" "}
        /
      </span>
      <span>
        총 가격 :{" "}
        {coffee.Americano.amount * coffee.Americano.price +
          coffee.Latte.amount * coffee.Latte.price +
          coffee.Bubbletea.amount * coffee.Bubbletea.price}
      </span>
    </div>
  );
};

export default Coffee;
