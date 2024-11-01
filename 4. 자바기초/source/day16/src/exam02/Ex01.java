package exam02;

import java.util.HashMap;
import java.util.Map;
import java.util.Set;

public class Ex01 {
    public static void main(String[] args) {
        Map<String, String> members = new HashMap<>();
        members.put("user1","사용자1");
        members.put("user3","사용자3");
        members.put("user4","사용자4");
        members.put("user5","사용자5");
        members.put("user6","사용자6");
        members.put("user1","사용자999");
        System.out.println(members);
        members.remove("user2");
        String userName02 = members.get("user2");
        System.out.println(userName02);
    }

}
