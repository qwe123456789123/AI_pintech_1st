<%@ page contentType="text/html; charset=UTF-8" %>
<h1>하이욤</h1>
<h2>변역 위치 _jspService() 매서드 내부에 주로 번역</h2>
<% // 스크립틀릿 태그 - _jspService()
    System.out.println(request);
    System.out.println(response);
    String value = request.getParameter("key1");
    System.out.println(value);
%>

<%
int num1 = 100;
%>