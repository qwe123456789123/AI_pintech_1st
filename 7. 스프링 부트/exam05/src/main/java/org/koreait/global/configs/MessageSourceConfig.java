package org.koreait.global.configs;

import org.springframework.context.MessageSource;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.support.ResourceBundleMessageSource;

@Configuration
public class MessageSourceConfig {

    @Bean
    public MessageSource messageSource() {
        ResourceBundleMessageSource ms = new ResourceBundleMessageSource();
        // 메세지를 읽고 처리 하는걸 설정함
        ms.addBasenames("messages.commons", "messages.validations", "messages.errors");
        // 에러 메서지를 가져오는 곳
        ms.setDefaultEncoding("UTF-8");
        // 메세지 코드를 발견하지 못하면 해당 코드를 메세지로 사용
        ms.setUseCodeAsDefaultMessage(true);

        // 코드가 없을경우 기본 값을 사용
        return ms;
    }
}
