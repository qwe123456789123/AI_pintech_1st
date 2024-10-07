package exam03;

public class P2 {
    public static void main(String[] args) {
        int total = 1;
        for (int i=1;i<=9;i++){
            System.out.println(i+"단");
        for (int j=1; j<=9;j++){
            if (i>=j){
                continue;
            }
            System.out.println(i + "*" + j + "=" + (i * j));
        }
        }
    }
}
