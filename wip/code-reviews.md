<!--{Title:"Code Reviews: Pain Points And Some Solutions", Intro:"Code review more. Be nice. Level up together. Videos and more good reading at the bottom.", PublishedOn:"08 Jul 2014"}-->

I attended a user group recently, and a bunch of .NET developers were sharing stories about code reviews at their workplaces. The group had a few good experiences to share, but a lot of common complaints or shared negative experiences.
The discussion was around the longer formal code reviews, and the team dynamics that are exposed within the review.

Following these bad experiences are a few [approaches to improve your code reviews.](#better)

#### Too Little Structure

Before you enter a code review, do you have a mental picture of how the session will unfold, or a sense of the general steps you'll go through? Will you be asking and taking questions throughout the session, or will questions be saved until the end? Who's driving the keyboard and mouse? Will there be a handoff at some point? Am I expected to give criticisms as an attendee or just sit and be mildly entertained with tales of changed requirements midstream?

Avoid this by setting guidelines beforehand. Suzie will:

- start by giving a 5 minute high level intro to the solution for anyone unaware of the app, 
- be presenting her code for 30 minutes and allow questions. She'll answer in-line or defer to later.
- she'll take other questions when the walk through is finished.

People react better when expectations are set in advance, and there aren't surprises. First timers will be put at ease if this is all known up front.

An idea worth exploring: if there are many members of the team, get them engaged. Write an important focus or concern on a square of paper. This could be things like: consistency, readability, resource management, visual look and feel, security, etc. Put all slips of paper in a hat, and everybody draws randomly one slip of paper. That gives each attendee a point of view or a focus to view this code review in today. This helps avoid the scenario where someone has a pet peeve (or dead horse) and the code review is a great place to exercise that peeve.


#### No Goals

What are we even here for? It's great that we got into the meeting room with the glass table and all, but what's the end goal? Why are we here [meeting about this solution's code](http://stackoverflow.com/q/968406/23199)?  Is it:

- an initial design review? 
- an introduction about the code/project that Bob's been working on, and is about to go into production? 
- a defect-finding review?
- just look at how Bob writes code as an FYI?
- that we should all get familiar with this code so that we can support it in the future?


Beforehand, the team together should all put in the 2 things they want to get out of the code review. Jason might like reading others' code in order to learn, whereas Jenny is new to the team, and wants to see the interactions of the team. The dev lead might want to ensure things aren't off the rails (but dev lead guy, it's too late for that). 

Compile the list of goals, collate, and sort by popularity, and discuss all the goals submitted. There aren't any wrong answers, but the most common goals should be used and agreed upon. Do it by paper, Excel, email, SurveyMonkey, whatever.


#### Chest Thumping / Territory Marking

Someone in the group shared that they were on a team where the dev lead was fairly new to the role, and was using the code review as a way to influence *my way* into the team's culture and practices. There were phrases used like "that's wrong", or "I don't think that's how we wanna do that" or "I'm using executive decision on this, it needs to be changed to something else".

This is a tough one because in the case of a dev lead, the team members individually really aren't in a position to push back against this behaviour. The only thing they can do is collectively stand up and protest together. 


#### Too Infrequent

If a team's code reviews are rare, expectations will be out of sync, and team members will be out of practice. All kinds of impacts are possible: doubt, fear, disconnection. 

- Doubt that the code review means anything - it's so rare and outside of my normal routine that it's baiscally a novelty that will pass.

- Fear that I'm about to go up to a big scary review board where I'll be judged.

- Disconnection between the team members. "I'm not really sure what Sally is doing. I've not seen anything she's worked on in a year."

Poll the team: how often would you like your code reviewed, and how often would you like to review others? Maintain a *more regular* schedule of reading others' code and everyone will be leveling up incrementally together. The frequency should align back to the team's goals.


#### One-Way Conversations

One member of the group told a story about an [Expert Beginner](http://www.daedtech.com/how-developers-stop-learning-rise-of-the-expert-beginner) type who ran a "code review". The air quotes are deserved as the review turned out to be a meeting whereby the reviewer had previously reviewed the code and had come armed and prepared with a list of items to fix. The review was an hour of items that needed 'correcting', as the items had contravined the documented coding conventions (missing hungarian prefixing, namespacing, JavaScript file naming conventions, etc) and the reviewer's personal choices. The reviewer took the team on a tour of all the low points that needed fixing to come into compliance. There were no chances for discussion by the team. The team members each got bugs filed in their names to be fixed quickly thereafter.

#### No Follow-up

If any action items are created as a result of the code review, when will those items be expected for completion? Exactly who will be researching the benefits of `yield return`, and who will be presenting that at the next lunch-and-learn? The concrete follow-up will be less likely to occur if we simply say "we should all research the foo pattern for the future".

Commit to it - give dev team members deliverables with a reasonable timeline. Follow up in the next regular code review, or in a stand-up, in a lunch session, etc. Make a calendar item for it to occur.


#### Focus On Irrelevant/Religion

- tabs vs. spaces
- type inference / var in C#
- [curly braces placement](http://blogs.msdn.com/b/danielfe/archive/2003/11/24/51893.aspx)

Most of this stuff doesn't matter. It ends up dividing people and it's just not worth it. The compiler doesn't care, obviously, but programmers do. 

Remember that [you are not your code](http://www.hanselman.com/blog/YouAreNotYourCode.aspx). Configure your IDE how you like it. Use automated tools to check and correct conventions. Use an automated tool at commit to have the conform to one way.

Set expectations beforehand: we're not talking about these *n* religious issues. Don't bring it up. Maybe if you bring it up, you're on the hook for donuts or something. You'll be reminded by everyone else that it's not up for discussion here. We're here to achieve the goals we all agreed on, and not be mired in these back and forths *ad infinitum*.

<a name="better"/>
### Code Review Better

1. Here's Enrico Campidoglio's presentation on code reviews at NDC Oslo 2104. I liked the mention of trust in the team.
At around 15:00 he talks about differnet kinds of code reviews: formal (scary and time-consuming), over-the-shoulder (informal walkthroughs), and async reviews.

<iframe src="//player.vimeo.com/video/97505680" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> <p><a href="http://vimeo.com/97505680">Enrico Campidoglio - Why no code reviews?</a> from <a href="http://vimeo.com/ndcoslo">NDC Conferences</a> on <a href="https://vimeo.com">Vimeo</a>.</p>


1. [Erik Dietrich](https://twitter.com/daedtech) has a great post on code reviews- [Code Reviews Should Be about Incremental Improvement](http://www.daedtech.com/code-reviews-should-be-about-incremental-improvement). My takeaway was that you don't need to hit a home run on your code reviews. Review within your team more frequently, and you'll improve subtly in tiny steps.
