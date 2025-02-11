<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"
    import ="java.time.*"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<h1 style="color:red;text-align: center">Welcome to Jenkins <%= new java.util.Date() %></h1>
<h1 style="color:green;text-align: center">Welcome to Jenkins <%= LocalTime.now() %></h1> 
<h1 style="color:cyan;text-align: center">Welcome to Jenkins <%= LocalTime.now() %></h1> 
</body>
</html>