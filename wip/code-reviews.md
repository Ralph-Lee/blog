<!--{Title:"",Intro:"",PublishedOn:""}-->

I attended a user group recently, and a bunch of .NET developers were sharing stories about code reviews at their workplaces. The group had a few good experiences to share, but a lot of common complaints or shared negative experiences.
I've recently read articles and watched a few videos dealing with [approaches to improve your code reviews.](#better)

#### too little structure

Before you enter a code review, do you have a mental picture of how the session will unfold, or a sense of the general steps you'll go through? Will you be asking and taking questions throughout the session, or will questions be saved until the end? Who's driving the keyboard and mouse? Will there be a handoff at some point? Am I expected to give criticisms as an attendee or just sit and be mildly entertained with tales of changed requirements midstream?

Avoid this by setting guidelines beforehand. Suzie will start by giving a 5 minute high level intro to the solution for anyone unaware of the app, she'll be presenting her code for 30 minutes and allow questions. She' People react better when expectations are set in advance, and there aren't surprises. First timers will be put at ease if this is all known up front.

An idea worth exploring: if there are many members of the team, get them engaged. Write an important focus or concern on a square of paper. This could be things like: consistency, readability, resource management, visual look and feel, security, etc. Put all slips of paper in a hat, and everybody draws randomly one slip of paper. That gives each attendee a point of view or a focus to view this code review in today. This helps avoid the scenario where someone has a pet peeve (or dead horse) and the code review is a great place to exercise that peeve.


#### no goals



#### chest thumping / territory marking



#### no follow-up



#### too infrequent



#### one-way conversations


#### Focus On Irrelevant/Religion

var
tabs spaces
curly braces on 

Most of this stuff doesn't matter. The compiler doesn't care, obviously, but *n* programmers do. The solution is easy: write it how you like it. Configure your IDE how you like it. Let STyle

<a name="better"/>
### Code Review Better

1. Here's Enrico Campidoglio's presentation on code reviews at NDC Oslo 2104. I liked the mention of trust in the team.

<iframe src="//player.vimeo.com/video/97505680" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> <p><a href="http://vimeo.com/97505680">Enrico Campidoglio - Why no code reviews?</a> from <a href="http://vimeo.com/ndcoslo">NDC Conferences</a> on <a href="https://vimeo.com">Vimeo</a>.</p>


1. [Erik Dietrich](https://twitter.com/daedtech) has a great post on code reviews- [Code Reviews Should Be about Incremental Improvement](http://www.daedtech.com/code-reviews-should-be-about-incremental-improvement). My takeaway was that you don't need to hit a home run on your code reviews. Review within your team more frequently, and you'll improve subtly in tiny steps.
