@echo off
set VMNAME=RockyLinux10_2_RAW
set OUT=RockyLinux10_2_RAW.ova

echo OVA export: %VMNAME% -^> %OUT%
VBoxManage export "%VMNAME%" --output "%OUT%" --ovf20

if errorlevel 1 (
  echo.
  echo HIBA: az export nem sikerult.
  echo Ellenorizd, hogy a VM neve pontosan %VMNAME% es ki van kapcsolva.
  pause
  exit /b 1
)

echo.
echo Kesz: %OUT%
certutil -hashfile "%OUT%" SHA256
pause
