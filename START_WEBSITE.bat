@echo off
title Professor Website Launcher

echo Starting website...
echo.

where node >nul 2>nul
IF %ERRORLEVEL% NEQ 0 (
    echo Node.js is not installed.
    echo Please install Node.js from:
    echo https://nodejs.org
    pause
    exit
)

IF NOT EXIST node_modules (
    echo Installing dependencies for first time...
    call npm install
)

echo.
echo Launching development server...
echo.

start http://localhost:3000
call npm run dev

pause
