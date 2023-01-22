serenade
  .language("javascript")
  .snippet(
    "add fetch",
    "fetch(url)<%newline%><%indent%>.then(res => res.json())<%newline%><%indent%>.then(data => <%cursor%>)"
  );

serenade
  .language("javascript")
  .snippet(
    "add for loop",
    "for (let i = 0; i < <%cursor%>.length; i++) {<%newline%><%indent%><%newline%>}"
  );

serenade
  .language("javascript")
  .snippet(
    "add for loop <%text%>",
    "for (let i = 0; i < <%text%>.length; i++) {<%newline%><%indent%><%cursor%><%newline%>}"
  );

serenade
  .language("javascript")
  .snippet(
    "add for of loop",
    "for (item of <%cursor%>) {<%newline%><%indent%><%newline%>}"
  );

serenade
  .language("javascript")
  .snippet(
    "add for of <%text%>",
    "for (item of <%text%>) {<%newline%><%indent%><%cursor%><%newline%>}"
  );
