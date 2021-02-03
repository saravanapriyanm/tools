# tools

#### Contains simple batch(among others) scripts for some quick actions.

-----------------------------

To use these tools, 
1. Clone the repo
2. Add the folder path( Ex: D:\priyan\tools\ ) to PATH of system environment variables.

------------------------------

### timer.bat
Runs a timeout until given minutes and pops up a cmd window (as notification).
__Ex:__
```
timer 25
```
Me: Using this as a pomodoro timer.

------------------------------

### wlog.bat
Appends the given text to a file with year name inside worklog folder.
__Ex:__
```
wlog "Hello world"
```
Me: Using this as a quick log for work.

------------------------------

### repl.bat with repl.js
Runs node.js' REPL console with custom prompt.
__Run using:__
```
repl
```
Once inside REPL, can write JS statements for output
__Ex:__
```
Math.ceil(789/3)
```
Me: Using this as a calculator.
