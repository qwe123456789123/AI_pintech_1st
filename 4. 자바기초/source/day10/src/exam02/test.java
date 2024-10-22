package exam02;

import java.util.Arrays;
import java.util.Locale;

public class test {
    public static void main(String[] args) {
        String list = "Abcde";

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
