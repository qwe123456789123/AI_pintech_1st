// ||[or]
const a = false || true;
const b = undefined || "자바스크립트"; // 자바스크립트

const username = prompt("유저 이름 입력");
alert(`${username || "Guest"}님 환영합니다.`);

// &&[and]
const c = true && "탕수육";
const d = false && "탕후루";

const isloggin = prompt("비밀번호를 입력해주세요");
isloggin && alert("로그인 성공");
