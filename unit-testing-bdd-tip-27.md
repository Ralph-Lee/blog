<!--{Title:"Unit Testing & BDD Tip #27", PublishedOn:"2009-12-04T04:56:42", Intro:"Today I found myself listening to the ASP.NET Coding QA Podcast Episode 27 today. This podcast addre"} -->

<span>
  <p>Today I found myself listening to the <a href="http://www.codingqa.com/index.php?post_id=543842">ASP.NET Coding QA Podcast Episode 27</a> today. This podcast addressed unit testing with guest <a href="http://bradwilson.typepad.com/">Brad Wilson</a>. The discussion was targeted to developers, I felt, and covered some great points. Here are what I felt are the highlights, or were important enough to highlight here.</p>
  <p>Make Methods Small</p>
  <p>Probably every developer. One of my peeves when I read others' code is that the methods are either too long or do too many things. Nobody's perfect, and it's a constant struggle to keep your methods tight. Testing those monolith methods are difficult/nigh impossible because they hold too much logic/dependency/side-effects. It's a </p>
  <p>T</p>
  <p>Arrange,Act,Assert</p>
  <p>This pattern serves well to keep your unit test methods concise, precise and single-purpose. When arranging, consider refactoring out your setup code. If you're creating a Customer object to pass to a unit test, make yourself</p>
</span>