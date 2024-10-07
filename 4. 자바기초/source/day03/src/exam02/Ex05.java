package exam02;

public class Ex05 {
    public static void main(String[] args) {
        int[] nums1 = {10,20,30,40};
        int[] nums2 = nums1; // 주소 값이 같아짐
        nums2[1] = 22; // nums2에서 값을 변경하면 같은 주소를 사용 하므로 nums1도 변경됨
        System.out.println(nums1[1]);
    }
}
