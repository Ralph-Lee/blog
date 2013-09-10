<!--{Title:"Hunting the StackOverflow 'Unsung Hero' Badge", PublishedOn:"2010-08-20T07:17:24", Intro:"Find the StackOverflow questions best suited for you to get the Unsung Hero badge        Recently I'"} -->



<a title="http://odata.stackexchange.com/stackoverflow/s/456/unsung-hero-hunter" href="http://odata.stackexchange.com/stackoverflow/s/456/uFind the StackOverflow questions best suited for you to get the Unsung Hero badge">
      <font size="4">Find the StackOverflow questions best suited for you to get the Unsung Hero badge
</a>

Recently I've been hearing lots regarding the StackOverflow badge 'Unsung Hero'. Its formal description is:
  <blockquote>
  Zero score accepted answers: more than 10 and 25% of total<a href="http://devtxt.com/blog/image.axd?picture=zero.png"><img style="border-bottom: 0px; border-left: 0px; display: inline; border-top: 0px; border-right: 0px" class="wlDisabledImage" title="zero" border="0" alt="zero" align="right" src="http://devtxt.com/blog/image.axd?picture=zero_thumb.png" width="34" height="114" /></a>
  </blockquote>
So this means, in my estimation:

* the earlier in your answering you can get this, the better, or less # accepted answers required. Those with large numbers of accepted answers may be in for a long ride.
* you'll need to find a way to answer people's questions, and avoid an upvote for your answer.

###The Badge###
I'm not sure how useful this badge is for StackOverflow. I like being awarded SO badges, who doesn't?

<img style="border-bottom: 0px; border-left: 0px; display: block; float: none; margin-left: auto; border-top: 0px; margin-right: auto; border-right: 0px" class="wlDisabledImage" title="unsung" border="0" alt="unsung" src="http://devtxt.com/blog/image.axd?picture=unsung.png" width="488" height="54" />

How does this happen – answers accepted without upvotes? Does that mean it's a technically correct answer, but smells bad enough that it's not worthy of an upvote? Perhaps the answer was rude? I don't get it.
The <a href="http://blog.stackoverflow.com/2010/07/improvements-to-badge-system/">desirable behaviour</a> – answering lots of questions for newbies.
###How Unsung Are You?###
You can see what your progress is on the Unsung Hero badge by using this "<a href="http://odata.stackexchange.com/stackoverflow/s/345/how-unsung-am-i">How Unsung Am I</a>" query on the <a href="http://odata.stackexchange.com/stackoverflow/queries">StackOverflow Odata site</a>. You'll simply need your StackOverflow UserID. Easy to find – just look at the URL when you hit your profile page.

<a title="http://odata.stackexchange.com/stackoverflow/s/345/how-unsung-am-i" href="http://odata.stackexchange.com/stackoverflow/s/345/how-unsung-am-i">
      <font size="4">http://odata.stackexchange.com/stackoverflow/s/345/how-unsung-am-i
</a>

  <p align="left">
###The Solution to Getting Unsung Hero###
Take this query for a spin. I've written this query to determine the question that you're best suited to answer in order to help gain this Unsung Hero badge. The query finds unanswered questions:

* written by people with low reputation (<15). Their reputation is such that they can't upvote your answer, but can only accept it.
* users who recently re-visited StackOverflow
* tagged with tags that you actively ask and answer in. Your top 25 tags.
* with a small number of answers already given. The less answers = a better chance for you to give a great answer.

  <a title="http://odata.stackexchange.com/stackoverflow/s/456/unsung-hero-hunter" href="http://odata.stackexchange.com/stackoverflow/s/456/unsung-hero-hunter">
    <font size="4">http://odata.stackexchange.com/stackoverflow/s/456/unsung-hero-hunter
  </a>
Enjoy! Remember – the Odata StackOverflow is working with the <a href="http://blog.stackoverflow.com/category/cc-wiki-dump/">most recent StackOverflow data dump</a> – it could be up to 30 days old.