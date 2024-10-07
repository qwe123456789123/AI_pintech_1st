// cgv 프로그램

// 1. 영화 고르기 - ["베테랑2","에일리언","사랑의하츄핑"]
// 2. 좌성 등급 고르기 - standard [10000], cople[20000] priemium[15000] economy[8000]
// 3. 팝콘 고르기 - 일반[6000] 카라멜[6500] 치즈[6500] 반반[7000]
// 4. 음료 고르기 - 탄산[2000] 에이드[3000] 커피[3000]
// 5. 나이 입력 - 13세 이하면 30%, 60세 이상 20% 할인

// 콘솔 - 영화 좌석 팝콘 음료 총 금액: "" 입니다.

const movie = {
  name: ["베테랑2", "에일리언", "사랑의하츄핑"],
  seat: [
    { name: "standard", price: 10000 },
    { name: "cople", price: 20000 },
    { name: "priemium", price: 15000 },
    { name: "economy", price: 8000 },
  ],
};

const shop = {
  popcorn: [
    { name: "일반", price: 6000 },
    { name: "카라멜", price: 6500 },
    { name: "치즈", price: 6500 },
    { name: "반반", price: 7000 },
  ],
  beverage: [
    { name: "탄산", price: 2000 },
    { name: "에이드", price: 3000 },
    { name: "커피", price: 3000 },
  ],
};

const moviechoose = Number(prompt(`${movie.name}중 영화를 고르세요 (0~2)`));
const searchoose = Number(
  prompt(
    `${movie.seat[0].name} ${movie.seat[1].name} ${movie.seat[2].name} ${movie.seat[3].name} 중 고르세요(0~3)`
  )
);
const popcornchoose = Number(
  prompt(
    `${shop.popcorn[0].name} ${shop.popcorn[1].name} ${shop.popcorn[2].name} ${shop.popcorn[3].name} 중 고르세요(0~3)`
  )
);
const beveragechoose = Number(
  prompt(
    `${shop.beverage[0].name} ${shop.beverage[1].name} ${shop.beverage[2].name} 중 고르세요(0~2)`
  )
);
const age = Number(prompt("나이를 입력해 주세요"));

const msg = `${movie.name[moviechoose]},${movie.seat[searchoose].name},${shop.popcorn[popcornchoose].name},${shop.beverage[beveragechoose].name}`;

if (age <= 13) {
  const total =
    movie.seat[searchoose].price * 0.7 +
    shop.popcorn[popcornchoose].price +
    shop.beverage[beveragechoose].price;
  console.log(`${msg} 총 금액: ${total} 입니다.`);
} else if (age >= 60) {
  const total =
    movie.seat[searchoose].price * 0.8 +
    shop.popcorn[popcornchoose].price +
    shop.beverage[beveragechoose].price;
  console.log(`${msg} 총 금액: ${total} 입니다.`);
} else {
  const total =
    movie.seat[searchoose].price +
    shop.popcorn[popcornchoose].price +
    shop.beverage[beveragechoose].price;
  console.log(`${msg} 총 금액: ${total} 입니다.`);
}
