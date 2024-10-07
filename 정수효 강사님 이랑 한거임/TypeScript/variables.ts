const a = "아메리카노";
const a1 = "라떼";
// 타입 이노테이션
const a2: string = "1";
const a3: boolean = !!"";
const a4: number[] = [1, 2, 3, 4, 5];
const a5: { name: string; isice: boolean; price: number }[] = [
  {
    name: "아아",
    isice: true,
    price: 3000,
  },
  { name: "민트", isice: true, price: 3000 },
];

// age, isman, nation

const a6: {
  age: number;
  isMan: boolean;
  nation: string;
}[] = [{ age: 15, isMan: true, nation: "북한" }];
