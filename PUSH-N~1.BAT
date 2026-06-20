@echo off
REM ============================================================
REM  Push projekta na GitHub  (Windows)
REM  Upotreba:
REM    1) Napravi prazan repo na github.com (bez README/licence)
REM    2) Dvoklik na ovaj fajl, ili pokreni iz cmd-a:
REM         push-na-github.bat https://github.com/<korisnik>/<repo>.git
REM ============================================================

setlocal
cd /d "%~dp0"

set REPO=%1
if "%REPO%"=="" (
  set /p REPO="Zalijepi URL repozitorija (npr. https://github.com/korisnik/repo.git): "
)

echo.
echo == Ciscenje starog .git foldera (ako postoji) ==
if exist ".git" rmdir /s /q ".git"

echo == Inicijalizacija ==
git init
git add -A
git commit -m "Prvi commit: portal masonskih tijela (Royal Arch, Kripta, Templari)"
git branch -M main
git remote add origin %REPO%

echo.
echo == Push (trazice GitHub login/token) ==
git push -u origin main

echo.
echo Gotovo. Zatim na GitHub-u: Settings ^> Pages ^> Source: GitHub Actions
pause
