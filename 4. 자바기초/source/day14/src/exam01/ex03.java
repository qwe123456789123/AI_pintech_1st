package exam01;

import java.util.Vector;

public class ex03 {
    public static void main(String[] args) {
        Vector<String> items = new Vector<>(5);
        System.out.println("배열 공간 갯수:"+ items.capacity());

        items.add("1");
        items.add("2");
        items.add("3");
        items.add("4");
        items.add("5");
        System.out.println("배열 공간 갯수:"+ items.capacity());

        items.add("6");
        System.out.println("배열 공간 갯수:"+ items.capacity());
    }
}
