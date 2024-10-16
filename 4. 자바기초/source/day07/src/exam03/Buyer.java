package exam03;

public interface Buyer {
    int NUM = 10;
    // public static final 이 생략되어 있어 NUM은 상수로 되어있어 변경 불가능

    void buy();
    default void order(){
        System.out.println("Buyer - 주문!");
    }
    private void privateMethod(){
        System.out.println("pruvate 메서드");
    }
    static void staticMethod(){
        System.out.println("정적 메서드");
    }
}
