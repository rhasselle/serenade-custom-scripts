; https://www.autohotkey.com/docs/v2/howto/SendKeys.htm
#SingleInstance, Force
SendMode Input
SetWorkingDir, %A_ScriptDir%

Send, {LWin down}{Shift down}{Right down}{Right up}{Shift up}{LWin up}