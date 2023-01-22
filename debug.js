const { sleep } = require("./utils.js");

serenade.global().command("get mouse location", async (api, matches) => {
  const loc = await api.getMouseLocation();
  await api.runCommand("revision box");
  await sleep(200);
  await api.runCommand(`system x: ${loc.x}, y: ${loc.y}`);
});

[
  "get application name",
  "get app name",
  "get active application",
  "get active app",
].forEach((command) => {
  serenade.global().command(command, async (api, matches) => {
    const appName = await api.getActiveApplication();
    await api.runCommand("revision box");
    await sleep(200);
    await api.runCommand(`system ${appName}`);
  });
});
