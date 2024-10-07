// operator[토큰(상징적)]
// arith operator (+,-,*) 산술 여산자

const a = 1 + 1;
const a1 = 10 - 1;
const a2 = 1 * 2;
const a3 = 2 ** 3; // 제곱
const a4 = 6 / 2;
const a5 = 7 % 2; // 나머지 연산자 [1]
const a6 = -10; // 부호 반대 연산자

const a7 = "치즈" + "떡볶이"; // 문자열 연결 연산자
const a8 = 10 + "인분"; // 암묵적 타입변환 + 문자열 연결 연산

// 대입 연산자
const b = "롤 질병";
const b1 = b + "망겜";

// 비교 연산자 [boolean 타입 귀결]
// ( <, >, <=, >=, ==)
const c = 5 > 3; // true
const c1 = 5 < 3; // false
const c2 = 5 >= 3; // true
const c3 = 5 <= 3; // false
const c4 = 1 == 1; // true
const c5 = 1 != 1; // flase
const c6 = 1 === 1; // 타입까지 같니?

// 논리 연산자 (&&[and] ||[or] !(not))

// &&[and]: 모두 true 여야 true
const d1 = 5 > 1 && 3 > 1; // true
const d2 = 5 > 1 && 5 < 1; // false

// ||[or]: 하나만 ture 여도 ture
const d3 = 5 < 1 && (3 < 1) | (1 == 1); // true

// ![not]
const d4 = !false; // true
const d5 = !!false; // false
const d6 = !"장원영"; // false 암묵적 불리언화
const d7 = !(5 <= 3 || 3 <= 1); //

// 삼항 연산자
const e1 = 10 > 5 ? "아이유" : "운하"; // 아이유
const e2 = 3 < 1 ? "혜리" : "덕선"; // 덕선
