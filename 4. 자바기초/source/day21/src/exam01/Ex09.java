package exam01;

import java.io.*;

public class Ex09 {
    public static void main(String[] args) {
        try(FileOutputStream fos = new FileOutputStream("hello3.txt");
            OutputStreamWriter osw = new OutputStreamWriter(fos);
            BufferedWriter bw = new BufferedWriter(osw)) {
            bw.write("하이욤");
            }catch (IOException e){
            e.printStackTrace();
        }
    }
}
