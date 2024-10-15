package exam02;

public class Student {

    int id; // 학번
    String name; // 학생명
<<<<<<< HEAD
    String major; // 전공과목
=======
    String major;; // 전공과목
>>>>>>> e9085dc900abb842a05d0ade46a203b4475b9158

    /**
     * 따로 정의 하지 않으면 기본 생성되는 생성자
     * (객체를 생성하는 기능)
     * default
     */

    // 기본 생성자, 따로 정의  X -> 컴파일러가 추가, 디폴트 생성자
    public Student() {
        // 객체 생성 이후 실행
        // 객체의 변수의 초기화
        id = 1000;
        name = "이이름";
        major = "영어";
    }

    public Student(int _id, String _name, String _major){
        id  = _id;
        name = _name;
        major = _major;
    }


    void showInfo() {
        System.out.printf("id=%d, name=%s, major=%s%n",id,name,major);
    }
}
