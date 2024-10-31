package exam01;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

public class Ex03 {
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

        System.out.println(items); // items.toString();
        // for문 없이 간단한 데이터 이면 위에 형식으로 출력 해도됨
        Iterator<String> iter = items.iterator();

        while (iter.hasNext()) { // 1회용
            String item = iter.next();
            System.out.println(item);
        }
        iter = items.iterator();
        // 반복을 더 하려면 새로운 iterator 객체를 생성
        while (iter.hasNext()) {
            String item = iter.next();
            System.out.println(item);
        }
    }
}
