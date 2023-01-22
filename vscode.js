const { sleep } = require("./utils.js");

["close all tabs", "cleanup"].forEach((command) => {
  serenade.app("code").command(command, async (api, matches) => {
    await api.evaluateInPlugin("openEditors.closeAll");
  });
});

serenade.app("code").command("close other tabs", async (api, matches) => {
  await api.evaluateInPlugin("workbench.action.closeOtherEditors");
});

["open previous tab", "open last tab"].forEach((command) => {
  serenade.app("code").command(command, async (api, matches) => {
    await api.evaluateInPlugin("workbench.action.reopenClosedEditor");
  });
});

["toggle mini map", "show mini map", "hide mini map"].forEach((command) => {
  serenade.app("code").command(command, async (api, matches) => {
    await api.evaluateInPlugin("editor.action.toggleMinimap");
  });
});

["select", "select next"].forEach((command) => {
  serenade.app("code").command(command, async (api, matches) => {
    await api.evaluateInPlugin("editor.action.addSelectionToNextFindMatch");
  });
});

serenade.app("code").command("select next <%number%>", async (api, matches) => {
  const increment = parseInt(matches.number);
  for (let index = 0; index < increment; index++) {
    await api.evaluateInPlugin("editor.action.addSelectionToNextFindMatch");
  }
});

[
  "select all occurrences",
  "select matching",
  "select all matching",
  "select all matches",
].forEach((command) => {
  serenade.app("code").command(command, async (api, matches) => {
    await api.evaluateInPlugin("editor.action.selectHighlights");
  });
});

serenade.app("code").command("open folder", async (api) => {
  await api.evaluateInPlugin("workbench.action.files.openLocalFolder");
});

["expand", "expand selection"].forEach((command) => {
  serenade.app("code").command(command, async (api, matches) => {
    await api.evaluateInPlugin("editor.action.smartSelect.expand");
  });
});

[
  "keyboard shortcuts",
  "show keyboard shortcuts",
  "open keyboard shortcuts",
].forEach((command) => {
  serenade.app("code").command(command, async (api, matches) => {
    await api.pressKey("k", ["control"]);
    await api.pressKey("s", ["control"]);
  });
});

serenade.app("code").command("resize terminal down", async (api, matches) => {
  await api.evaluateInPlugin("workbench.action.terminal.resizePaneDown");
});

serenade.app("code").command("resize terminal up", async (api, matches) => {
  await api.evaluateInPlugin("workbench.action.terminal.resizePaneUp");
});

["split", "split right"].forEach((command) => {
  serenade.app("code").command(command, async (api, matches) => {
    await api.evaluateInPlugin("workbench.action.moveEditorToNextGroup");
  });
});

[
  "unsplit",
  "merge",
  "single column",
  "one column",
  "one row",
  "single row",
  "one group",
  "single group",
  "collapse groups",
  "collapse columns",
  "collapse rows",
].forEach((command) => {
  serenade.app("code").command(command, async (api, matches) => {
    await api.evaluateInPlugin("workbench.action.editorLayoutSingle");
  });
});

serenade.app("code").command("split down", async (api, matches) => {
  await api.evaluateInPlugin("workbench.action.editorLayoutTwoRows");
});

serenade.app("code").command("group one", async (api, matches) => {
  await api.evaluateInPlugin("workbench.action.focusFirstEditorGroup");
});

serenade.app("code").command("group two", async (api, matches) => {
  await api.evaluateInPlugin("workbench.action.focusSecondEditorGroup");
});

serenade.app("code").command("group three", async (api, matches) => {
  await api.evaluateInPlugin("workbench.action.focusThirdEditorGroup");
});

serenade.app("code").command("group left", async (api, matches) => {
  await api.evaluateInPlugin("workbench.action.focusLeftGroup");
});

serenade.app("code").command("group right", async (api, matches) => {
  await api.evaluateInPlugin("workbench.action.focusRightGroup");
});

serenade.app("code").command("close group", async (api, matches) => {
  await api.evaluateInPlugin("workbench.action.closeEditorsInGroup");
});

serenade
  .app("code")
  .command("select a language <%language%>", async (api, matches) => {
    await api.pressKey("k", ["control"]);
    await api.pressKey("m");
    await api.typeText(matches.language);
  });

serenade.app("code").command("clear terminal", async (api, matches) => {
  await api.evaluateInPlugin("workbench.action.terminal.clear");
});

["toggle sidebar", "show sidebar", "hide sidebar", "close sidebar"].forEach(
  (command) => {
    serenade.app("code").command(command, async (api, matches) => {
      await api.evaluateInPlugin("workbench.action.toggleSidebarVisibility");
    });
  }
);

["show explorer", "show files"].forEach((command) => {
  serenade.app("code").command(command, async (api, matches) => {
    await api.evaluateInPlugin("workbench.view.explorer");
  });
});

["show search", "search"].forEach((command) => {
  serenade.app("code").command(command, async (api, matches) => {
    await api.evaluateInPlugin("workbench.view.search");
  });
});

serenade.app("code").command("search for <%text%>", async (api, matches) => {
  await api.evaluateInPlugin("workbench.view.search");
  await sleep(100);
  await api.typeText(matches.text);
});

["show source control", "show git", "show changes"].forEach((command) => {
  serenade.app("code").command(command, async (api, matches) => {
    await api.evaluateInPlugin("workbench.view.scm");
  });
});

