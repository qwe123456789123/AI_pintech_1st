package exam01;

import java.util.HashSet;
import java.util.Set;
import java.util.TreeSet;

public class Ex04 {
    public static void main(String[] args) {
        Set<Book> items = new TreeSet<>();

        items.add(new Book(1000,"책6","저자1","출판사6"));
        items.add(new Book(2000,"책5","저자3","출판사4"));
        items.add(new Book(3000,"책3","저자2","출판사5"));
        items.add(new Book(4000,"책7","저자4","출판사2"));
        items.add(new Book(5000,"책2","저자5","출판사3"));
        items.add(new Book(6000,"책1","저자6","출판사1"));
        items.add(new Book(7000,"책4","저자7","출판사7"));

        items.forEach(System.out::println);
    }
}
