package exam01;

import java.util.Arrays;
import java.util.Comparator;

public class Ex07 {
    public static void main(String[] args) {
        int[] nums = {22,11,33,44,55,66,77,88,99};
        int[] sortedNums = Arrays.stream(nums).sorted().toArray(); // 정렬
        System.out.println(Arrays.toString(sortedNums));

        int[] sortedNums2 =  Arrays.stream(nums).mapToObj(Integer::valueOf).sorted(Comparator.reverseOrder()).mapToInt(i->i).toArray();
                // boxed() -> Stream<Integer>
        System.out.println(Arrays.toString(sortedNums2));
    }
}
