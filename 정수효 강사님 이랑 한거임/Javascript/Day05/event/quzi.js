// 1. 아메리카노 주분 버튼 태그 만들고 누르면 주문 완료! 로 바뀌는 버튼 만들기
// const button = document.createElement("button");
// button.innerText = "아메리카노";

// button.addEventListener("click", () => {
//   button.innerText = "주문완료";
// });
// document.body.appendChild(button);
// // 2. 배경색이 하늘색 버튼 태그 만들고 누르면 핑크로 바뀌는 버튼 만들기

// const button1 = document.createElement("button");
// button1.innerText = "이것은 버튼";
// button1.style.backgroundColor = "skyblue";

// button1.addEventListener("click", () => {
//   button1.style.backgroundColor = "pink";
// });

// document.body.appendChild(button1);

// 버튼 다른색 5게 만들기 버튼 이름은 그 색깔 =>
// 버튼을 누르면
// 아래 박스의 색이 바뀌어야함

const box = document.createElement("div");
box.style.width = "100px";
box.style.height = "100px";

["red", "blue", "green", "pink", "yellow"].forEach((v) => {
  const button = document.createElement("button");
  button.innerText = v;
  button.style.backgroundColor = v;
  button.addEventListener("click", () => {
    box.style.backgroundColor = v;
  });
  document.body.appendChild(button);
});
document.body.appendChild(box);

// 버튼 두개 추가 네모 둥글게

[
  { name: "네모", radius: "0px" },
  { name: "원", radius: "9999px" },
].forEach((v) => {
  const button = document.createElement("button");
  button.innerText = v.name;
  button.addEventListener("click", () => {
    box.style.borderRadius = v.radius;
  });
  document.body.appendChild(button);
});
document.body.appendChild(box);
