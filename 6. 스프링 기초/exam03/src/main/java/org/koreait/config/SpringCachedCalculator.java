package org.koreait.config;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.core.annotation.Order;

import java.util.HashMap;
import java.util.Map;

@Order(1) // 실행 우선 순위 설정
@Aspect // 측면으로 표시하여 교차 절단 논리
public class SpringCachedCalculator {

    private Map<Long, Object> cache = new HashMap<>(); // 메서드 결과를 저장함 Object캐시된 결과를 나타냄

    // @Pointcut("execution(* org.koreait.exam04..*(..))")
    // public void publicTarget() {}

    // @Around("publicTarget()")
    // @Around("execution(* org.koreait.exam04..*(..))")
    @Around("CommonPointcut.pulicTarget")
    // 외부 포인트컷을 참조함
    public Object process(ProceedingJoinPoint joinPoint) throws Throwable {
        Object[] args = joinPoint.getArgs();
        // args 메서드에 전달되는 인수를 검색
        long num = (long)args[0];
        if (cache.containsKey(num)) {
            System.out.println("캐시에서 가져옴....");
            return cache.get(num);
        } // 캐시확인: num 이 있는지 확인함
        // 있다면 캐시된 값을 검색하여 반환

        Object result = joinPoint.proceed();
        // 결과가 아직 캐시 되지 않은 경우 대상 메서드를 실행
        cache.put(num, result);
        System.out.println("캐시에 값 저장....");
        // 캐시 저장: 메서드 실행 후 결과가 캐시에 저장 되어
        // num이 나중에 동일한 입력으로 호출 할때 사용
        return result; // 종료
    }
}

//요약
//CommonPointcut.pulicTarget공유 포인트컷( ) 사용 : 이 리팩토링을 사용하면 여러 측면이나 클래스에서 동일한 포인트컷을 재사용하여 모듈성과 유지 관리성을 향상시킬 수 있습니다.
//SpringCachedCalculator이제 중앙 집중식 포인트컷을 사용하여 메서드 호출을 CommonPointcut.pulicTarget가로채고 지정된 곳에 캐싱을 적용합니다. 이렇게 하면 캐싱 로직을 격리하는 동시에 어떤 메서드를 캐싱할지 정의하는 데 있어 유연성이 향상됩니다.