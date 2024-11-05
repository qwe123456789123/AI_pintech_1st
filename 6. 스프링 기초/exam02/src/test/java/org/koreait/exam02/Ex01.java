package org.koreait.exam02;

import org.junit.jupiter.api.Test;
import org.koreait.global.configs.AppCtx4;
import org.koreait.member.controllers.RequestJoin;
import org.koreait.member.services.InfoService;
import org.koreait.member.services.JoinService;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class Ex01 {

    @Test
    void test1(){
        AnnotationConfigApplicationContext ctx = new AnnotationConfigApplicationContext(AppCtx4.class);
        JoinService joinService = ctx.getBean(JoinService.class);
        InfoService infoService = ctx.getBean(InfoService.class);
        RequestJoin from = new RequestJoin();
        from.setEmail("qwe123@test.org");
        from.setPassword("1234");
        from.setConfirmPassword("1234");
        from.setUserName("휴먼");
        from.setAgree(true);

        joinService.process(from);
        infoService.print();
        ctx.close();
    }
}
