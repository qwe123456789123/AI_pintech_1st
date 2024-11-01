package exam02;

import java.util.HashMap;
import java.util.Map;
import java.util.Set;

public class Ex02 {
    public static void main(String[] args) {
        Map<String, String> members = new HashMap<>();
        members.put("user1","사용자1");
        members.put("user3","사용자3");
        members.put("user4","사용자4");
        members.put("user5","사용자5");
        members.put("user6","사용자6");


        for (Map.Entry<String, String> entry : members.entrySet()){
            String key = entry.getKey();
            String value = entry.getValue();
            System.out.printf("key=%s, value=%s%n", key, value);
        }
    }
}
