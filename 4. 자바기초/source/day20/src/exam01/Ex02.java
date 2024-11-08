package exam01;

import java.util.Arrays;

public class Ex02 {
    public static void main(String[] args) {
        int[] nums = {20,30,4,11,66,42,95};
        int max = Arrays.stream(nums).reduce((a,b)->a > b ? a : b ).orElse(-1);
        System.out.println("최대값:"+ max);
        int min = Arrays.stream(nums).reduce((a,b)->a < b ? a : b ).orElse(-1);
        System.out.println("최소값:"+ min);
    }
}
