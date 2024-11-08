package exam03;

import java.time.DayOfWeek;
import java.time.LocalDate;
import java.time.format.TextStyle;
import java.util.Locale;

public class Ex03 {
    public static void main(String[] args) {
        LocalDate today = LocalDate.now();

        DayOfWeek week = today.getDayOfWeek(); // 요일 정보
        int yoil = week.getValue();
        System.out.println(yoil);

        String name = week.getDisplayName(TextStyle.SHORT, Locale.TRADITIONAL_CHINESE);
        System.out.println(name);
    }
}
