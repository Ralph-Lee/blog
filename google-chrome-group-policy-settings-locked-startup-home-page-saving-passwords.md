<!--{Title:"Windows Group Policy Annoyances: Locking Google Chrome Startup Pages and Password Saving",Intro:"You might find your Windows machine's Chrome settings set and locked by Windows Group Policy.",PublishedOn:"13-Apr-2015", Tags:["google-chrome","group-policy","registry","windows"]} -->

![](http://i.imgur.com/oUSrnwC.png)

### Chrome in the Enterprise

Happy to see that Chrome is being *allowed* or blessed by the IT Overlords. They even allow Chrome to update itself! Amazing!
The issue is that the geniuses in IT think they know the best settings for everyone. [Mooooove!](http://i.imgur.com/L5iCone.jpg)

### That's Our Policy 

I am not complaining here about group policy settings themselves. The issues is that those settings are chosen without consideration to users, and locked without override by the user.

#### Pages

There's a handul of  Group Policies for Chrome settings:

- *startup pages*: which URLs should load on browser startup.
- *home button*: whether the home button appears to the left of the address bar.
- *bookmark bar*: whether the bookmark bar can be hidden from underneath the address bar.

<!-- break -->
![](http://i.imgur.com/U2ngOt5.png)

Additionally, the group policy setting can set and lock the URL that the Home button will load.

![](http://i.imgur.com/7a6d8ny.png)

#### Passwords

A group policy setting can force Chrome to offer the user to save the credentials in Chrome's credential store.

![](http://i.imgur.com/JynVU24.jpg)

Locking this setting is annoying. <em>I already have a <a href="https://www.lastpass.com">password manager</a></em> that manages this functionality for me. For those who don't use a password manager, this is setting/suggestion is benefical. 

The result is a constant nag everytime you authenticate with a new site.

![](http://i.imgur.com/8mi9A7H.png)

I cannot find a reason that an IT admin would choose to *lock* this functionality to save. It seems to be a reasonable suggestion as a default setting. The locking users into nag screens is the problem.
