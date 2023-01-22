const { sleep } = require("./utils.js");

["other window", "previous window", "alt tab"].forEach((cmd) => {
  serenade.global().command(cmd, async (api, cmd) => {
    await api.pressKey("tab", ["alt"]);
  });
});

serenade.global().command("window left", async (api, matches) => {
  await api.pressKey("left", ["win"]);
  await sleep(500);
  await api.pressKey("escape");
});

serenade.global().command("window right", async (api, matches) => {
  await api.pressKey("right", ["win"]);
  await sleep(500);
  await api.pressKey("escape");
});

["maximize", "maximize window"].forEach((cmd) => {
  serenade.global().command(cmd, async (api, matches) => {
    await api.pressKey("space", ["alt"]);
    await sleep(200);
    await api.pressKey("x");
  });
});

["minimize", "minimize window"].forEach((cmd) => {
  serenade.global().command(cmd, async (api, matches) => {
    await api.pressKey("space", ["alt"]);
    await sleep(200);
    await api.pressKey("n");
  });
});

["restore", "restore window"].forEach((cmd) => {
  serenade.global().command(cmd, async (api, matches) => {
    await api.pressKey("space", ["alt"]);
    await sleep(200);
    await api.pressKey("r");
  });
});

serenade.global().command("close window", async (api, matches) => {
  await api.pressKey("space", ["alt"]);
  await sleep(200);
  await api.pressKey("c");
});

["rename file", "rename", "rename folder"].forEach((cmd) => {
  serenade.global().command(cmd, async (api, matches) => {
    await api.pressKey("f2");
  });
});

serenade.global().command("delete file", async (api, cmd) => {
  await api.pressKey("delete");
});

serenade.global().command("open folder <%text%>", async (api, cmd) => {
  await api.pressKey("win");
  await sleep(100);
  await api.typeText("folder:" + cmd.text);
  await api.pressKey("enter");
});

serenade.global().command("search folder <%text%>", async (api, cmd) => {
  await api.pressKey("win");
  await sleep(100);
  await api.typeText("folder:" + cmd.text);
});

["show desktop", "restore desktop", "hide desktop"].forEach((cmd) => {
  serenade.global().command(cmd, async (api, cmd) => {
    await api.pressKey("d", ["win"]);
  });
});

serenade.global().command("show all windows", async (api, cmd) => {
  await api.pressKey("tab", ["win"]);
});

serenade.global().command("smart paste", async (api, cmd) => {
  await api.pressKey("v", ["win"]);
});

serenade.global().command("windows open <%text%>", async (api, cmd) => {
  await api.pressKey("win");
  await sleep(50);
  await api.typeText(cmd.text);
  await api.pressKey("enter");
});

serenade.global().command("windows search <%text%>", async (api, cmd) => {
  await api.pressKey("win");
  await sleep(50);
  await api.typeText(cmd.text);
});
