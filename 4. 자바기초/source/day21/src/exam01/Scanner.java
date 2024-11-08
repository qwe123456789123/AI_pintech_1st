package exam01;

public class Scanner {
    public static void main(String[] args) {
        java.util.Scanner scanner = new java.util.Scanner(System.in);
        String ch = scanner.next().toString();
        System.out.println("입력내용:" + ch);

        scanner.close();
    }
}
