package org.koreait.global.libs;


import org.springframework.stereotype.Component;

@Component("ut")
public class Utils { // utils
    public String hello(String name){
        return String.format("%s 님 하이욤", name);
    }
}
