serenade.app("terminal").command("code dot", async (api, cmd) => {
  await api.typeText("code .");
  await api.pressKey("enter");
});

["ls", "list"].forEach((cmd) => {
  serenade.app("terminal").command(cmd, async (api) => {
    await api.typeText("ls -a");
    await api.pressKey("enter");
  });
});

serenade.app("terminal").command("file copy", async (api) => {
  await api.typeText("cp ");
});

serenade.app("terminal").command("cancel", async (api) => {
  await api.pressKey("c", ["commandOrControl"]);
});

serenade.app("terminal").command("clear", async (api) => {
  await api.pressKey("l", ["commandOrControl"]);
});

serenade.app("terminal").command("pwd", async (api) => {
  await api.typeText("pwd");
  await api.pressKey("enter");
});

serenade.global().command("cd", async (api) => {
  await api.typeText("cd ");
});

["cd up", "cd .."].forEach((cmd) => {
  serenade.global().command(cmd, async (api) => {
    await api.typeText("cd ..");
    await api.pressKey("enter");
  });
});

serenade.global().command("cd <%text%>", async (api, cmd) => {
  await api.typeText("cd ");
  await api.typeText(cmd.text);
  await api.pressKey("tab");
  await api.pressKey("enter");
});

["clear term", "clear terminal"].forEach((cmd) => {
  serenade.global().command(cmd, async (api) => {
    await api.pressKey("l", ["commandOrControl"]);
  });
});
