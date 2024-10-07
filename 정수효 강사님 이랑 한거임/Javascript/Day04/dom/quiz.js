// 2000개 [빨,주,노,초,파,남,보]
const container = document.createElement("div"); // 컨테이너 라는 div 클래스 만듬
container.classList.add("container"); // 클래스 리스트에 컨테이너 추가
const colors = [
  "red",
  "Orange",
  "yellow",
  "green",
  "blue",
  "Indigo",
  "purple",
  "skyblue",
  "pink",
]; // 색 리스트 작성
Array(1000) // 원하는 수 만큼 리스트 생성
  .fill(0)
  .forEach((v, i) => {
    const box = document.createElement("div"); // box 클래스를 div 안에 적용
    box.classList.add("box"); // 클래스 리스트에 box 추가
    box.style.backgroundColor = colors[i % colors.length]; // box의 배경색 정해주는거
    container.appendChild(box); // box를 container 에적용
  });

document.body.appendChild(container); // container을 body에 넣음
