package org.koreait.config;

import org.koreait.exam04.Calculator;
import org.koreait.exam04.RecCalculator;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.EnableAspectJAutoProxy;
import org.springframework.core.annotation.Order;

import javax.swing.*;

@Configuration
// Spring에서 이 클래스를 빈 정의의 소스로 처리합니다.
/**
 * 서브클래스 기반의 프록시 변환
 * 자바 표준은 인터페이스 기반의 프록시 이다.
 * 스프링쪽에는 기능을 확장해서 서브클래스 기반 프록시도 구현!
 */
//@EnableAspectJAutoProxy(proxyTargetClass = true)
// 이 옵션을 사용하면 인터페이스 없이 클래스를 프록시할 수 있음
@EnableAspectJAutoProxy
// Spring은 Bean에 대한 프록시를 생성하여 교차 절단 문제(예: 캐싱)를 적용할 수 있습니다.
public class AppCtx {
// @Bean 은 컨테이너에서 호출할수 있게 알려주는 역할 (수동빈)
    @Bean
    public SpringCachedCalculator springCachedCalculator() {
        return new SpringCachedCalculator();
    }

    @Bean
    public SpringProxyCalculator springProxyCalculator() {
        return new SpringProxyCalculator();
    }

    @Bean
    public Calculator calculator() {
        return new RecCalculator();
    }

    /*
    @Bean
    public RecCalculator calculator() {
        return new RecCalculator();
    } */
}