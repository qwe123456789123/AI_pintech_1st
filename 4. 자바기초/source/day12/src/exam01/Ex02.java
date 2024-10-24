package exam01;

public class Ex02 {
    public static void main(String[] args) {
        Claculator cal = new Claculator() {

            @Override
            public int add(int num1, int num2) {
                return num1 + num2;
            }
        };

        Claculator cal2 = (a, b) -> a + b;
    }
}
