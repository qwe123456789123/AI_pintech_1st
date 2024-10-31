package exam01;

import java.util.LinkedList;
import java.util.Queue;

public class Ex02 {
    public static void main(String[] args) {
        Queue<String> items = new LinkedList<>();
        items.offer("1");
        items.offer("2");
        items.offer("3");
        items.offer("4");
        items.offer("5");
        items.offer("6");

        while (items.size()>0){
            String item = items.poll(); // 첫번째 요소 꺼내기
            System.out.println(item);
        }
    }
}
