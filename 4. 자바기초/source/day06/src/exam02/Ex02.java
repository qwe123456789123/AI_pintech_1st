package exam02;

public class Ex02 {
    public static void main(String[] args) {
        // 각각 객체 생성
        /*
        Animal[] animals = new Animal[3];
        animals[0] = new Tiger();
        animals[1] = new Bird();
        animals[2] = new Human();
     */
        Animal[] animals = {new Tiger(), new Bird(), new Human()};
        for (Animal animal : animals) { // 업 캐스팅
            animal.move();
            // 각각의 본체에 있는 move의 내용이 호출됨
            if (animal instanceof Human){
            Human human = (Human) animal; // 다운 캐스팅
            human.nuclear();
            }else if (animal instanceof Bird bird){
                bird.sing();
            } else if (animal instanceof Tiger tiger){
                tiger.hunting();
            }
        }
    }
}
