package exam01;

import java.util.ArrayList;
import java.util.List;
import java.util.ListIterator;

public class Ex04 {
    public static void main(String[] args) {
        List<String> items = new ArrayList<>();
        items.add("1");
        items.add("2");
        items.add("3");
        items.add("4");
        items.add("5");
        items.add("6");
        items.add("7");
        items.add("8");

        ListIterator<String> iter = items.listIterator();
        System.out.println("--- 순 방 향 ---");
        while (iter.hasNext()){
            String item = iter.next();
            System.out.println(item);
        }
        System.out.println("--- 역 방 향 ---");
        while (iter.hasPrevious()){
            String item = iter.previous();
            System.out.println(item);
        }
    }
}
