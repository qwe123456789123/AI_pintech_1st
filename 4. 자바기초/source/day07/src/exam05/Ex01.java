package exam05;

public class Ex01 {
    public static void main(String[] args) {
        Outer out = new Outer(); // -> 1번
        Outer.Inner inner = out.new Inner(); // -> 2번
        System.out.println(Outer.Inner.num);
    }
}
