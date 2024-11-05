package org.koreait.exam01;

import org.junit.jupiter.api.Test;
import org.koreait.global.configs.AppCtx;
import org.koreait.member.controllers.RequestJoin;
import org.koreait.member.services.InfoService;
import org.koreait.member.services.JoinService;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class Ex01 {
    @Test
    void test1() {
        AnnotationConfigApplicationContext ctx = new AnnotationConfigApplicationContext(AppCtx.class);

        //JoinService service = ctx.getBean("joinService", JoinService.class);
        JoinService service = ctx.getBean(JoinService.class);
        //InfoService infoService = ctx.getBean("infoService", InfoService.class);
        InfoService infoService = ctx.getBean(InfoService.class);
        RequestJoin from = new RequestJoin();
        from.setEmail("user1@test.org");
        from.setPassword("1234");
        from.setConfirmPassword("1234");
        from.setUserName("휴먼");
        from.setAgree(true);

        service.process(from); // 회원 가입 처리

        infoService.print(); // 가입한 회원 목록 출력
        ctx.close();
    }
}
