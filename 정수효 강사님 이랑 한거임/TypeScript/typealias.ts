// typealias

type person = { name: string; age: number; gender: string };
type college = { id: number; grade: number; major: string };
type collegeStudent = person & college;

const c1: person = {
  name: "ㅇㅈㅅ",
  age: 12,
  gender: "남",
};
const c2: person[] = [];

const c3: collegeStudent = {
  age: 21,
  id: 1234,
  gender: "여성",
  grade: 1,
  major: "철학",
  name: "사람",
};

type product = { name: string; price: number };

type meal = {
  calorides: number;
  category: string;
};

type dessert = {
  calorides: number;
  sweetneseLevel: number;
  category: string;
};

const saltbread: product & meal = {
  name: "소금빵",
  calorides: 150,
  category: "빵",
  price: 1500,
};

const egeTart: product & dessert = {
  name: "에그타르트",
  calorides: 11111111111,
  category: "타르트",
  price: 3000,
  sweetneseLevel: 1,
};
