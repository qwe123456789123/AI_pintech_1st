const a = prompt("운동");
const d = prompt("운동");
const e = prompt("운동");
console.log(
  `첫 번째 운동 ${a} 두 번째 운동 ${d} 세 번째 운동 ${e} 순서로 운동합니다.`
);

const b = Number(prompt("커피 몇잔"));
const c = Number(prompt("커피 가격"));
console.log(
  `커피 한잔의 가격은 ${c} 이고 커피는 총 ${b}잔입니다. 총 가격은 ${
    b * c
  } 입니다.`
);

const f = Number(prompt("출생년도"));

console.log(`출생년도는 ${f} 이고 나이는 ${2024 - f}입니다.`);
