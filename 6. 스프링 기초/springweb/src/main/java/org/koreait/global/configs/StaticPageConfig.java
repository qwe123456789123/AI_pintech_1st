package org.koreait.global.configs;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * 컨트롤러 빈이 없는 정적  페이지 연결 설정
 *
 */

@Configuration
public class StaticPageConfig implements WebMvcConfigurer {
    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
        registry.addViewController("/mypage") // 이게 url 주소
                .setViewName("member/mypage");
        // 이게 member/mypage 의 메서드를 가져오다는 말임
        // member/mypage로 검색하는게 아닌 그냥 mypage로 검색 하면 나옴
    }
}
