@echo OFF
set file1=%1
set file2=%2

fc %file1% %file2% > nul
if errorlevel 1 goto :fail
if errorlevel 0 goto :pass
if errorlevel 2 goto :fileNotFound
goto :done

:pass
echo Both files are identical.
goto :done

:fail
echo Create folder in source and move temp unmached test file to new source folder 
goto :done

:fileNotFound
echo At least one of the files can’t be found.
goto :done

:done
echo File comparison is done.