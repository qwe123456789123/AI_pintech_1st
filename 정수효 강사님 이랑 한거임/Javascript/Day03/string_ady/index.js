const pizza = "cheese pizza";

// 포함하니

const hascheese = pizza.includes("cheese"); // true
const haspine = pizza.includes("pineapple"); //false
const hasc = pizza.includes("c"); // true
const hasee = pizza.includes("ee"); // true

// 몇번째
const indexh = pizza.indexOf("h"); // 1
const indexb = pizza.indexOf("b"); // -1

pizza.replace("z", "k"); // cheese pikza
pizza.replaceall("z", "k"); // cheese pikka

pizza.startsWith("pizza"); // false
pizza.endsWith("pizza"); // true

pizza.toUpperCase(); // 대문자화
pizza.toLowerCase(); // 소문자화

//나누기
pizza.slice(0, 4); // chee

// 나누기[배열화]
pizza.split("i"); // ["cheese p" , "kka"]
pizza.search(" "); // ["cheese","pikka"]

// 반복하기
pizza.repeat(3); // cheese pikka cheese pikka cheese pikka

pizza.length; // 문자 숫자
