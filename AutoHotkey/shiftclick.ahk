; https://www.autohotkey.com/docs/v2/howto/SendKeys.htm
#SingleInstance, Force
SendMode Input
SetWorkingDir, %A_ScriptDir%

Send, {Shift down}{LButton}{Shift up}