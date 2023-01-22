const AUTOHOTKEY_PATH = "C:\\Program Files\\AutoHotkey\\AutoHotkey.exe";
// Best to move you AutoHotkey scripts somewhere else rather than here
const AUTOHOTKEY_SCRIPTS_PATH =
  "C:\\Users\\{RandomUser}\\.serenade\\scripts\\AutoHotkey";

async function runAutoHotkeyScript(api, fileName, params = []) {
  return api.runShell(consts.AUTOHOTKEY_PATH, [
    `${consts.AUTOHOTKEY_SCRIPTS_PATH}\\${fileName}`,
    ...params,
  ]);
}

serenade.global().command("shift click", async (api, cmd) => {
  await runAutoHotkeyScript(api, "shiftclick.ahk");
});

serenade.global().command("control click", async (api, cmd) => {
  await runAutoHotkeyScript(api, "ctrlclick.ahk");
});

serenade.global().command("alt click", async (api, cmd) => {
  await runAutoHotkeyScript(api, "altclick.ahk");
});

serenade.global().command("screen right", async (api, matches) => {
  await runAutoHotkeyScript(api, "screenright.ahk");
});

serenade.global().command("screen left", async (api, matches) => {
  await runAutoHotkeyScript(api, "screenleft.ahk");
});
