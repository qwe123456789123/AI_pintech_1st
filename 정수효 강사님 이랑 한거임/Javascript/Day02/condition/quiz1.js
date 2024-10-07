// 버스 종류
// 마을 버스, 시내 버스, 고속 버스, 심야 버스
// 1500, 2000, 8000, 10000

// 경기권, 충청권, 강원권, 제주권
// +2000, +3000, +3000, +10000

// 일반석, 프리미엄석, 넷플석
// +1000,   +3000,  +4000

// 나이 13 이하면 20% 65세 이상 50%

const b = {
  name: ["마을버스", "시내버스", "고속버스", "심야 버스"],
  seat: [
    { name: "마을", price: 1500 },
    { name: "시내", price: 2000 },
    { name: "고속", price: 8000 },
    { name: "심야", price: 10000 },
  ],
};

const a = {
  name: ["경기권", "충천권", "강원권", "제주권"],
  seat: [
    { name: "경기권", price: 2000 },
    { name: "충천권", price: 3000 },
    { name: "강원권", price: 3000 },
    { name: "제주권", price: 10000 },
  ],
};

const c = {
  seat: [
    { name: "일반석", price: 1000 },
    { name: "프리미엄석", price: 3000 },
    { name: "넷플석", price: 4000 },
  ],
};

const choose1 = Number(
  prompt(
    `${b.seat[0].name} ${b.seat[1].name} ${b.seat[2].name} ${b.seat[3].name} 중 고르세요(0~3)`
  )
);

const choose2 = Number(
  prompt(
    `${a.seat[0].name} ${a.seat[1].name} ${a.seat[2].name} ${a.seat[3].name} 중 고르세요(0~3)`
  )
);

const choose3 = Number(
  prompt(
    `${c.seat[0].name} ${c.seat[1].name} ${c.seat[2].name} 중 고르세요(0~2)`
  )
);

const age = Number(prompt("나이를 입력해 주세요"));
const total =
  b.seat[choose1].price + a.seat[choose2].price + c.seat[choose3].price;
const msg = `${b.seat[choose1].name},${a.seat[choose2].name}, ${c.seat[choose3].name}`;

if (age <= 13) {
  const total =
    (b.seat[choose1].price + a.seat[choose2].price + c.seat[choose3].price) *
    0.8;
  console.log(`${msg} 총 금액: ${total} 입니다.`);
} else if (age >= 65) {
  const total =
    (b.seat[choose1].price + a.seat[choose2].price + c.seat[choose3].price) *
    0.5;
  console.log(`${msg} 총 금액: ${total} 입니다.`);
} else {
  const total =
    b.seat[choose1].price + a.seat[choose2].price + c.seat[choose3].price;
  console.log(`${msg} 총 금액: ${total} 입니다.`);
}
