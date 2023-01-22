; https://www.autohotkey.com/docs/v2/howto/SendKeys.htm
#SingleInstance, Force
SendMode Input
SetWorkingDir, %A_ScriptDir%

Send, {LWin down}{Shift down}{Left down}{Left up}{Shift up}{LWin up}