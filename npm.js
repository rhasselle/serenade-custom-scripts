serenade.global().command("npm init", async (api) => {
  await api.typeText("npm init");
});

serenade.global().command("npm install", async (api) => {
  await api.typeText("npm install");
});

serenade.global().command("npm docs <%text%>", async (api, matches) => {
  await api.typeText("npm docs ");
  await api.typeText(matches.text);
  await api.pressKey("enter");
});

serenade.global().command("npm search <%text%>", async (api, matches) => {
  await api.typeText("npm search ");
  await api.typeText(matches.text);
  await api.pressKey("enter");
});

serenade.global().command("npm install <%text%>", async (api, matches) => {
  await api.typeText("npm install ");
  await api.typeText(matches.text);
});

serenade.global().command("npm run start", async (api) => {
  await api.typeText("npm run start");
  await api.pressKey("enter");
});

serenade.global().command("npm run dev", async (api) => {
  await api.typeText("npm run dev");
  await api.pressKey("enter");
});
