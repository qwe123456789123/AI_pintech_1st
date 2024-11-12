package org.koreait.member.controllers;

import lombok.Data;

import java.util.List;

@Data
public class RequestJoin {
    private String email;
    private String password;
    private String confirmPassword;
    private List<String> hobby;

    private RequestAddress addrl;
}
