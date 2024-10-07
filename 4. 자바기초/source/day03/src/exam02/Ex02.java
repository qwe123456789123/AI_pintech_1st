package exam02;

public class Ex02 {
    public static void main(String[] args) {
        int [] num = new int[4]; //int 자료형 변수 4개 생성
        System.out.println(num);

        num[0] = 10;
        num[1] = 20;
        num[3] = 30;
        num[4] = 40;
        for (int i = 0; i<=3; i++){
            System.out.println(num[i]);
        }
    /*
        System.out.println(num[1]);
        System.out.println(num[2]);
        System.out.println(num[3]);
        System.out.println(num[4]);
     */
    }
}