serenade.app("code").command("show extensions", async (api, matches) => {
  await api.evaluateInPlugin("workbench.view.extensions");
});

["split", "split right", "move right", "split tabs", "split windows"].forEach(
  (command) => {
    serenade.app("code").command(command, async (api, matches) => {
      await api.evaluateInPlugin("workbench.action.moveEditorToNextGroup");
    });
  }
);

serenade.app("code").command("move left", async (api, matches) => {
  await api.evaluateInPlugin("workbench.action.moveEditorToPreviousGroup");
});

serenade.app("code").command("unsplit", async (api, matches) => {
  await api.evaluateInPlugin("workbench.action.editorLayoutSingle");
});

serenade.app("code").command("split down", async (api, matches) => {
  await api.evaluateInPlugin("workbench.action.editorLayoutTwoRows");
});

["close workspace", "new workspace"].forEach((command) => {
  serenade.app("code").command(command, async (api, matches) => {
    await api.evaluateInPlugin("workbench.action.closeFolder");
  });
});

["open workspace", "switch workspace", "change workspace"].forEach(
  (command) => {
    serenade.app("code").command(command, async (api, matches) => {
      await api.evaluateInPlugin("workbench.action.openRecent");
    });
  }
);

[
  "open workspace <%text%>",
  "switch workspace <%text%>",
  "change workspace <%text%>",
  "switch workspace to <%text%>",
  "change workspace to <%text%>",
].forEach((command) => {
  serenade.app("code").command(command, async (api, matches) => {
    await api.evaluateInPlugin("workbench.action.openRecent");
    await api.runCommand("system " + matches.text);
  });
});

[
  "toggle terminal",
  "toggle term",
  "show terminal",
  "show term",
  "open terminal",
  "open term",
].forEach((command) => {
  serenade.app("code").command(command, async (api, matches) => {
    await api.evaluateInPlugin("workbench.action.terminal.toggleTerminal");
  });
});

["hide terminal", "hide term", "close terminal", "close term"].forEach(
  (command) => {
    serenade.app("code").command(command, async (api, matches) => {
      await api.evaluateInPlugin("workbench.action.terminal.focus");
      await sleep(100);
      await api.evaluateInPlugin("workbench.action.terminal.toggleTerminal");
    });
  }
);

serenade.app("code").command("recent one", async (api, matches) => {
  await api.pressKey("tab", [], 5);
  await api.pressKey("enter");
});

serenade.app("code").command("recent two", async (api, matches) => {
  await api.pressKey("tab", [], 6);
  await api.pressKey("enter");
});

serenade.app("code").command("recent three", async (api, matches) => {
  await api.pressKey("tab", [], 7);
  await api.pressKey("enter");
});

serenade.app("code").command("recent four", async (api, matches) => {
  await api.pressKey("tab", [], 8);
  await api.pressKey("enter");
});

serenade.app("code").command("recent five", async (api, matches) => {
  await api.pressKey("tab", [], 9);
  await api.pressKey("enter");
});

serenade.app("code").command("recent more", async (api, matches) => {
  await api.pressKey("tab", [], 10);
  await api.pressKey("enter");
});

serenade.app("code").command("command", async (api, matches) => {
  await api.pressKey("p", ["commandOrControl", "shift"]);
});

["open file", "search files"].forEach((command) => {
  serenade.app("code").command(command, async (api, matches) => {
    await api.pressKey("p", ["commandOrControl"]);
  });
});

serenade.app("code").command("scroll to bottom", async (api, matches) => {
  await api.evaluateInPlugin("scrollEditorBottom");
});

serenade.app("code").command("scroll to top", async (api, matches) => {
  await api.evaluateInPlugin("scrollEditorTop");
});

serenade.app("code").command("delete lines", async (api, matches) => {
  await api.evaluateInPlugin("editor.action.deleteLines");
});

serenade.app("code").command("copy lines", async (api, matches) => {
  await api.evaluateInPlugin("expandLineSelection");
  await api.evaluateInPlugin("editor.action.clipboardCopyAction");
});

serenade.app("code").command("duplicate file", async (api, matches) => {
  await api.evaluateInPlugin("fileutils.duplicateFile");
});

[
  "comment lines",
  "comment line",
  "comment",
  "uncomment",
  "uncomment line",
  "uncomment lines",
].forEach((command) => {
  serenade.app("code").command(command, async (api, matches) => {
    await api.evaluateInPlugin("editor.action.commentLine");
  });
});

serenade.app("code").command("duplicate block", async (api, matches) => {
  await api.runCommand("copy block");
  await api.runCommand("end of block");
  await sleep(200);
  await api.pressKey("enter", [], 2);
  await api.pressKey("v", ["commandOrControl"]);
  await api.pressKey("backspace");
});

serenade.global().command("replace", async (api, matches) => {
  await api.pressKey("backspace");
});

serenade.global().command("replace line", async (api, matches) => {
  await api.evaluateInPlugin("cursorLineEnd");
  await api.evaluateInPlugin("deleteAllLeft");
});

serenade.global().command("show suggestions", async (api, matches) => {
  await api.evaluateInPlugin("editor.action.triggerSuggest");
});

serenade.global().command("show hints", async (api, matches) => {
  await api.evaluateInPlugin("editor.action.triggerParameterHints");
});
