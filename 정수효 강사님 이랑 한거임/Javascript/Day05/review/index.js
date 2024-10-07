// 좋아하는 색깔 4개 배열로 넣은 뒤에
// grid로 3열로 박스 100개 형태로 넣기

const main = document.createElement("main");
const container = document.createElement("div");
container.classList.add("container");
const color = ["green", "orang", "yellow", "blue", "Indigo"];
Array(10000)
  .fill(0)
  .forEach((v, i) => {
    const box = document.createElement("div");
    box.classList.add("box");
    box.style.backgroundColor = color[i % color.length];
    container.appendChild(box);
  });

main.appendChild(container);
document.body.appendChild(container);
