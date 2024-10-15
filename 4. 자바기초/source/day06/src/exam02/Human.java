package exam02;

public class Human extends Animal{
    @Override
    public void move() {
        System.out.println("네발로 기어다님");
    }
    public void nuclear() {
        System.out.println("김정은: Nuclear Launch Detected");
    }
    /*@Override
    public void move(){
        // super.move(); // Animal의 move();
        System.out.println("두발로 움직여");
    }
    */
}

