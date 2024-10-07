// DOM[HTML+CSS]
// elenent type
const div = document.createElement("div");
div.innerText = "샤브샤브";
div.style.color = "red";
document.body.appendChild(div);

// 버튼 태그 3개 만드세요

// const button = document.createElement("button");
// button.innerText = "아메리카노";
// document.body.appendChild(button);

// const button2 = document.createElement("button");
// button2.innerText = "에이드";
// document.body.appendChild(button2);

// const button3 = document.createElement("button");
// button3.innerText = "라떼";
// document.body.appendChild(button3);

[
  { name: "아메리카노", bg: "yellow", color: "black" },
  { name: "에이드", bg: "pink", color: "black" },
  { name: "라떼", bg: "skyblue", color: "black" },
].forEach((v) => {
  const button = document.createElement("button");
  button.innerText = v.name;
  button.style.backgroundColor = v.bg;
  button.style.color = v.color;
  document.body.appendChild(button);
});

const container = document.createElement("div");

container.classList.add("container");

const box1 = document.createElement("div");
box1.classList.add("box");
box1.style.backgroundColor = "red";
container.appendChild(box1);

const box2 = document.createElement("div");
box2.classList.add("box");
box2.style.backgroundColor = "yellow";
container.appendChild(box2);
document.body.appendChild(container);
