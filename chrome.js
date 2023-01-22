const { sleep } = require("./utils.js");

serenade.app("chrome").command("click first link", async (api) => {
  await api.pressKey("tab");
  await api.pressKey("enter");
  await api.pressKey("enter");
});

["restart", "cleanup"].forEach((cmd) => {
  serenade.app("chrome").command(cmd, async (api) => {
    await api.pressKey("w", ["commandOrControl", "shift"]);
    await sleep(100);
    await api.runCommand("launch google chrome");
  });
});

serenade.app("chrome").command("scroll to top", async (api) => {
  await api.pressKey("home", ["commandOrControl"]);
});

serenade.app("chrome").command("scroll to bottom", async (api) => {
  await api.pressKey("end", ["commandOrControl"]);
});

serenade.app("chrome").command("select word", async (api) => {
  await api.click("left", 2);
});

["select line", "select block"].forEach((cmd) => {
  serenade.app("chrome").command(cmd, async (api) => {
    await api.click("left", 3);
  });
});

["copy line", "copy block"].forEach((cmd) => {
  serenade.app("chrome").command(cmd, async (api) => {
    await api.click("left", 3);
    await api.pressKey("c", ["commandOrControl"]);
  });
});

serenade.app("chrome").command("find <%text%>", async (api, matches) => {
  await api.pressKey("f", ["commandOrControl"]);
  await api.typeText(matches.text);
});

serenade.app("chrome").command("copy url", async (api) => {
  await api.pressKey("l", ["commandOrControl"]);
  await api.pressKey("c", ["commandOrControl"]);
});
