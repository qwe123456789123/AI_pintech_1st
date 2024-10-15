package exam02;

public class Ex01 {
    public static void main(String[] args) {
        Animal tiger = new Tiger();
        // Tiger 이면서 Aimal
        Animal bird = new Bird();
        // Bird 이면서 Aimal
        Animal human = new Human();
        // human 이면서 Aimal
        tiger.move();
        bird.move();
        human.move();

    }
}
