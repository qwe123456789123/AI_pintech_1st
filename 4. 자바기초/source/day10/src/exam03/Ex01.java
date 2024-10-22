package exam03;

public class Ex01 {
    public static void main(String[] args) {
        Box appleBox = new Box();
        appleBox.setItem(new Apple());

        Apple apple =(Apple) appleBox.getItem();
        System.out.println(apple.info());
// 형변환 번거로움
        Box grapeBox = new Box();
        grapeBox.setItem(new Grape());

        Grape grape = (Grape) grapeBox.getItem();
        System.out.println(grape.info());
    }
}
