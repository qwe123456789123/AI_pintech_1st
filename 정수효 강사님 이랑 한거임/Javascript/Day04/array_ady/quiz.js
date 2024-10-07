// 1. [1,2,3,4,5,6,7,8,9,10] 중에 3의 배수만 살려줘
// 2. [1,2,3,4,5,6,7,8,9,10] 4이상 8이하면 살려줘

[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter((x) => {
  return x % 3 == 0;
});

[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter((x) => {
  return x >= 4 && x <= 8;
});

// 3. 알파벳이 o가 들어 있는 애들만 살려줘
// 4. 문자길이가 6이상만 살려줘
// 5. 문자길이가 짝수인 애들만 살리고, 대문자화

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

// fruitarray.filter((x) => {
//   return x.includes("o");
// });

// fruitarray.filter((x) => {
//   return fruitarray.length >= 6;
// });

// // 메소드 체이닝
// fruitarray
//   .filter((x) => {
//     return fruitarray.length % 2 == 0;
//   })
//   .map((x) => {
//     return x.toUpperCase();
//   });

// 유저에게 정수 n,k 를 입력 받으면
// n=10, k=3 -> [3 6 9]
// n=15, k=55 -> [5 10 15]
// 를 도출하는 함수 만들기

// const test = (n, k) => {
//   return Array(n)
//     .fill(0)
//     .map((x, i) => {
//       return i + 1;
//     })
//     .filter((x) => {
//       return x % k == 0;
//     });
// };

// const todolist = ["점심먹기", "복습하기", "유튜브 보기", "카톡하기"];
// const finished = [false, false, true, true];

// todolist.filter((x, i) => {
//   return !finished[i];
// });

// const newTodolist = (todolist, finished) => {
//   return filter((x, i) => {
//     return !finished[i];
//   });
// };

//  x기준으로 나눴을때 나줘진 문자열의 각각 길이를 배열화

// "xabcxdefxghi" [0,3,3,3]

// "xabcxdefxghi".split("x").map((x) => {
//   returnx.length;
// });

// const test2 = (word) => word.split("x").map((x) => x.length);

// const fruits = ["melon", "kiwi", "apple", "banana", "orange"];

// 모음: a,e,i,o,u는 대문자로 바꾸세요
// [mElon, kIwI, Apple, bAnAnA, OrAngE]

// const vowels = ["a", "e", "i", "o", "u"];
// fruits.map((x) =>
//   x.split("").map((y) => (vowels.some((v) => v == y) ? y.toUpperCase() : y))
// );

// fruits.map((x) =>
//   x
//     .split("")
//     .map((x) =>
//       x == "a" || x == "e" || x == "i" || x == "o" || x == "u"
//         ? x.toUpperCase()
//         : x
//     )
// );

// 1~100 까지 만들고 , 3 6 9 만들기
// [1,2,"👏"]
// 해당 타입에 방법이 없으면 다른 타입으로 바꾸기

const num = Array(100)
  .fill(0)
  .map((x, i) => String(i + 1))
  .map((x) =>
    x.includes("3") || x.includes("6") || x.includes("9") ? "👏" : x
  );
