@echo off
set thismins=%1
set /A thistime=%thismins% * 60
timeout %thistime% && start cmd /C pause