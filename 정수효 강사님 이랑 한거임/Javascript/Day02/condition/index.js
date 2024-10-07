//조건문!(조건에 맞으면 코드를 실행함)

const num = Number(prompt("숫자 입력"));

if (num > 0) {
  console.log("입력한 값은 양수입니다.");
} else if (num == 0) {
  console.log("0입니다.");
} else {
  console.log("입력한 값은 음수입니다.");
}

console.log("프로그램 끝");

// 수학 시험 점수 프로그램

const math = Number(prompt("숫자 입력"));
//90 점 이상이면 A 80점 B 70점 C 60점 D 그 외 수강철회

if (math >= 90) {
  console.log("A");
} else if (math >= 80) {
  console.log("B");
} else if (math >= 70) {
  console.log(C);
} else if (math >= 60) {
  console.log(D);
} else {
  console.log("재수강");
}

// 숫자를 입력해서 양의 홀 양의 짝수 0 용의 홀수 음의 짝수 알려주시오
// ex) -3 -> 음의 홀수, -4 -> 음의 짝수

const number = Number(prompt("숫자 입력"));

if (number > 0 && number / 2 == 1) {
  console.log("양의 홀수");
} else if (number > 0 && number / 2 == 0) {
  console.log("양의 짝수");
} else if (number < 0 && number / 2 == 0) {
  console.log("음의 짝수");
} else if (number < 0 && number / 2 == 1) {
  console.log("음의 홀수");
} else {
  console.log("0 입니다.");
}
