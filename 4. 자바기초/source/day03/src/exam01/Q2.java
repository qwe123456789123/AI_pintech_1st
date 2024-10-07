package exam01;

public class Q2 {
    public static void main(String[] args) {
        for (int i =1; i<= 40; i++){
            int roomNO = i % 10;
            System.out.println(i+"학생"+roomNO+"방");
        }
    }
}
