package exam02;

public class LoginService {

    public void process(String userId, String password) /* throws UserIdValidationException,
            PasswordValidationException */{
                // 유저, 비번 Exception RuntimeException 으로 변경해도 문제가 없음

        // userId - user01, password - 1234
        if (!userId.equals("user01")) { // user01과 불일치
            throw new UserIdValidationException("아이디 틀림.");
        }

        if (!password.equals("1234")) { // 비번이 1234와 불일치
            throw new PasswordValidationException("비번 틀림");
        }
    }
}