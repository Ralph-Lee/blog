<!--{PublishedOn:"25 Aug 2014",Title:"Create A Windows Shortcut To Run As a Different Domain User",Intro:"I frequently need to run SSMS as a different domain user. Here's how to create a shortcut to run an application under different Active Directory credentials."}-->

<style>img{border:solid 1px black;}</style>
Sometimes I need to connect to SQL Server using Active Directory credentials using my admin account. I use my dev machine with my regular AD account. I found it turned into real first-world dev problem that took too many clicks to run SQL Server Management Studio (SSMS) under the credentials of another AD account. The whole reason for this is that some SQL Server deployments are configured to allow developer admin accounts only, a practice I definitely agree with (make it harder to screw things up). I want to make it a little easier, though. Here's how I was doing it:

1.   Right click SSMS
1.   Shift-right click SSMS
1.   Choose Run As Different User
1.   Type the username 
1.   Type the password
1.   Mutter "[There's got to be a better way](http://i.giflike.com/TqPgN2U.gif)" 

![this has got to be automated](http://i.imgur.com/lIBR4Cq.png)

### Creating A Shortcut With Run As Different User

This will work for any executable. This will create a shortcut that will run the application under the account you specify. This cuts the number of clicks/steps down from 5 to 1.

1. Create a new shortcut anywhere.
2. [`runas /user:myDomain\myAdminAccount "C:\windows\notepad.exe"`](http://i.imgur.com/YqYZoyn.png)
3. Give it a good name.

Now when you execute the shortcut, you're prompted for the password of the account you specified.

![](http://i.imgur.com/eakeicq.png)


### Creating A Custom Icon For Your Shortcut

1. Find or make a decent png/jpg. Make it square. 
2. Upload to http://www.converticon.com/
3. [Include all the sizes.](http://i.imgur.com/3MAxw58.png)
4. Save As will then download a new .ico file
5. [Right-click -> Properties on the shortcut and Change Icon to this new icon set](http://i.imgur.com/mxdTuMZ.png).
6. Drag it to your Windows taskbar

![](http://i.imgur.com/SVsimnO.png)