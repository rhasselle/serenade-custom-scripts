serenade.global().command("git init", async (api, cmd) => {
  await api.typeText("git init");
});

serenade.global().command("git branch", async (api, cmd) => {
  await api.typeText("git branch");
  await api.pressKey("enter");
});

serenade.global().command("git checkout branch", async (api, cmd) => {
  await api.typeText("git checkout -b ");
});

serenade.global().command("git checkout branch <%text%>", async (api, cmd) => {
  await api.typeText("git checkout -b " + cmd.text);
});

serenade.global().command("git checkout", async (api, cmd) => {
  await api.typeText("git checkout ");
});

serenade.global().command("git checkout <%text%>", async (api, cmd) => {
  await api.typeText("git checkout " + cmd.text);
});

serenade.global().command("git commit", async (api, cmd) => {
  await api.typeText('git commit -m "');
});

serenade.global().command("git commit <%text%>", async (api, cmd) => {
  await api.typeText('git commit -m "');
  await api.typeText(cmd.text);
  await api.typeText('"');
});

serenade.global().command("git add all", async (api, cmd) => {
  await api.typeText("git add .");
  await api.pressKey("enter");
});

serenade.global().command("git log", async (api, cmd) => {
  await api.typeText("git log");
  await api.pressKey("enter");
});

serenade.global().command("git status", async (api, cmd) => {
  await api.typeText("git status");
  await api.pressKey("enter");
});

serenade.global().command("git push", async (api, cmd) => {
  await api.typeText("git push");
});

serenade.global().command("git pull", async (api, cmd) => {
  await api.typeText("git pull");
});

serenade.global().command("git pull rebase", async (api, cmd) => {
  await api.typeText("git pull --rebase");
});

serenade.global().command("gh repo", async (api, cmd) => {
  await api.typeText("gh repo");
});

serenade.global().command("gh repo create", async (api, cmd) => {
  await api.typeText("gh repo create");
});
