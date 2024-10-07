// arr 함수들
// map: 바꿔
// filter: 걸러줘, 어떠한 조건에 부합하는 요소만 채워 만녀줌

[10, 20, 30, 40, 50].filter((x) => {
  return 30 > x;
});

[10, 20, 30, 40, 50].filter((x) => {
  return x == 20 || x == 40;
});

// every: 어떠한 조건에 모든 요소가 부합 하는가(return Boolran)

[10, 20, 30, 40, 50].every((x) => {
  return x > 10;
}); // false

// some: 어떠한 조건에 하나의 요소가 부합 하는가(return Boolran)
[10, 20, 30, 40, 50].some((x) => {
  return x > 60;
}); // false

// 배열만들기

// 10 칸 만들기
Array(100)
  .fill(1)
  .map((x, i) => {
    return x + 1;
  });
Array(10).fill(10);

["melon", "apple", "orange", "kiwi"].map((x, i) => {
  return 1 + "번째" + x;
});

const add = (x, y) => x + y;
const sub = (x, y) => x - y;

const mul = (x, y) => {
  const a = "123";
  return x * y;
};
