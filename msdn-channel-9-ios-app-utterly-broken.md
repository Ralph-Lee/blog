<!--{Title:"The MSDN Channel 9 iOS App is Utterly Broken",Description:"This app could be so useful, but is so badly broken.",Tags:["ios","microsoft","channel9"],PublishedOn:"01 Nov 2015"}-->
<style>
img{margin:5px;}
</style>
### A User-Hostile App

<div style="float:right;"><img src="http://i.imgur.com/gBCnsxD.png"  /></div>
I used the [Channel 9 iOS app](https://itunes.apple.com/us/app/microsoft-channel-9/id994423736?mt=8) for a bit, but can't shake its poor implementation. 
It's so badly broken.

### Enter Its Black-Hole. Press Any Menu Button

It's user-hostile because 70% of its features shows you a blank/empty screen with no nav. You're black-holed and forced to quit the app. 

You're better off uninstalling the app and [telling the Channel 9 team](https://twitter.com/ch9) why.

### Not Updated For iPhone 6 

The app isn't complied for larger display iOS devices. This results in:

- the menu bar shows 2x as it should
- the keyboard is much larger than the rest of the OS

The subtle message here is: 

- we're poor stewards of our app. We haven't cared to update this app for devices circa Sep 2014.
- hey user: your experience doesn't matter.

<div style="display:block;">
<img src="http://i.imgur.com/PlXtQNgl.jpg" /><img src="http://i.imgur.com/wfFJ1ocl.jpg" />
</div>

### Black-Hole Blank Pages

I tapped into Featured, and get a blank screen. There was no way to go back. The user must now force quit the app.
The same blank screen + force quit scenario applies to 70% of those menu options. 

What a magnificent fail.

<img src="http://i.imgur.com/H2DNl5cl.jpg" />

### Friction: Add-to-Queue Confirmation is Unnecessary

<img src="http://i.imgur.com/UyTJC7hl.jpg" />

_**YES!** I just tapped the add to queue button. Just f$#%&* do it!_

When you add a video to your queue, you get a popup modal dialog. This is completely unnecessary. 
Modal dialogs are for situations where the choice is/should be difficult to undo, or the impact is large.

If the user taps 'add to queue', then turn the button into 'remove from queue'.

### No Look-Ahead Keyword Search

Don't make me type out my full search token. Look ahead, please.

<img src="http://i.imgur.com/GkAo1vRl.jpg" />

_I'm pretty sure you can tell what I'm searching for here._

### Friction: Force Tap Focus in Search Box 

<img src="http://i.imgur.com/m4DN0nLl.jpg" />

When you tap the magnifying glass icon to search, the search box appears, but the focus/cursor isn't given to the search box.

This forces me to tap into the box, which is friction. I *just* indicated that I wanted to search. The app should put the focus on the textbox and get me searching as fast as possible.

### Case Sensitive Search

Confusing: you get no results for `Sql` or `SQL` on a developer video site, yet lots for `sql`?
Mobile devices typically capitalize the first letter in a textbox for your convenience. 
Don't punish the user for this. The app forces friction on the user to get the search term correct.

<div style="display:block; align:center">
<img src="http://i.imgur.com/Wa6CLfNl.jpg" /><img src="http://i.imgur.com/J1iGDzol.jpg" />
<img src="http://i.imgur.com/oN9E3Hal.png" />
</div>

*Best case:* waste the user's time in guessing how to capitalize my search token.  
<BR>
*Worst case:* make the user think you have no relevant content for `SQL`.


### Search Results WTF

When you correct your search to be all lowercase, the search results are as expected.
The search results count label isn't updated properly.

<img src="http://i.imgur.com/1JnL2Ovl.jpg" />

You cannot search within the Tags screen, regardless of that seemingly convenient-lloking `Search tags` textbox.
The textbox doesn't accept focus.

<img src="http://i.imgur.com/FPVpIRGl.png" />

## What The App Gets Right!

Lest I look like a massive complainer, here's what I love about this app:

- it plays videos
- swipe back navigation
- native AV player
- share works perfectly
- local downloads in the quality I specify - yet this is useless because it black-holes you when you visit your downloads
- video queue
- inline show notes
