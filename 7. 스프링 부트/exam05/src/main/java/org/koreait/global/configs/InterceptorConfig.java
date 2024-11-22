package org.koreait.global.configs;

import lombok.RequiredArgsConstructor;
import org.koreait.global.interceptors.CommonInterceptor;
import org.koreait.global.interceptors.MemberOnlyInterceptor;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@RequiredArgsConstructor
public class InterceptorConfig implements WebMvcConfigurer {

    private final CommonInterceptor commonInterceptor;
    private final MemberOnlyInterceptor memberOnlyInterceptor;

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(commonInterceptor); // /** 동일
                //.addPathPatterns("/**");

        registry.addInterceptor(memberOnlyInterceptor)
                .addPathPatterns("/mypage/**"); //
    }
}
/**
 * commonInterceptor: 특정 결로에 대한 접근을 제한
 *
 * MemberOnlyInterceptor로 설정한거임
 * /mypage를 포함한 모든 하위 경로만을 적용
 */