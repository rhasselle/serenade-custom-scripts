serenade
  .language("javascript")
  .snippet(
    "add global command",
    'serenade.global().command("<%cursor%>", async (api,matches) => {<%newline%>});',
    { name: ["identifier", "lowercase"] }
  );

serenade
  .language("javascript")
  .snippet(
    "add global command <%name%>",
    'serenade.global().command("<%name%>", async (api,matches) => {<%newline%><%cursor%><%newline%>});',
    { name: ["identifier", "lowercase"] }
  );

["new global command <%name%>", "add global command <%name%>"].forEach(
  (command) => {
    serenade
      .language("javascript")
      .snippet(
        command,
        'serenade.global().command("<%name%><%cursor%>", async (api,matches) => {<%newline%><%cursor%><%newline%>});',
        { name: ["identifier", "lowercase"] }
      );
  }
);

[
  "add application command <%name%>",
  "new application command <%name%>",
].forEach((command) => {
  serenade
    .language("javascript")
    .snippet(
      command,
      'serenade.app("<%cursor%>").command("<%name%>", async (api,matches) => {<%newline%>});',
      { name: ["identifier", "lowercase"] }
    );
});

serenade
  .language("javascript")
  .snippet("serenade press key", 'await api.pressKey("<%cursor%>");');

serenade
  .language("javascript")
  .snippet(
    "serenade evaluate in plugin",
    'await api.evaluateInPlugin("<%cursor%>")'
  );

serenade
  .language("javascript")
  .snippet(
    "new snippet <%language%> <%command%>",
    'serenade.language("<%language%>").snippet(<%newline%>"<%command%>",<%newline%>"<%cursor%>"<%newline%>);'
  );

serenade
  .language("javascript")
  .snippet("serenade type text", 'await api.typeText("<%cursor%>");');

serenade.language("javascript").snippet("serenade parameter", "<%<%cursor%>%>");
