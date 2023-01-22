serenade.app("discord").command("show help", async (api) => {
  await api.pressKey("/", ["commandOrControl"]);
});

serenade.app("discord").command("server up", async (api) => {
  await api.pressKey("up", ["commandOrControl", "alt"]);
});

serenade.app("discord").command("server down", async (api) => {
  await api.pressKey("down", ["commandOrControl", "alt"]);
});

[
  "go to server",
  "servers",
  "show servers",
  "show recent servers",
  "recent servers",
].forEach((cmd) => {
  serenade.app("discord").command(cmd, async (api) => {
    await api.pressKey("k", ["commandOrControl"]);
    await api.pressKey("*");
  });
});

["go to server <%text%>", "server <%text%>"].forEach((cmd) => {
  serenade.app("discord").command(cmd, async (api, matches) => {
    await api.pressKey("k", ["commandOrControl"]);
    await api.pressKey("*");
    await api.typeText(matches.text);
  });
});

serenade.app("discord").command("channel up", async (api) => {
  await api.pressKey("up", ["alt"]);
});

serenade.app("discord").command("channel down", async (api) => {
  await api.pressKey("down", ["alt"]);
});

[
  "go to channel",
  "channels",
  "show channels",
  "show recent channels",
  "recent channels",
  "show recent",
  "go to",
].forEach((cmd) => {
  serenade.app("discord").command(cmd, async (api) => {
    await api.pressKey("k", ["commandOrControl"]);
  });
});

["go to channel <%text%>", "channel <%text%>", "go to <%text%>"].forEach(
  (cmd) => {
    serenade.app("discord").command(cmd, async (api, matches) => {
      await api.pressKey("k", ["commandOrControl"]);
      await api.typeText(matches.text);
    });
  }
);

serenade.app("discord").command("channel <%text%>", async (api) => {
  await api.pressKey("k", ["commandOrControl"]);
  await api.typeText("#" + matches.text);
});

serenade.app("discord").command("clear line", async (api) => {
  await api.pressKey("a", ["commandOrControl"]);
  await api.pressKey("delete");
});

["emoji", "emote", "insert emoji", "insert emote"].forEach((cmd) => {
  serenade.app("discord").command(cmd, async (api) => {
    await api.pressKey("e", ["commandOrControl"]);
  });
});

serenade.app("discord").command("scroll to bottom", async (api) => {
  await api.pressKey("pagedown", ["shift"]);
});

serenade.app("discord").command("go to last unread", async (api) => {
  await api.pressKey("pageup", ["shift"]);
});

["last unread", "go to last unread", "show last unread"].forEach((cmd) => {
  serenade.app("discord").command(cmd, async (api) => {
    await api.pressKey("pageup", ["shift"]);
  });
});
