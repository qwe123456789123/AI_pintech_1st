// 1. [10,20,30,40,50]을 30 이하이면 100 더하기 아니면 200 더하기
// 2. ["americano","latte","vanila","mocha","mint","tea"]
// 5글자 이하면 대문자화 아니면 "커피" 로 바꾸기

const num = [10, 20, 30, 40, 50];

const a = (x) => {
  return x >= 30 ? x + 100 : x + 200;
};

const coffee = ["americano", "latte", "vanila", "mocha", "mint", "tea"];

const word = (x) => {
  return x.length <= 5 ? x.toUpperCase() : "☕";
};
const add = (x, y) => {
  return x + y;
};
