package exam02;

public class Ex01 {
    public static void main(String[] args) {
        LoginService service = new LoginService();
        try {
            service.process("user02", "2345");

            System.out.println("어서옵쇼");
        } catch (UserIdValidationException| PasswordValidationException e){
            System.out.println(e.getMessage());
        }
    }
}
