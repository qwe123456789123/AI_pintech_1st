package exam01;

public class Ex01 {

    /**
    * main : 함수는 프로그램을 시작해 주는 함수
     */
    public static void main(String[] args) { //1 메인 함수
        //int num1 = 10;
        //int num2 = 20;
        //int result = add(10,20); // 2
        // System.out.println(r);
        int result1 = add(10,20);
        System.out.println(result1);

        int result2 = add(10,20,30);
        System.out.println(result2);
    }
    /**
    num1, num2, result - 함수 지역 내에서만 유의미한 변수
    지역 변수
     */
    static int add(int num1, int num2){ // 지역변수 // 1
        //return result;
        return num1 + num2;
    }

static int add(int num1, int num2, int num3){
        return num1 + num2 + num3;
}
}

