package exam01;

import java.util.Stack;

public class Ex02 {
    public static void main(String[] args) {
        Stack<String> items = new Stack<>();
        items.add("1");
        items.add("2");
        items.add("3");
        items.add("4");
        items.add("5");

        while (items.size()>0){
            String item = items.pop();
            System.out.println(item);
        }

    }
}
