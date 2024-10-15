package exam01;

public class Ex04 {
    public static void main(String[] args) {
        C c = new C();
        // C -> B -> A 출처 동일
        // A 객체에 작성하여도 C 객체에 포함
        A ac = c;
        System.out.println(System.identityHashCode(c));
        System.out.println(System.identityHashCode(ac));

        A a = new C();
        // C와 동일한 객체
        B b = new C();
     }
}
