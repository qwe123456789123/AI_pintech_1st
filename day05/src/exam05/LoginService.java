package exam05;

public class LoginService {
    private static LoginService instance = new LoginService();
    private LoginService(){}
    public static LoginService getInstance(){
        if(instance == null){
            instance = new LoginService();
        }
        return instance;
    } // 인스턴스메서드 이다. 외부는 접근 사용 x 이므로
        // 정적메서드로(static) 변경해줘야 사용 가능


    public void login(String userId, String password){

    }
}
