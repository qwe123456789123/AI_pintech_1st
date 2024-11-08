package exam01;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;

public class Ex05 {
    public static void main(String[] args) {
        // 1바이트씩 data.zip을 읽어와서 1바이트씩 copied_data1.zip로 출력
        long srime = System.currentTimeMillis(); // 시작 시간
        try(FileInputStream fis = new FileInputStream("data.zip");
        FileOutputStream fos = new FileOutputStream("copied_data1.zip")) {
            while (fis.available() > 0) {
                fos.write(fis.read());
            }
        }catch (IOException e) {
            e.printStackTrace();
        }
        long erime = System.currentTimeMillis(); // 작업 종료 시간
        System.out.printf("걸리린시간: %d%n", erime - srime);
    }
}
