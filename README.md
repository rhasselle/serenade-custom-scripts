# rhasselle/serenade-custom-scripts

## Features

### Added `serenade.d.ts` file for intellisense when working with serenade API
You may need to focus the file to "activate" the intellisense working (a bug)

### Lots of Visual Studio Code commands
`switch workspace`, `split right`, `group 2`, `unsplit`, `switch workspace`, `show/hide sidebar`, `show/hide changes/git`, `show/hide terminal`, `show/hide files/explorer`

### Mouse Grid (imaginary)
Imagine your screen split into 9 squares.
```
mouse grid
x: 0-1920, y: 0-1080
---------- ---------- ----------
|    1    |     2    |    3    |
|---------|----------|---------|
|    4    |     5    |    6    |
|---------|----------|---------|
|    7    |     8    |    9    |
---------- ---------- ----------
```
`mouse 5`, `mouse 3`, `mouse 5 1`, `mouse 1 9`

### AutoHotKey integration examples
Serenade can't do some of these commands in 2.0.2, so support from AutoHotKey (windows only) is used.
`shift click`, `ctrl click`, `alt click`, `screen left`, `screen right`

### basic npm and git commands
`git add all`, `git commit`, `npm run dev`, `npm install`

### debugging
`get mouse location`, `get app name`

### Misc basic react/js/chrome commands
`add component`, `add use state`, `add use effect`, `add for loop`

### Some basic discord commands
`show channels`, `go to channel`, `go to server`, `server up`, `go to last unread`

### Youtube commands
`slow down`, `speed up`, `stop`, `play`, `pause`

### Personal preference
in `global.js` file:
Disable `undo` and `redo` in favor of `undo that` and `redo that` to prevent accididental mumbles

## Instructions
clone to your local `~/.serenade/scripts` directory, or pick files/commands you like and copy to that directory. Modify to suit yourself!

## References
https://github.com/ryanpeach/awesome-serenade
https://gist.github.com/epenning/90a69f0a23ce318e9f7515b53e6b4d2e
