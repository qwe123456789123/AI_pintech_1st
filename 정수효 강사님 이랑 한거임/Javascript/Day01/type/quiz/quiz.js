// const a = Number(prompt("첫번째 숫자 입력"));
// const b = Number(prompt("두번째 숫자 입력"));

// console.log(`콘솔의 두 수의 합은 ${a + b}입니다.`);

const a = Number(prompt("가로 길이"));
const b = Number(prompt("세로 길이"));
const c = Number(prompt("밑변 길이"));
const d = Number(prompt("반지름 길이"));
const e = Number(prompt("출생년도"));
const g = Number(prompt("얼마를 환전 할겁니까"));

console.log(`넓이는 ${a + b} 이고 둘레는 ${a * 4} 입니다.`);
console.log(`밑변의 길이는 ${c} 이고 정삼각형의 넓이는 ${(a * c) / 2}입니다.`);
console.log(
  `반지름의 길이는 ${d} 이고 원의 넓이는 ${d * d * 3.14} 이고 원의 둘레는 ${
    2 * 3.14 * d
  }`
);
console.log(`출생년도는 ${e} 이고 나이는 ${2024 - e}입니다.`);
console.log(`지금 환전율은 ${g * 0.11}엔 입니다.`);
