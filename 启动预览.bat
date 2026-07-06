@echo off
chcp 65001 >nul
cd /d "%~dp0"

set "NODE_EXE=C:\Program Files\nodejs\node.exe"
if not exist "%NODE_EXE%" set "NODE_EXE=node"

echo Starting portfolio preview...
echo URL: http://127.0.0.1:5173
echo.
echo Keep this window open while viewing the site.
echo.
start "" "http://127.0.0.1:5173"
"%NODE_EXE%" ".\node_modules\vite\bin\vite.js" --host 127.0.0.1 --port 5173
pause
