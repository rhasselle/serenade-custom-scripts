serenade.app("chrome").command("play", async (api) => {
  await api.pressKey("space");
});

serenade.app("chrome").command("stop", async (api) => {
  await api.pressKey("space");
});

serenade.app("chrome").command("slow down", async (api) => {
  await api.pressKey(",", ["shift"]);
});

serenade.app("chrome").command("slow down <%number%>", async (api, matches) => {
  let amt = 0 < matches.number <= 10 ? matches.number : 1;
  for (let i = 1; i < amt; i++) {
    await api.pressKey(",", ["shift"]);
  }
});

serenade.app("chrome").command("speed up", async (api) => {
  await api.pressKey(".", ["shift"]);
});

serenade.app("chrome").command("speed up <%number%>", async (api, matches) => {
  let amt = 0 < matches.number <= 10 ? matches.number : 1;
  for (let i = 0; i < amt; i++) {
    await api.pressKey(".", ["shift"]);
  }
});

serenade.app("chrome").command("fullscreen", async (api) => {
  await api.pressKey("f");
});

serenade.app("chrome").command("theatre", async (api) => {
  await api.pressKey("t");
});

serenade.app("chrome").command("restore", async (api) => {
  await api.pressKey("f");
});
