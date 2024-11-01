package exam01;

import java.util.HashSet;
import java.util.Set;

public class Ex01 {
    public static void main(String[] args) {
        Set<String> items = new HashSet<>();
        items.add("일");
        items.add("일");
        items.add("삼");
        items.add("일");
        items.add("이");
        items.add("사");
        items.add("오");
        System.out.println(items);
    }
}
