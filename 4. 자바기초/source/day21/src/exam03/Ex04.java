package exam03;

import java.time.LocalDate;
import java.time.temporal.ChronoField;
import java.time.temporal.ChronoUnit;

public class Ex04 {
    public static void main(String[] args) {
        LocalDate today = LocalDate.now(); // 원본데이터 불변성 유지
        // LocalDate afret100 = today.plus(100L, ChronoUnit.DAYS); // 100일 후
        LocalDate afret100 = today.plusDays(100L);
        //LocalDate before100 = today.minus(100L, ChronoUnit.DAYS); // 100일 후
        LocalDate before100 = today.minusDays(100L);
        System.out.println(afret100);
        System.out.println(before100);

        LocalDate date2 = before100.withMonth(12);
        System.out.println(date2);
    }
}
