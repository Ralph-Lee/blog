<!--Title:"Don’t Micromanage Your Latte (Start Outsourcing Your Loops)", PublishedOn:"2010-01-12T01:02:11", Intro:"Consider your behaviour and desires as a customer when you visit:          a) your favourite local c" -->

<span>
  <p>Consider your behaviour and desires as a customer when you visit:    <br /></p>
  <p>
    <strong>a)</strong> your <a href="http://blenz.com/">favourite local coffee shop</a> - you specify <strong>what you'd like</strong>, rather than how it's made. You care about the outcome, but rarely care about the process/sequences/steps that are followed as it's being constructed.     <br /><strong>b)</strong> a Subway/Quiznos shop - you care equally about the outcome and the construction. Meats, veggies, bread type, order of placement of each, precise amount of mustard, pickles, etc.</p>
  <p>
    <a href="http://devtxt.com/blog/blogimg/DontMicromanageYourLatteStartOutsourcing_E179/barista.png">
      <img style="border-right-width: 0px; margin: 0px 0px 0px 15px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px" title="barista" border="0" alt="barista" align="right" src="http://devtxt.com/blog/blogimg/DontMicromanageYourLatteStartOutsourcing_E179/barista_thumb.png" width="304" height="204" />
    </a>The difference here is: you aren't instructing the coffee barista on how to steam the milk, or when to start brewing the espresso. You don't remind them that their level of ground beans is getting low, or where to store the milk. You are happy to assume they know their job best, and order of operations is properly under their control. They have their efficiencies to care about, and you're happy to let them manage that. </p>
  <p>Consider now your desires as a programmer when your task is to find customers with a condition. Let's say we want to use this contrived example:</p>
  <p>
    <font color="#0000ff">
      <strong>Find the customers whose account balance owing is over $5,000. Find the youngest customer in that set.</strong>
    </font>
    <br />
  </p>
  <h2>The Sandwich Model of Algorithms </h2>
  <div style="border-bottom: silver 1px solid; text-align: left; border-left: silver 1px solid; padding-bottom: 4px; line-height: 12pt; background-color: #f4f4f4; margin: 20px 0px 10px; padding-left: 4px; width: 97.5%; padding-right: 4px; font-family: consolas, &amp;#39;Courier New&amp;#39;, courier, monospace; direction: ltr; font-size: 8pt; border-top: silver 1px solid; cursor: text; border-right: silver 1px solid; padding-top: 4px" id="codeSnippetWrapper">
    <pre style="border-bottom-style: none; text-align: left; padding-bottom: 0px; line-height: 12pt; border-right-style: none; background-color: #f4f4f4; margin: 0em; padding-left: 0px; width: 100%; padding-right: 0px; font-family: consolas, &amp;#39;Courier New&amp;#39;, courier, monospace; direction: ltr; border-top-style: none; color: black; font-size: 8pt; border-left-style: none; padding-top: 0px" id="codeSnippet">
      <span style="color: #008000">//find all customers with the appropriate account balance</span>
      <br />var owingOver5000 = <span style="color: #0000ff">new</span> List&lt;Customer&gt;();<br /><span style="color: #0000ff">foreach</span> (Customer c <span style="color: #0000ff">in</span> myCustomers)<br />{<br /><span style="color: #0000ff">if</span> (c.TotalAmountOwing &gt; 5000)<br />  {<br />    owingOver5000.Add(c);<br />  }<br />} <br /><br />var youngestCust;<br />DateTime youngestBirthdate=<span style="color: #0000ff">null</span>; <br /><br /><span style="color: #0000ff">foreach</span>(Customer c <span style="color: #0000ff">in</span> owingOver5000)<br />{<br /><span style="color: #008000">//initialize on the first go-round; many ways to do this.</span><br /><span style="color: #0000ff">if</span> (youngestBirthdate==<span style="color: #0000ff">null</span>)<br />  {<br />      youngestBirthdate=c.BirthDate;<br />  } <br /><br /><span style="color: #008000">//find the youngest by their age</span><br /><span style="color: #0000ff">if</span> (c.Birthdate &lt; youngestBirthdate) <span style="color: #008000">//pretend nobody has the same birthdate ;)</span><br />  {<br />    youngestCust = c;<br />  }<br />}<br /><span style="color: #008000">//you now have youngestCust populated (in most cases) </span><br /><br /></pre>
    <br />
  </div>
  <p>Very fine-grain operations are explicitly laid out by the developer, and execution path follows exactly what the developer wrote. Defects and all! The number of defects is up to you! </p>
  <h2>The Coffee Shop Model of Algorithms </h2>
  <p>Consider now the Coffee Shop model of this algorithm. We'll use LINQ. </p>
  <div style="border-bottom: silver 1px solid; text-align: left; border-left: silver 1px solid; padding-bottom: 4px; line-height: 12pt; background-color: #f4f4f4; margin: 20px 0px 10px; padding-left: 4px; width: 97.5%; padding-right: 4px; font-family: consolas, &amp;#39;Courier New&amp;#39;, courier, monospace; direction: ltr; max-height: 200px; font-size: 8pt; overflow: auto; border-top: silver 1px solid; cursor: text; border-right: silver 1px solid; padding-top: 4px" id="codeSnippetWrapper">
    <pre style="border-bottom-style: none; text-align: left; padding-bottom: 0px; line-height: 12pt; border-right-style: none; background-color: #f4f4f4; margin: 0em; padding-left: 0px; width: 100%; padding-right: 0px; font-family: consolas, &amp;#39;Courier New&amp;#39;, courier, monospace; direction: ltr; border-top-style: none; color: black; font-size: 8pt; border-left-style: none; overflow: visible; padding-top: 0px" id="codeSnippet">var youngestCust = myCustomers<br />                    .Where(c=&gt;c.TotalAmountOwing &gt; 5000)<br />                    .OrderBy(c=&gt;c.BirthDate)<br />                    .SingleOrDefault(); </pre>
    <br />
  </div>
  <p>It should be obvious to you now, if it wasn't at the start: the LINQ extension methods are doing all the looping for you, and taking care of all the small bits and housekeeping. <strong>You, as the customer, don't want to care about how it's found, but rather, you declare what you want. </strong></p>
  <p>
    <strong></strong>
  </p>
  <h2>Outsource Your Loops </h2>
  <p>I hate to steal Eric Lippert's thought on this, but it's worth saying once more in a different way: </p>
  <p>
    <strong>Avoid loops. They're becoming a code smell. Let built-in methods and functionality do the boring non-value added logic for you. </strong>
  </p>
  <p>You should be focused on YOUR business logic or end-goals (i.e. eating your sandwich and drinking your coffee), and less on syntax + language constructs. Take advantage of more declarative constructs provided in your language/framework. LINQ is a perfect example of this. </p>
  <p>
    <em>*this post is a mashup of </em>
    <a href="http://channel9.msdn.com/pdc2008/TL11">
      <em>Luca Bolognese's PDC 2008 F# metaphor</em>
    </a>
    <em> and </em>
    <a href="http://blogs.msdn.com/ericlippert/archive/2010/01/11/continuing-to-an-outer-loop.aspx">
      <em>Eric Lippert's post on loops</em>
    </a>
    <em>. Apologies to both!</em>
  </p>
</span>