// string, number boolean array
const arr = ["samsung", "LG", "alpple", "google"];

arr.push(""); //
arr.push("hyundai"); //  뒤에 추가
arr.unshift("hybe"); // hybe 앞에 추가
arr.pop(); // 맨뒤에 요소 빼기
arr.shift(); // 맨앞에 요소 빼기
arr.reverse(); // 배열 거꾸로
arr.indexOf("LG"); // 1
arr.indexOf("toyota"); // -1
arr.includes("google"); // true false

// 유저에게 뉴스기사를 입력 받고, 찾고 싶은 단어를 입력 받은 후
// 단어가 있으면 단어가 있습니다. 없으면 단어가 없습니다.

const news = prompt("뉴스기사 입력");
const word = prompt("단어 입력");

const words = news.split(" ");
const msg = words.includes(word) ? "단어 있음" : "단어 없음";
alert(msg);
