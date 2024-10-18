package exam04;

public class Ex01 {
    public static void main(String[] args) {
       Transportation trams = Transportation.BUS;
       switch (trams){
           case BUS :
               System.out.println("빠스");
               break;
           case SUBWAY:
               System.out.println("샌드위치");
                break;
           case TAXI:
               System.out.println("모범택시 ㅈㄴ 비싸");
                break;
       }
    }
}
