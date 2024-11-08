package exam01;

import java.util.Arrays;

public class Ex01 {
    public static void main(String[] args) {
       int[] nums = {20,30,4,11,66,42,95};
        int total = Arrays.stream(nums).reduce(0,(acc, n)->{
            System.out.printf("acc=%d, n=%d%n",acc, n);
            return acc+n;
        });
        System.out.println(total);
    }
}
