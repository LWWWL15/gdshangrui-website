@echo off
REM dev-launcher.bat — invoked by Windows Task Scheduler.
REM Spawns vite dev fully detached from any parent shell.

cd /d D:\Qclaw\gdshangrui

"C:\Program Files\nodejs\node.exe" "C:\Program Files\nodejs\node_modules\npm\bin\npm-cli.js" run dev >> "D:\Qclaw\gdshangrui\dev.log" 2>&1