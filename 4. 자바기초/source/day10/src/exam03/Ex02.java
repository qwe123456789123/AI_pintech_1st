package exam03;

public class Ex02 {
    public static void main(String[] args) {
        Box appleBox = new Box();
        appleBox.setItem(new Grape());

        // Appple apple = (Apple)appleBox.getItem(); // 타입 안정성이 떨어짐
        Object _apple = (Apple)appleBox.getItem();
        if (_apple instanceof  Apple) {
            Apple apple = (Apple)_apple;
        }
    }
}
