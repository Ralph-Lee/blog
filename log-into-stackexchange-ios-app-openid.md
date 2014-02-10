<!--{Title:"Log Into The StackExchange iPhone App Using Your StackExchange OpenID Credentials", PublishedOn:"Feb 10 2014", Intro:"The option to use StackExchange as an OpenID provider is curiously missing, and wasn't obvious in how to use your SE OpenID "}-->
<style>
table{  margin-left:auto;    margin-right:auto;}
table.imgholder2 tr td{width:50%; text-align:center; vertical-align:top;}
</style>
<img src="http://i.imgur.com/dKsdDJ2.png" style="float:right"/>
StackExchange recently launched their iOS app in alpha testing. There was a call for alpha testers, and I jumped at the chance. The app was released for iPhone only; it's not a universal iOS app, the iPad shows it in iPhone mode.

My account is an OpenID account, and not with the primary authentication providers (Google, Facebook). StackOverflow was exclusively OpenID when it launched, and I didn't bother changing my auth provider or tie it with any of those others.

###Logging In With Your StackExchange OpenID Account###

The iOS application was launched in Alpha recently, and you need to log in obviously, to use your account. Featured prominently are what likely are SE's 2 biggest auth providers, Google and Facebook. Bones are thrown to all the other providers via OpenID.

In the OpenID section, all the various and sundry OpenID providers are listed, **except StackExchange**. Sigh - alright, I guess they consider themselves an 'other' and I'll use the *Manual* option.

<table class="imgholder2">
<tr>
<td><a href="http://i.imgur.com/SRalJ62.png"><img src="http://i.imgur.com/SRalJ62m.png"/></a></td>
<td><a href="http://i.imgur.com/5zpdmHr.png"><img src="http://i.imgur.com/5zpdmHrm.png"/></a></td>
</tr>
</table>

<div style="clear:both"/>

###Confusing Dialog For Manual OpenID###

I wasn't really sure what this dialog was asking: `Log in with any OpenId`. OpenId *what*? Account? Provider?
If provider, when what's the format of what you need? Give me an example or hints, please!

Turns out, it needs to be in format **`openid.stackexchange.com`**. So basically you have to type or paste that into that dialog box. SE Dev Team, just make StackExchange an option in your [login options](http://i.imgur.com/5zpdmHrm.png) page.
Then you can move onto entering your SE OpenID credentials.

<table class="imgholder2">
<tr>
<td><img src="http://i.imgur.com/c2Tsljpl.png"/></td>
<td><img src="http://i.imgur.com/YYxHWB8l.png" /></td>
</tr>
</table>

<div style="clear:both"/>

###Nice UI###

<img src="http://i.imgur.com/4wPP5O7l.png" style="float:right"/>

Once that small hurdle was jumped, the app works really well for an alpha.
The main feed is the main StackExchange feed, which shows you an interesting mix of questions from all over the SE network. You can navigate use the top left button to a sidebar, where you can jump to other sites (conveniently sorting your most active SE sites to the top).

[There are banner ads in the main feed](http://i.imgur.com/I5cTCs9l.png), but not in others (I didn't find that Careers 2.0 banner in the SO feed, for example).

The mailbox icon on the top right takes you, naturally to your [inbox of answers and comments](http://i.imgur.com/IO7QQxNl.png).

When you're in the list, you can [tap on a tag, and browse that tag's feed](http://i.imgur.com/tfzX5sul.png). Excellent feature.





