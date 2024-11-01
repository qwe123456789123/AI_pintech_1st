package exam01;

import java.util.HashSet;
import java.util.Set;

public class Ex02 {
    public static void main(String[] args) {
        Set<Book> items = new HashSet<>();

        items.add(new Book(1000,"책1","저자1","출판사1"));
        items.add(new Book(2000,"책2","저자2","출판사2"));
        items.add(new Book(3000,"책3","저자2","출판사3"));
        items.add(new Book(4000,"책4","저자4","출판사4"));
        items.add(new Book(5000,"책5","저자5","출판사5"));
        items.add(new Book(6000,"책6","저자2","출판사6"));
        items.add(new Book(7000,"책7","저자7","출판사7"));


        items.forEach(System.out::println);
    }
}
