type cafeprops = {
  menuname: string;
  menuamount: number;
  click: () => void;
};

const Cafe = (props: cafeprops) => {
  return (
    <span onClick={props.click}>
      {props.menuname}: {props.menuamount}
    </span>
  );
};

export default Cafe;
