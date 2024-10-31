<%@ page contentType='text/html; charset=utf-8' %>
<%
Cookie cookie = new Cookie("key3","value3");
cookie.setPath(request.getContextPath());

response.addCookie(cookie);
%>