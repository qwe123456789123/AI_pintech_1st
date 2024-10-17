package exam03;

public class Ex02 {
    public static void main(String[] args) {
        Human human = new Human(); // Human, Object
        Bird bird = new Bird(); // Bird, Objet
        Tiger tiger = new Tiger(); // Tiger, Object

        Object[] anumals = new Object[3];
        anumals[0] = human;
        anumals[1] = bird;
        anumals[2] = tiger;
    }
}
