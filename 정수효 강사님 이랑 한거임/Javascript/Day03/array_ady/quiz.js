// 1. [1,2,3,4,5] - > 두배 해주기
// 2. [1,2,3,4,5] - > 홀수면 두백 짝수면 서배
// 3. [1,2,3,4,5] - > 3이하면 체리 아니면 수박

// const a = (x) => {
//   return x * 2;
// };
// const num = [1, 2, 3, 4, 5].map(a);
// console.log(num);

// const b = (x) => {
//   return x % 2 == 1 ? x * 2 : x * 3;
// };
// const num1 = [1, 2, 3, 4, 5].map(b);
// console.log(num1);

// const c = (x) => {
//   return x > 3 ? "체리" : "수박";
// };
// const num2 = [1, 2, 3, 4, 5].map(c);
// console.log(num2);

// const fruitarray = [
//   "watermelon",
//   "cherry",
//   "banana",
//   "avocado",
//   "apple",
//   "orange",
//   "pineapple",
//   "strawberry",
// ];

// 1. 문자의 길이가 7글자 이상이면 대문자 아니면 소문자
// 2. 알파뱃 a가 들어가면 대문자화 아니며면 소문자
// 3. 단어 안에 있는 알파벳 a를 '체리'로 바꾸기

// const changeWord = (x) => {
//   return x.length >= 7 ? x.toUpperCase() : x.toLowerCase();
// };

// const quiz1 = fruitarray.map(changeWord);

// const hasA = (x) => {
//   return x.includes("a") ? x.uoUpperCase() : x.toLowerCase();
// };
// const quiz2 = fruitarray.map(hasA);
// const make = (x) => {
//   return x.includes("a", "🍒");
// };
// const quiz3 = fruitarray.map(make);

const starbucks = [
  { name: "americano", price: 4500, shots: 2, ingredients: ["water", "beans"] },
  { name: "latte", price: 6000, shots: 2, ingredients: ["mlik", "baens"] },
  {
    name: "java chip",
    price: 6500,
    shots: 2,
    ingredients: ["mlik", "wjeat", "baens"],
  },
  {
    name: "honey black tea",
    price: 5700,
    shots: 1,
    ingredients: ["grapefruit", "water", "source"],
  },
];

// 1. 모든 가격 10% 할인 할인 한 가격으로 변경
// 2. 성분에 두유 추가
// 3. 이름이 아메리카노면 2000원 할인 가격으로 바꾸고 샷 하나더 늘려주기
// 4. 인플레이션시즌 모든 가격 20% 상승
const event1 = starbucks.map((x) => {
  x.price = x.price * 0.9;
  return x;
});

console.log(event1);

const starbucks2 = [
  { name: "americano", price: 4500, shots: 2, ingredients: ["water", "beans"] },
  { name: "latte", price: 6000, shots: 2, ingredients: ["mlik", "baens"] },
  {
    name: "java chip",
    price: 6500,
    shots: 2,
    ingredients: ["mlik", "wjeat", "baens"],
  },
  {
    name: "honey black tea",
    price: 5700,
    shots: 1,
    ingredients: ["grapefruit", "water", "source"],
  },
];

const event2 = starbucks2.map((x) => {
  x.ingredients.push("soybeen");
  return x;
});
console.log(event2);

const starbucks3 = [
  { name: "americano", price: 4500, shots: 2, ingredients: ["water", "beans"] },
  { name: "latte", price: 6000, shots: 2, ingredients: ["mlik", "baens"] },
  {
    name: "java chip",
    price: 6500,
    shots: 2,
    ingredients: ["mlik", "wjeat", "baens"],
  },
  {
    name: "honey black tea",
    price: 5700,
    shots: 1,
    ingredients: ["grapefruit", "water", "source"],
  },
];

const event3 = starbucks3.map((x) => {
  if (x.name == "americano") {
    x.price = x.price * 0.8;
    x.shots = x.shots + 1;
    return x;
  } else {
    return x;
  }
});
console.log(event3);

const starbucks4 = [
  { name: "americano", price: 4500, shots: 2, ingredients: ["water", "beans"] },
  { name: "latte", price: 6000, shots: 2, ingredients: ["mlik", "baens"] },
  {
    name: "java chip",
    price: 6500,
    shots: 2,
    ingredients: ["mlik", "wjeat", "baens"],
  },
  {
    name: "honey black tea",
    price: 5700,
    shots: 1,
    ingredients: ["grapefruit", "water", "source"],
  },
];

const event4 = starbucks4.map((x) => {
  x.price = x.price * 1.2;
  return x;
});
console.log(event4);
