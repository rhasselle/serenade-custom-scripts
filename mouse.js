const moveMouse = async (api, x, y) => {
  const current = await api.getMouseLocation();
  return api.setMouseLocation(current.x + x, current.y + y);
};

// mouse grid
// x: 0-1920, y: 0-1080
// ---------- ---------- ----------
// |    1    |     2    |    3    |
// |---------|----------|---------|
// |    4    |     5    |    6    |
// |---------|----------|---------|
// |    7    |     8    |    9    |
// ---------- ---------- ----------
const MOUSE_GRID = {
  one: { x: 320, y: 180 },
  two: { x: 960, y: 180 },
  three: { x: 1600, y: 180 },
  four: { x: 320, y: 540 },
  five: { x: 960, y: 540 },
  six: { x: 1600, y: 540 },
  seven: { x: 320, y: 900 },
  eight: { x: 960, y: 900 },
  nine: { x: 1600, y: 900 },
};

const MOUSE_GRID_SMALLER = {
  "one one": { x: 106, y: 60 },
  "one two": { x: 319, y: 60 },
  "one three": { x: 532, y: 60 },
  "one four": { x: 106, y: 180 },
  "one five": { x: 319, y: 180 },
  "one six": { x: 532, y: 180 },
  "one seven": { x: 106, y: 300 },
  "one eight": { x: 319, y: 300 },
  "one nine": { x: 532, y: 300 },
  "two one": { x: 745, y: 60 },
  "two two": { x: 958, y: 60 },
  "two three": { x: 1171, y: 60 },
  "two four": { x: 745, y: 180 },
  "two five": { x: 958, y: 180 },
  "two six": { x: 1171, y: 180 },
  "two seven": { x: 745, y: 300 },
  "two eight": { x: 958, y: 300 },
  "two nine": { x: 1171, y: 300 },
  "three one": { x: 1384, y: 60 },
  "three two": { x: 1597, y: 60 },
  "three three": { x: 1810, y: 60 },
  "three four": { x: 1384, y: 180 },
  "three five": { x: 1597, y: 180 },
  "three six": { x: 1810, y: 180 },
  "three seven": { x: 1384, y: 300 },
  "three eight": { x: 1597, y: 300 },
  "three nine": { x: 1810, y: 300 },
  "four one": { x: 106, y: 420 },
  "four two": { x: 319, y: 420 },
  "four three": { x: 532, y: 420 },
  "four four": { x: 106, y: 540 },
  "four five": { x: 319, y: 540 },
  "four six": { x: 532, y: 540 },
  "four seven": { x: 106, y: 660 },
  "four eight": { x: 319, y: 660 },
  "four nine": { x: 532, y: 660 },
  "five one": { x: 745, y: 420 },
  "five two": { x: 958, y: 420 },
  "five three": { x: 1171, y: 420 },
  "five four": { x: 745, y: 540 },
  "five five": { x: 958, y: 540 },
  "five six": { x: 1171, y: 540 },
  "five seven": { x: 745, y: 660 },
  "five eight": { x: 958, y: 660 },
  "five nine": { x: 1171, y: 660 },
  "six one": { x: 1384, y: 420 },
  "six two": { x: 1597, y: 420 },
  "six three": { x: 1810, y: 420 },
  "six four": { x: 1384, y: 540 },
  "six five": { x: 1597, y: 540 },
  "six six": { x: 1810, y: 540 },
  "six seven": { x: 1384, y: 660 },
  "six eight": { x: 1597, y: 660 },
  "six nine": { x: 1810, y: 660 },
  "seven one": { x: 106, y: 780 },
  "seven two": { x: 319, y: 780 },
  "seven three": { x: 532, y: 780 },
  "seven four": { x: 106, y: 900 },
  "seven five": { x: 319, y: 900 },
  "seven six": { x: 532, y: 900 },
  "seven seven": { x: 106, y: 1020 },
  "seven eight": { x: 319, y: 1020 },
  "seven nine": { x: 532, y: 1020 },
  "eight one": { x: 745, y: 780 },
  "eight two": { x: 958, y: 780 },
  "eight three": { x: 1171, y: 780 },
  "eight four": { x: 745, y: 900 },
  "eight five": { x: 958, y: 900 },
  "eight six": { x: 1171, y: 900 },
  "eight seven": { x: 745, y: 1020 },
  "eight eight": { x: 958, y: 1020 },
  "eight nine": { x: 1171, y: 1020 },
  "nine one": { x: 1384, y: 780 },
  "nine two": { x: 1597, y: 780 },
  "nine three": { x: 1810, y: 780 },
  "nine four": { x: 1384, y: 900 },
  "nine five": { x: 1597, y: 900 },
  "nine six": { x: 1810, y: 900 },
  "nine seven": { x: 1384, y: 1020 },
  "nine eight": { x: 1597, y: 1020 },
  "nine nine": { x: 1810, y: 1020 },
};

Object.entries(MOUSE_GRID).forEach(([gridNumber, { x, y }]) => {
  [`mouse grid ${gridNumber}`, `mouse ${gridNumber}`].forEach((command) => {
    serenade.global().command(command, async (api) => {
      await api.setMouseLocation(x, y);
    });
  });
});

Object.entries(MOUSE_GRID_SMALLER).forEach(([gridNumber, { x, y }]) => {
  [`mouse grid ${gridNumber}`, `mouse ${gridNumber}`].forEach((command) => {
    serenade.global().command(command, async (api) => {
      await api.setMouseLocation(x, y);
    });
  });
});

serenade
  .global()
  .command("mouse <%direction%> <%amount%>", async (api, matches) => {
    let x = 0,
      y = 0;
    switch (matches.direction) {
      case "up":
        y = -parseInt(matches.amount);
        break;
      case "down":
        y = parseInt(matches.amount);
        break;
      case "left":
        x = -parseInt(matches.amount);
        break;
      case "right":
        x = parseInt(matches.amount);
        break;
      default:
        break;
    }
    await moveMouse(api, x, y);
  });

serenade
  .global()
  .command("mouse <%direction%> <%amount%> click", async (api, matches) => {
    let x = 0,
      y = 0;
    switch (matches.direction) {
      case "":
        y = -parseInt(matches.amount);
        break;
      case "down":
        y = parseInt(matches.amount);
        break;
      case "left":
        x = -parseInt(matches.amount);
        break;
      case "right":
        x = parseInt(matches.amount);
        break;
      default:
        break;
    }
    await moveMouse(api, x, y);
    api.click("left");
  });
