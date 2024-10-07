// 기본 타입: String, Number, Boolean, Null, Undefined
// 참조 타입: Array

// Array배열): []
// 시작은 0번 부터 시작
const paik = ["아메리카노", "라떼", "모카", "바닐라"];
console.log(paik);
console.log(paik[2]);

// 서브웨이
// 빵메뉴 고르기[플릿, 화이트, 위트]
// 치즈메뉴 [슈레드, 모짜렐라, 아메리칸치즈]
// 소스 [머스타드, 핫칠리, 소금, 후추, 스언, 홀레]
// 쿠키메뉴 [화이트, 초콜릿, 아몬드]
// 음료 [콜라, 제로콜라, 스프라이트, 커피]
const a = ["플릿", "화이트", "위트"];
const b = ["슈레드", "모짜렐라", "아메리칸치즈"];
const c = ["머스타드", "핫칠리", "소금", "후추", "스언", "홀레"];
const d = ["화이트", "초콜릿", "아몬드"];
const e = ["콜라", "제로콜라", "스프라이트", "커피"];

const c1 = Number(prompt(`빵을 ${a} 선택해주세요`));
const c2 = Number(prompt(`치즈을 ${b} 선택해주세요`));
const c3 = Number(prompt(`소스 ${c} 선택해주세요`));
const c4 = Number(prompt(`쿠키 ${d} 선택해주세요`));
const c5 = Number(prompt(`음료 ${e} 선택해주세요`));

console.log(`${a[c1]} ${b[c2]} ${c[c3]} ${d[c4]} ${e[c5]} 를 선택하셧습니다.`);
