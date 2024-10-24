package exam01;

public class Ex03 {
    public static void main(String[] args) {
//        MyLamda my = (s) -> System.out.println(s);
//
//        MyLamda my2 = s -> System.out.println(s);

        MyLamda my3 = () -> System.out.println("ㅊㄹ");
        my3.print();
        // 매개변수가 없는 경우는 괄호 생략 불가
    }
}
