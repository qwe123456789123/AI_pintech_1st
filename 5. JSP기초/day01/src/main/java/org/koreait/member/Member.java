package org.koreait.member;

import lombok.*;

// @Setter @Getter @ToString
// @Data
// @NoArgsConstructor(access = AccessLevel.PRIVATE)
// @AllArgsConstructor // 모든 생성자의 매개변수 생성
// @RequiredArgsConstructor // 지정한 생성자만 매개변수 생성
@Builder
@ToString
public class Member {
    private long seq; // 회원번호
    private String email; // 이메일
    // @NonNull // 특정 변수만 초기화
    // @ToString.Exclude // ToString에서 배제
    private String password;
}
