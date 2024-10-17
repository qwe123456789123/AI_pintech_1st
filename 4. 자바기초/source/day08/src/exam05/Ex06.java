package exam05;

import java.util.HashSet;
import java.util.Set;

public class Ex06 {
    public static void main(String[] args) {
        Set<Customer> items = new HashSet<>(); // 동등성 제거
        items.add(new Customer(100,"이이름","user1@test.org"));
        items.add(new Customer(100,"이이름","user1@test.org"));
        items.add(new Customer(100,"이이름","user1@test.org"));
        items.add(new Customer(200,"김이름","user2@test.org"));
        items.add(new Customer(300,"박이름","user3@test.org"));

        for (Customer item : items) {
            System.out.println(item);
        }
    }
}
