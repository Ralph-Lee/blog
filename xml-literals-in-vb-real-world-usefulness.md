<!--{Title:"XML Literals in VB – Real World Usefulness?", PublishedOn:"2009-11-28T20:32:11", Intro:"Just a quick recent thought. As I am watching the PDC09 videos made available free online by Microso"} -->

<span>
  <p>Just a quick recent thought. As I am watching the <a href="http://microsoftpdc.com/Videos">PDC09 videos made available free online by Microsoft</a>, I got me thinking more about the recent changes/improvements in VB. A new feature for VB 9 in 2008 was <a href="http://msdn.microsoft.com/en-us/library/bb384629.aspx">XML Literals</a>. You know, writing/pasting plain old XML into your source code.  Like this simple example:</p>
  <div style="border-bottom: silver 1px solid; text-align: left; border-left: silver 1px solid; padding-bottom: 4px; line-height: 12pt; background-color: #f4f4f4; margin: 20px 0px 10px; padding-left: 4px; width: 97.5%; padding-right: 4px; font-family: consolas, &amp;#39;Courier New&amp;#39;, courier, monospace; direction: ltr; max-height: 200px; font-size: 8pt; overflow: auto; border-top: silver 1px solid; cursor: text; border-right: silver 1px solid; padding-top: 4px" id="codeSnippetWrapper">
    <pre style="border-bottom-style: none; text-align: left; padding-bottom: 0px; line-height: 12pt; border-right-style: none; background-color: #f4f4f4; margin: 0em; padding-left: 0px; width: 100%; padding-right: 0px; font-family: consolas, &amp;#39;Courier New&amp;#39;, courier, monospace; direction: ltr; border-top-style: none; color: black; font-size: 8pt; border-left-style: none; overflow: visible; padding-top: 0px" id="codeSnippet">
      <span style="color: #0000ff">dim</span> myXML =  &lt;custs&gt;<br />                &lt;cust ID=<span style="color: #006080">"5"</span> Name=<span style="color: #006080">"Oscar"</span> /&gt;<br />                &lt;cust ID=<span style="color: #006080">"9"</span> Name=<span style="color: #006080">"Ernie"</span> /&gt;<br />             &lt;/custs&gt;<br /></pre>
    <br />
  </div>
  <p>My thoughts went like this:</p>
  <ul>
    <li>hey, cool! you don't have to wrap it in strings, thank goodness. </li>
    <li>hmm, why would you be hardcoding XML anyway? </li>
    <li>that belongs in a resource file somewhere, really. </li>
  </ul>
  <p>I basically have written off this feature as demoware, really, until I saw the video of <a href="http://blogs.msdn.com/lucian/">Lucian Wischik</a>'s session "<a href="http://microsoftpdc.com/Sessions/FT32">Code Like the Wind with Microsoft Visual Basic 2010</a>". There was one really intriguing feature in his demo of a VB Silverlight component. </p>
  <p>The key task that lured me in was a fairly simple demo dealing with HTML replacement. Great application of the technology! If you're being careful to write your HTML as XHTML, then this is a great way to use VB's XML Literals feature. Here's the simple use case from the demo:</p>
  <ul>
    <li>clicking an input button </li>
    <li>replacing the innerHTML of a div </li>
  </ul>
  <p>
    <img style="border-right-width: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px" title="Lucian-InnerHTML" border="0" alt="Lucian-InnerHTML" src="http://devtxt.com/blog/blogimg/XMLLiteralsinVBRealWorldUsefulness_A1C7/LucianInnerHTML_3.png" width="704" height="315" />
  </p>
  <p>The great thing I like about this that you don't necessarily have to mess around with <font face="Consolas">string.Format()</font> or <font face="Consolas">string.Concat()</font> and all those other small speedbumps. i.e.</p>
  <p>
    <font face="Consolas">myDiv.innerHTML = string.Format("&lt;p&gt;&lt;i&gt;Hello {0}&lt;/i&gt;&lt;hr/&gt;&lt;b&gt;Hello everyone, welcome to VB XML Literals&lt;/b&gt;&lt;/p&gt;",customerName)</font>
  </p>
  <p>Perhaps take it a step further and externalize those snippets if you like. My first thought on that snippet was: "document.getElement? WHAT? Get some jQuery in there! Doh - it's code-behind!" Interesting how it's declared as an <font face="Consolas">Object</font> while being assigned <font face="Consolas">Browser.HtmlPage.Document. </font>Likely it's a quick/dirty demo artifact.</p>
  <h2>Useful in the Real World?</h2>
  <p>There's always the balance of demoware <em>vs.</em> actual best practices <em>vs.</em> your development standards. I am leery of hardcoding markup in your compiled app. It'll take an application <em>redeploy</em> to change that markup to something different. </p>
  <p>Of course, in the real world, you'd probably be loading something user-specific here, like a customer's name, shopping cart, etc. where you'd be wanting to <font face="Consolas">string.Format()</font> all those details anyway. Heck, you'd even want to iterate through your invoices, tweets, or whatever collection you'd want to start building a simple <font face="Consolas">&lt;ul&gt;</font> with your collection of business data in <font face="Consolas">&lt;li&gt;</font>. </p>
  <p>Even if it was a simple replacement of XML, with some business logic around which snippet to insert, consider if you'd had externalized those snippet into an XML resource file(s), you could refer to them easily, although not as simple as strongly typed XML literals <strong>compiled</strong> in a resource file. There's that balance again – ease of coding vs. maintainability in production.</p>
  <p />
  <p>I always like discovering new personalities at Microsoft. I'll be RSS'ing Lucian's blog, looking forward to seeing any great content he might share. </p>
  <h2>Real World Production Examples? </h2>
  <p>Do you know of any examples in the real world of VB and XML Literals in a production app? If/when I find some, I'll post a link here!</p>
</span>