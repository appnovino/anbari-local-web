@echo off
cd /d "%~dp0"
node tools\build-local-web.mjs
if errorlevel 1 exit /b 1
python tools\serve-web.py --port 5173
