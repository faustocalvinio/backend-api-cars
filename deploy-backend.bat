@echo off
REM Start Docker containers in detached mode
docker compose up -d

REM Run the development server
npm run dev