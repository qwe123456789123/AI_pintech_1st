<%@ page contentType='text/html; charset=utf-8' %>
<%
Cookie cookie = new Cookie("key1","value1");
response.addCookie(cookie);
%>