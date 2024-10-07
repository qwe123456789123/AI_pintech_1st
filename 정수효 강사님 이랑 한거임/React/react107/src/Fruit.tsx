type fruitprops = {
  fruitname: string;
  fruitamount: number;
  click: () => void;
};

const Fruit = (props: fruitprops) => {
  return (
    <span onClick={props.click}>
      {props.fruitname}: {props.fruitamount}
    </span>
  );
};

export default Fruit;
