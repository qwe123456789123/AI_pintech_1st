package exam02;

import java.util.Arrays;
import java.util.Scanner;

public class test2 {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        System.out.print("문자열 입력 : ");
        String list = scanner.nextLine();

        String[] listF = list.split("");
        for (int i = 0; i < list.length(); i++) {

            if (listF[i].equals(listF[i].toUpperCase())) {
                listF[i] = listF[i].toLowerCase();
            } else if (listF[i].equals(listF[i].toLowerCase())) {
                listF[i] = listF[i].toUpperCase();
            }
        }
        System.out.println(Arrays.toString(listF));
    }
}
