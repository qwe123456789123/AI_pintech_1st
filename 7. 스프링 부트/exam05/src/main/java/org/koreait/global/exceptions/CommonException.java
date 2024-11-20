package org.koreait.global.exceptions;

import lombok.Getter;
import lombok.Setter;
import org.springframework.http.HttpStatus;

@Getter @Setter
public class CommonException extends RuntimeException {
    private HttpStatus status;
    private boolean errorCode; // message가 에러 코드인지 여부

    public CommonException(String message, HttpStatus status) {
        super(message);
        this.status = status;
    }
}

// 모든 예외처리는 이쪽에서 상속 받아서 처리함