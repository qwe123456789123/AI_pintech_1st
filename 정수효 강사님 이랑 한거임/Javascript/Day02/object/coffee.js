const ediya = [
  {
    korname: "(L)달달커피",
    engname: "(L)Mixed coffee",
    exp: "살 준나 찌는 커피임",
    kcal: 277,
    protein: 2,
    na: 39,
    sugar: 28,
    fat: 9,
    caffein: 236,
    allergy: ["우유"],
  },
  {
    korname: "팥인절미 1인빙수",
    engname: "red bean injeolmi",
    exp: "이거 먹을빠에 요하정감",
    kcal: 569,
    protein: 11,
    na: 218,
    sugar: 53,
    fat: 6,
    caffein: 0,
    allergy: ["우유", "대두"],
  },
];

// div 태그 만들기
const tag = document.createElement("div");

// div 태그에 오른쪽 내용 넣겠음
tag.innerHTML = `
    <h4 style="font-size:30px">${ediya[0].korname}</h4>
    <p style="color:grey">${ediya[0].exp}</p>
    <span>${ediya[0].kcal > 250 ? "살찜" : "살안찜"}kacl</span>
`;

document.body.appendChild(tag);
