@echo off
echo %date:~6,4%-%date:~3,2%-%date:~0,2% -- %time:~0,5% -- %1 >> %~dp0worklog\%date:~6,4%.txt
pause