package org.koreait.exam01.main;

import org.junit.jupiter.api.Test;
import org.koreait.exam01.Greeter;
import org.koreait.exam01.config.AppCtx;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class Ex01 {
    @Test
    void test1() {
        AnnotationConfigApplicationContext ctx =
                new AnnotationConfigApplicationContext(AppCtx.class);

        /**
         * AnnotationConfig : 설정 방식
         * ApplicationContext :
         */

        Greeter g1 = ctx.getBean(Greeter.class);
        // 매서드가 1게 일경우 직격해서 선언 할 필요 없이 생략 가능
        g1.hello("휴먼");
        Greeter g2 = ctx.getBean("greeter",Greeter.class);
        System.out.println(g1==g2); // 싱글톤 형태로 객체를 관리
        ctx.close();
    }
}
