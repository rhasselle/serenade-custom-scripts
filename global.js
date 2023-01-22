serenade.global().command("play", async (api, matches) => {
  await api.pressKey("space");
});

serenade.global().command("stop", async (api, matches) => {
  await api.pressKey("space");
});

serenade.global().command("resume", async (api, matches) => {
  await api.pressKey("space");
});

serenade.global().command("undo", async (api, matches) => {
  // do nothing - to prevent accidental triggers from speech mumbles
});

serenade.global().command("redo", async (api, matches) => {
  // do nothing - to prevent accidental triggers from speech mumbles
});

serenade.global().command("undo that", async (api, matches) => {
  await api.pressKey("z", ["commandOrControl"]);
});

serenade.global().command("redo that", async (api, matches) => {
  await api.pressKey("z", ["commandOrControl", "shift"]);
});

serenade.global().command("cancel", async (api, matches) => {
  const activeApplication = await api.getActiveApplication();

  if (activeApplication && activeApplication.includes("serenade")) {
    await api.runCommand("close window");
  } else {
    await api.pressKey("escape");
  }
});

serenade.global().command("mouse click", (api) => {
  api.click("left", 1);
});

serenade.global().command("double click", (api) => {
  api.click("left", 2);
});

serenade.global().command("shift tab", async (api, cmd) => {
  await api.pressKey("tab", ["shift"]);
});
