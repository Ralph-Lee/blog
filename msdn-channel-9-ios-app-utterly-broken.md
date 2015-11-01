<!--{Title:"The MSDN Channel 9 iOS App is Utterly Broken",Description:"This app could be so useful, but is so badly broken.",Tags:["ios","microsoft","channel9"],PublishedOn:""}-->

### A User-Hostile App
<div style="float:right;"><img src="http://i.imgur.com/gBCnsxD.png"  /></div>
I used the [Channel 9 iOS app](https://itunes.apple.com/us/app/microsoft-channel-9/id994423736?mt=8) for a bit, but can't shake its poor implementation. 
It's so badly broken.

It's user-hostile because 70% of its features shows you a blank/empty screen with no nav. You're black-holed and forced to quit the app. You're better off uninstalling the app and [telling the Channel 9 team](https://twitter.com/ch9) about why.

### Not Updated For iPhone 6 

<img src="http://i.imgur.com/W0h9rwym.jpg" />
<img src="http://i.imgur.com/zSxTcpn.jpg" />

The app isn't complied for larger display iOS devices. This results in:

- the menu bar shows 2x as it should
- the keyboard is much larger than the rest of the OS

The message here is: 

- we're poor stewards of our app. We haven't cared to update this app for devices circa Sep 2014.
- hey user: your experience doesn't matter.

### Black-Hole Blank Pages

I tapped into Featured, and get a blank screen. There was no way to go back. The user must now force quit the app.
The same blank screen + force quit scenario applies to 70% of those menu options. What an magnificent fail.

### Friction: Add-to-Queue Confirmation is Unnecessary

When you add a video to your queue, you get a popup modal dialog. This is completely unnecessary. 
Modal dialogs are for situations where the choice is/should be difficult to undo, or the impact is large.

If the user taps 'add to queue', then turn the button into 'remove from queue'.


### No Look-ahead Keyword Search

Don't make me type out my full search token. Look ahead, please.

### Friction: Force Tap Focus in Search Box 

When you tap the magnifying glass icon to search, the search box appears, but the focus/cursor isn't given to the search box.
This forces me to tap into the box, which is friction. I *just* indicated to you that I wanted to search. You should put the focus on the textbox and get me searching as fast as possible.



### Case Sensitive Search

Confusing: you get no results for `Sql` or 'SQL' on a developer video site, yet lots for `sql`?
Mobile devices typically capitalize the first letter in a textbox for your convenience. 
Don't punish the user for this. The app forces friction on the user to get the search term correct.

Best case: you waste the user's time in guessing how to capitalize my search token.  
<BR>Worst case: you make the user think you have no relevant content for `SQL`.


### Search Results WTF

When you correct your search to be all lowercase, the search results are as expected.
The search results count label isn't updated properly.


## What The App Gets Right!

Lest I look like a massive complainer, here's what I love about this app:

- swipe back navigation
- native AV player
- share works perfectly
- local downloads in the quality I specify - yet useless because it black-holes you when you visit your downloads
- video queue
- inline show notes
