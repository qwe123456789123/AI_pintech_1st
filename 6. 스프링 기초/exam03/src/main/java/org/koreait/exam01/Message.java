package org.koreait.exam01;

import org.springframework.beans.factory.DisposableBean;
import org.springframework.beans.factory.InitializingBean;

import java.util.Set;
// 변경 불가한 라이브러리 클래스라고 가정하고 만들고 있다.
// InitializingBean, DisposableBean을 정의하지 못하는 상황이라고 가정
public class Message implements InitializingBean, DisposableBean {
    @Override
    public void afterPropertiesSet() throws Exception {
        System.out.println("afterPropertiesSet() 호출");
    }

    @Override
    public void destroy() throws Exception {
        System.out.println("destroy() 호출");
    }

    public void send(String message){
        System.out.printf("메세지: %s, 전송 완료%n", message);
    }
}
// 요약
// 외부에서 지정한 메세지를 호출하게 해주는거임