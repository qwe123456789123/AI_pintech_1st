package exam01;

import java.util.Arrays;

public class Ex02 {
    public static void main(String[] args) {
        // 문자열 -> Enum 상수 객체
        // Transportation trans = Enum.valueOf(Transportation.class, "SUBWAY");
        // System.out.println(trans);
        Transportation trans = Transportation.valueOf("SUBWAY"); // 많이씀
        System.out.println(trans);

        // Transportation에 정의된 상수 목록
        Transportation[] item = Transportation.values();
        System.out.println(Arrays.toString(item));

    }
}
