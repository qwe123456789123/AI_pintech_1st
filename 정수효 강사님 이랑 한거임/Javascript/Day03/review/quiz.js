// 1. 어떤숫자를 넣으면 홀수인지 짝수인지 돌려주는 함수
// 2. 어떤숫자를 넣으면 5배수이면 5의 배수 아니면 5의 배수 아닙니다. 표현
// 3. 어떤숫자를 넣으면 1- 일반 팝콘 2- 카라멜 팝콘 3- 치즈 팝콘, 그외 그런거 없을 돌려주느 함수
// 4. 어떠한 문자열 3개 넣으면 배열로 도려주는 함수

function oddeven(x) {
  return x % 2 == 1 ? "홀수" : "짝수";
}

function number(x) {
  return x % 5 == 0 ? "5의 배수" : "5의 배수 아님";
}

function popcorn(x) {
  if (x == 1) {
    return "일반";
  } else if (x == 2) {
    return "카라멜";
  } else if (x == 3) {
    return "치즈";
  } else {
    return "없음";
  }
}

function popcorn1(x) {
  return `${x} 팝콘`;
}

function String(a, b, c) {
  return [a, b, c];
}

// 어떤한 과일 이름을 넣으면 ~~ 맛 아이스크림
function food(x) {
  return `${x} 맛 아이스크림`;
}

function foodbox(a, b, c) {
  return [a, b, c];
}

function oddeven1(x) {
  return x % 2 == 1;
}
