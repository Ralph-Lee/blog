<!--Title:"Hunting the StackOverflow Badge named Unsung Hero", PublishedOn:"2010-08-20T07:17:24", Intro:"Find the StackOverflow questions best suited for you to get the Unsung Hero badge        Recently I'" -->

<span>
  <p>
    <a title="http://odata.stackexchange.com/stackoverflow/s/456/unsung-hero-hunter" href="http://odata.stackexchange.com/stackoverflow/s/456/uFind the StackOverflow questions best suited for you to get the Unsung Hero badge">
      <font size="4">Find the StackOverflow questions best suited for you to get the Unsung Hero badge</font>
    </a>
  </p>
  <p>Recently I've been hearing lots regarding the new-ish StackOverflow badge "Unsung Hero". Its formal description is:</p>
  <blockquote>
    <p>Zero score accepted answers: more than 10 and 25% of total<a href="http://devtxt.com/blog/image.axd?picture=zero.png"><img style="border-bottom: 0px; border-left: 0px; display: inline; border-top: 0px; border-right: 0px" class="wlDisabledImage" title="zero" border="0" alt="zero" align="right" src="http://devtxt.com/blog/image.axd?picture=zero_thumb.png" width="34" height="114" /></a></p>
  </blockquote>
  <p>So this means, in my estimation:</p>
  <ul>
    <li>the earlier in your answering you can get this, the better, or less # accepted answers required. Those with large numbers of accepted answers may be in for a long ride.</li>
    <li>you'll need to find a way to answer people's questions, and avoid an upvote for your answer.</li>
  </ul>
  <h2>The Badge</h2>
  <p>I'm not sure how useful this badge is for StackOverflow. I like being awarded SO badges, who doesn't?</p>
  <p>
    <img style="border-bottom: 0px; border-left: 0px; display: block; float: none; margin-left: auto; border-top: 0px; margin-right: auto; border-right: 0px" class="wlDisabledImage" title="unsung" border="0" alt="unsung" src="http://devtxt.com/blog/image.axd?picture=unsung.png" width="488" height="54" />
  </p>
  <p>How does this happen – answers accepted without upvotes? Does that mean it's a technically correct answer, but smells bad enough that it's not worthy of an upvote? Perhaps the answer was rude? I don't get it.</p>
  <p>The <a href="http://blog.stackoverflow.com/2010/07/improvements-to-badge-system/">desirable behaviour</a> – answering lots of questions for newbies.</p>
  <h2>How Unsung Are You?</h2>
  <p>You can see what your progress is on the Unsung Hero badge by using this "<a href="http://odata.stackexchange.com/stackoverflow/s/345/how-unsung-am-i">How Unsung Am I</a>" query on the <a href="http://odata.stackexchange.com/stackoverflow/queries">StackOverflow Odata site</a>. You'll simply need your StackOverflow UserID. Easy to find – just look at the URL when you hit your profile page.</p>
  <p>
    <a title="http://odata.stackexchange.com/stackoverflow/s/345/how-unsung-am-i" href="http://odata.stackexchange.com/stackoverflow/s/345/how-unsung-am-i">
      <font size="4">http://odata.stackexchange.com/stackoverflow/s/345/how-unsung-am-i</font>
    </a>
  </p>
  <p align="left"></p>
  <h2>The Solution to Getting Unsung Hero</h2>
  <p>Take this query for a spin. I've written this query to determine the question that you're best suited to answer in order to help gain this Unsung Hero badge. The query finds unanswered questions:</p>
  <ul>
    <li>written by people with low reputation (&lt;15). Their reputation is such that they can't upvote your answer, but can only accept it.</li>
    <li>users who recently re-visited StackOverflow</li>
    <li>tagged with tags that you actively ask and answer in. Your top 25 tags.</li>
    <li>with a small number of answers already given. The less answers = a better chance for you to give a great answer.</li>
  </ul>
  <a title="http://odata.stackexchange.com/stackoverflow/s/456/unsung-hero-hunter" href="http://odata.stackexchange.com/stackoverflow/s/456/unsung-hero-hunter">
    <font size="4">http://odata.stackexchange.com/stackoverflow/s/456/unsung-hero-hunter</font>
  </a>
  <p>Enjoy!</p> Remember – the Odata StackOverflow is working with the <a href="http://blog.stackoverflow.com/category/cc-wiki-dump/">most recent StackOverflow data dump</a> – it could be up to 30 days old.</span>