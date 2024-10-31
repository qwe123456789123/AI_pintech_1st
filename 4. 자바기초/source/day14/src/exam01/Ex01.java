package exam01;

import java.util.ArrayList;
import java.util.Arrays;

public class Ex01 {
    public static void main(String[] args) {
        ArrayList<String> items = new ArrayList<>();
        items.add("일");
        items.add("이");
        items.add("삼");
        items.add("사");
        items.add("오");

        for (int i = items.size() -1; i>= 0; i--){
            String item = items.remove(i);
            System.out.printf("꺼낸 요소: %s%n", item);
        }
        /*
        for (int i = 0; i < items.size(); i++){
            items.remove(i);
        }
        for (int i = 0; i < items.size(); i++){
            String item = items.get(i);
            */
        }

    }

