package exam02;

import java.io.FileOutputStream;
import java.io.IOException;
import java.io.ObjectOutputStream;
import java.util.HashMap;
import java.util.Map;

public class Ex04 {
    public static void main(String[] args) {
        try(FileOutputStream fos = new FileOutputStream("obj2.txt");
            ObjectOutputStream oos = new ObjectOutputStream(fos)) {
            Map<String, Object> data = new HashMap<>();
            Person p1 = new Person("휴먼1", 100);
            data.put("p1", p1);

            Person p2 = new Person("휴먼2", 200);
            data.put("p2", p2);

            data.put("message", "하이욤.");

            oos.writeObject(data);

        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}