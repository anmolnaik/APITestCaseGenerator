@echo OFF
cd D:\OpenAPI_GitReporitory

setlocal enableDelayedExpansion
set /a ID=1

for /f "delims=" %%A in ('dir /s /b .\test\APITestCases ') do (
    set fileLocation[!ID!]=%%~dpA
	set fileName[!ID!]=%%~nxA
     set /a ID+=1	
)

set fileLocation
set fileName

set /a tempID=1

for /f "delims=" %%A in ('dir /s /b .\test\temp ') do (
    set tempfileLocation[!tempID!]=%%~dpA
	set tempfileName[!tempID!]=%%~nxA
     set /a tempID+=1	
)
set tempfileLocation
set tempfileName

for /L %%i in (1,1,%ID%) do (
	 Rem echo !fileLocation[%%i]!!fileName[%%i]!
	
		for /L %%j in (1,1,%tempID%) do (
		Rem echo !tempfileLocation[%%j]!!tempFilename[%%j]!
			
			if !fileName[%%i]!==!tempFilename[%%j]! (
				echo "Match Found"
				cd D:\OpenAPI_GitReporitory\BatchFiles\
				call FileComparitor.bat !fileLocation[%%i]!!fileName[%%i]! !tempfileLocation[%%j]!!tempFilename[%%j]!
				cd D:\OpenAPI_GitReporitory
			) else (
				Rem echo "Match Not Found"
			) 				
		)
)

endlocal
