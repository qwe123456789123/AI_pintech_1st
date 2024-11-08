package exam01;

import java.io.*;

public class Ex06 {
    public static void main(String[] args) {
        long srime = System.currentTimeMillis(); // 시작 시간
        try(FileInputStream fis = new FileInputStream("data.zip");
            BufferedInputStream bis = new BufferedInputStream(fis);
            FileOutputStream fos = new FileOutputStream("copied_data2.zip");
            BufferedOutputStream bos =  new BufferedOutputStream(fos)){

            while (bis.available() > 0 ){
                bos.write(bis.read());
            }
        }catch (IOException e){
            e.printStackTrace();
        }
        long erime = System.currentTimeMillis(); // 종료 시간
        System.out.printf("걸리린시간: %d%n", erime - srime);
    }
}
