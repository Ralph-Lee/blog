<!--{Title:"Rename Multiple Files To Remove a Substring", PublishedOn:"Dec 6 2013", Intro:"SSMS scripts out "StoredProcedure" in file names. Here's how to remove a substring in many files in a directory with one line of PowerShell."} -->

Use this PowerShell command to rename all the files in the directory to remove the "StoredProcedure" substring. This substring showed up for me when SQL Server Management Studio's Generate Scripts utility wrote the files out to disk. The same suffix is present when scripting out other objects - `View`, `Table`, etc.
 
![](img/batch-rename-files.png)

###Remove Filename Substrings With PowerShell###
Open a command prompt, navigate to the directory your files are in, and run this one-liner to remove those substrings.
```
PowerShell
Dir *.StoredProcedure.sql | rename-item -newname { $_.name  -replace ".StoredProcedure","" }
```

![](img/batch-rename-files-console.png)

Hat tip to [Steve's article on Tweaks.com](http://tweaks.com/windows/49459/batch-file-rename-with-windows-powershell/)