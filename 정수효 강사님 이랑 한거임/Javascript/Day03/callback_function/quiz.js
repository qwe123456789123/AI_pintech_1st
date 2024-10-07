// makecoffee 함수 만들기 [커피 준비 - 커피 완료]
// americano,latte,vanilla 만들기

const makecoffee = (x) => {
  console.log("커피 준비");
  x();
  console.log("커피 완료");
};

const americano = () => {
  console.log("원두내리기");
  console.log("물 준비");
  console.log("썩기");
};

const latte = () => {
  console.log("원두 내리기");
  console.log("우유 준비");
  console.log("썩기");
};

const vanilla = () => {
  console.log("원두 준비");
  console.log("바닐라 준비");
  console.log("썩기");
};

makecoffee(americano);
makecoffee(latte);
makecoffee(vanilla);
makecoffee(() => {
  console.log("원두내리기");
  console.log("물 준비");
  console.log("썩기");
  console.log("망고 추가");
});
