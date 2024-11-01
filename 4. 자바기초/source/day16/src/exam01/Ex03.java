package exam01;

import java.util.Comparator;
import java.util.Set;
import java.util.TreeSet;

public class Ex03 {
    public static void main(String[] args) {
        Set<String> items = new TreeSet<>(Comparator.reverseOrder());
        items.add("일");
        items.add("삼");
        items.add("이");
        items.add("오");
        items.add("사");

        items.forEach(System.out::println);
    }
}
