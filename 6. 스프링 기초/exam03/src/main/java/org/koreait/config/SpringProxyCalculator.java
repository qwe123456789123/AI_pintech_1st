package org.koreait.config;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.*;
import org.springframework.core.annotation.Order;

@Order(2)
@Aspect
public class SpringProxyCalculator {

    @Pointcut("execution(* org.koreait.exam04..*(..))")
    public void publicTarget() {

    }

    /*
    @Before("publicTarget()")
    public void beforeProcess(JoinPoint joinPoint) throws Throwable {
        System.out.println("@Before!!");
    }

    @After("publicTarget()")
    public void afterProcess(JoinPoint joinPoint) throws Throwable {
        System.out.println("@After!!");
    }
    */
    //@Around("publicTarget()")
    @Around("CommonPointcut.pulicTarget")
    // 외부 포인트컷을 참조함
    public Object process(ProceedingJoinPoint joinPoint) throws Throwable { // 메서드 호출을 제어함
        long stime = System.nanoTime(); // 실행 시간
        try {
            Object result = joinPoint.proceed(); // 핵심 기능을 대신 수행
            return result; // 종료
        } finally { // 성공여부와 상관없이 완료 시간 출력 하기 해줌
            long etime = System.nanoTime(); // 종료 시간
            System.out.printf("걸린시간: %d%n", etime - stime);
        }
    }
}
// 요약
// 매서드 실행 시간을 기록함 외부에서 이 기록을 사용함
