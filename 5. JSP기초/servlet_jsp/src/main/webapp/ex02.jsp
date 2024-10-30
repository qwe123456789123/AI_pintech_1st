<%@ page contentType="text/html; charset=UTF-8" %>
<%@ page import="java.util.*" %>
<%@ page import="java.time.*" %>
<%@ page import="java.util.function.*,java.util.stream.*" %>
<%@ page info="JSP 연습" %>
<%
ArrayList<String> items = new ArrayList<>();
items.add("청포도 사탕");
items.add("츄파춥스 딸기밀크맛");
items.add("누룽지 사탕");
%>
<%=items%>
<%
    LocalDateTime now = LocalDateTime.now();
%>
<h1><%=now%></h1>
<h1>