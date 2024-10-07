// 유저에게 비밀번호 설정을 물어보고
// 비밀번호가 it,IT를 포함하면 비밀번호 설정 완료 아니면 설정 오류

// const pw = prompt("비밀번호를 설정해주세요");
// const makepw = pw.includes("it");
// const makepw1 = pw.includes("IT");
// makepw || makepw1 ? alert("비밀번호 설정완료") : alert("비밀번호 설정오류");

// 1. 유저에게 좋아하는 음식을 입력 받고 그 음식을 5번 출력하는 프로그램
// 2. 유저에게 좋아하는 음식과 횟수를 입력 받고 그 음식을 횟수번 만큼 출력
// 3. 유저에게 알파벳 단어를 입력 받고 6글자보다 적으면 소물자 크면 대문자

const food = prompt("음식을 말하시오");
const food1 = food.repeat(5);
alert(food1);

const food2 = prompt("좋아 하는 음식과 횟수");
const arr = food2.split(" ");
const myfood = arr[0];
const count = Number(arr[1]);
alert(myfood.repeat(count));

const eng = prompt("영어 단어 입력");
const is6up = eng.length < 6;
const result = is6up ? eng.toUpperCase() : eng.toLowerCase();

// const news = `Left-leaning politician Anura Kumara Dissanayake has won Sri Lanka's presidential election after a historic second round of counting.
// No candidate won more than 50% of the total votes in the first round, where Dissanayake got 42.31% while his closest rival, opposition leader Sajith Premadasa, got 32.76%.
// But Dissanayake, who promised voters good governance and tough anti-corruption measures, emerged as winner after the second count, which tallied voters' second and third choice candidates.
// The election on Saturday was the first to be held since mass protests unseated the country's leader, Gotabaya Rajapaksa, in 2022 after Sri Lanka suffered its worst economic crisis."`;

// alert(news.split(" "));

// // 1. 유저에게 단어를 입력 받고 소문자면 대문자로 대문자이면 소문자로

const q = prompt("단어를 입력해 주세요");

const w = q == q.toUpperCase() ? q.toLocaleLowerCase() : q.toUpperCase();
alert(w);
// 2. 유저에게 비밀번호설정을 물어보고
// -2. 시작이 it,IT로 시작 안하면 비밀번호가 it,IT로 시작해야함
// -3. 특수문자 !@# 중에 하나라도 없으면 비밀번호에 반드시 특수문자 넣어야함
// 위에 모두 통과해야함

const pw = prompt("비밀번호 입력");

const a = pw.length >= 8 && pw.length <= 20;
const b = pw.includes("it") || pw.includes("IT");
const c = pw.includes("!") || pw.includes("@") || pw.includes("#");

if (!a) {
  alert("비밀번호 길이 오류");
} else if (!b) {
  alert("비밀번호 시작을 it 나 IT로 시작");
} else if (!c) {
  alert("특수 문자를 넣으세요");
} else {
  alert("설정 완료");
}
