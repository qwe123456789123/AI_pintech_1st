package exam01;

import java.util.HashSet;
import java.util.Set;

public class Ex05 {
    public static void main(String[] args) {
        Set<String> items = new HashSet<>();
        items.add("가");
        items.add("가");
        items.add("나");
        items.add("다");
        items.add("가");
        items.add("라");
        items.add("마");

        System.out.println(items);
    }
}
