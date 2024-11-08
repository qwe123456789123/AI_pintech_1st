package exam01;

import java.io.FileOutputStream;
import java.io.IOException;

public class Ex07 {
    public static void main(String[] args) {
    try(
    FileOutputStream fos = new FileOutputStream("hello..txt"))
    {
        fos.write('하');
        fos.write('이');
        fos.write('욤');
        fos.write('방');
        fos.write('가');
        fos.write('워');
    } catch (IOException e){
        e.fillInStackTrace();
    }
}
}
