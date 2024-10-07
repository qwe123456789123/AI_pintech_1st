// 1. 출생년도를 물어보고 2005 년이하면
// 성인입니다. 아니면 미성년자 입니다.

const year = Number(prompt("출생년도"));
console.log(`${2005 <= year ? "성인" : "미성년자"} 입니다. `);

// 2. 놀이기구를 탈려고 키를 물었음
// 150cm 이하면 탈수가 엇습니다. 아니먄 탈수있습니다.
const cm = Number(prompt("너님 키 몇?"));
console.log(`너님 ${150 <= cm ? "탄다" : "못탄다"}`);

//3. 양의 정수를 입력 박고 분조를 바꾸는 프로그램
//ex) 63 -> 1분 30초 125 -> 2분 5초

const time = Number(prompt("숫자를 입력 하면 시간으로 바꿔줌"));
console.log(`${Math.trunc(time / 60)}분${time % 60}초 입니다.`);

// 다른 방법
const num = Number(prompt("정수 입력"));
const sec = num % 60;
const min = parseInt(num / 60);
