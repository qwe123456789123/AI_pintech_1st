// general function
function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

// arrow function[신문법]
// () => {}
const add1 = (x, y) => {
  return x + y;
};

const subtract1 = (x, y) => {
  return x - y;
};

// ~~ 과일을 넣으면 ~ 맛 아이스크림 주는 함수\
const food = (x) => {
  return `${x}맛 아이스크림`;
};
// 문자 3개 넣으면 배열로 만들어 주는 함수
const string = (a, b, c) => {
  return [a, b, c];
};
// 숫자를 넣으면 홀수인지 짝수인지 알려주는 함수
const number = (x) => {
  return x % 2 == 1 ? "짝수" : "홀수";
};
