package exam02;

// @MyAnno(value = "여기는 클래스")
// @MyAnno({"여기는 클래스","여기는 학생 클래스"})
@MyAnno(value = {"여기는 클래스","여기는 학생 클래스"},min=10,max=100)
public class Student {

    // @MyAnno(value = "여기는 메서드")
    // @MyAnno("여기는 매서드") // 매서드가 1게인 경우 value 생략 가능
    @MyAnno(value = "여기는 매서드", min=1, max=10)
    // 복수의 매서드가 있으면 value 생략 불가
    public void study(){

 }
}
