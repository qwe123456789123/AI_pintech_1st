// 함수 마술상자
// f(x) = x+1
// 마라,크림 = 마라떡볶이, 크림떡볶이

// f(g(x)) : 마술상자 안에 마술상자
// 요리법(마라탕) -> 음식
// callback: 함수 안에 함수 넣기

const cook = (x) => {
  console.log("요리 시작");
  x();
  console.log("요리 종료");
};
const maratang = () => {
  console.log("마라탕 만들기");
  console.log("그릇 준비");
  console.log("재료 준비");
  console.log("소스 준비");
  console.log("전부다 넣고 끓이기");
  console.log("불끄기");
  console.log("접시에 담기");
};
const taco = () => {
  console.log("타코 만들기");
  console.log("난 준비");
  console.log("넣어 먹을 재료 준비");
  console.log("소스 준비");
  console.log("제조 하기");
  console.log("먹기");
};
const kimbab = () => {
  console.log("김밥 만들기");
  console.log("김 밥 준비");
  console.log("속 재료 준비");
  console.log("감싸기");
  console.log("자르기");
};

const ramen = () => {
  console.log("물끓이기");
  console.log("면 넣기");
  console.log("수프 넣기");
  console.log("그릇에 담기");
};

const skill = (magic) => {
  console.log("스킬사용");
  magic();
  console.log("스킬종료");
};

const ice = () => {
  console.log("얼음 마법 사용");
};

cook(maratang);
cook(taco);
cook(kimbab);
