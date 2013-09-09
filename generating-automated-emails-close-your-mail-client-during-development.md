<!--{Title:"Generating Automated Emails – Close your Mail Client During Development", PublishedOn:"2009-06-01T12:25:37", Intro:"So your application needs to send emails to stakeholders/customers/admins/managers. You know the kin"} -->

<span>
  <p>So your application needs to send emails to stakeholders/customers/admins/managers. You know the kind of emails:</p>
  <ul>
    <li>password reminders, </li>
    <li>account balances, </li>
    <li>reminders &amp; status updates </li>
    <li>confirmations of all sorts </li>
  </ul>
  <p>Typically my development routine consisted of something like this:</p>
  <ol>
    <li>Write a template email. String constants with placeholders, etc. <font color="#000080">Dear [FirstName] [LastName],</font></li>
    <li>Read all appropriate details from a data-store. You know, the things specific to the recipient of the email. Replace <font color="#000080">[FirstName] [LastName]</font> with real names, or a link specific to their account to reset their password, etc. </li>
    <li>Write the email sending business logic. <font size="3" face="Consolas">System.Net.Mail</font> and all the goodness within. Attachments, BCC, SMTP, all those good things provided by that namespace. (Thank you Microsoft, for helping us forget CDONTS.) </li>
    <li>Put in your own email address to receive the unit tests and integration tests. </li>
    <li>Brace for the email flood into your mail client. </li>
    <li>Context switch between the mail client and development IDE. More back and forth for you! </li>
  </ol>
  <h2>New Tool in the Toolbox – Already Built into the .NET Framework!</h2>
  <p>While testing, you can have emails sent to a directory instead of being sent to SMTP server. Simply put this in your web.config: </p>
  <div class="csharpcode">
    <pre class="alt">&lt;system.net&gt; </pre>
    <pre>    &lt;mailSettings&gt; </pre>
    <pre class="alt">        &lt;smtp deliveryMethod=<span class="str">"SpecifiedPickupDirectory"</span>&gt; </pre>
    <pre>            &lt;specifiedPickupDirectory pickupDirectoryLocation="c:\SomeEmailDirectory\" /&gt; </pre>
    <pre class="alt">        &lt;/smtp&gt; </pre>
    <pre>    &lt;/mailSettings&gt; </pre>
    <pre class="alt">&lt;/system.net&gt; </pre>
  </div>
  <style type="text/css">
//<![CDATA[


.csharpcode, .csharpcode pre
{
	font-size: small;
	color: black;
	font-family: consolas, &quot;Courier New&quot;, courier, monospace;
	background-color: #ffffff;
	/*white-space: pre;*/
}
.csharpcode pre { margin: 0em; }
.csharpcode .rem { color: #008000; }
.csharpcode .kwrd { color: #0000ff; }
.csharpcode .str { color: #006080; }
.csharpcode .op { color: #0000c0; }
.csharpcode .preproc { color: #cc6633; }
.csharpcode .asp { background-color: #ffff00; }
.csharpcode .html { color: #800000; }
.csharpcode .attr { color: #ff0000; }
.csharpcode .alt 
{
	background-color: #f4f4f4;
	width: 100%;
	margin: 0em;
}
.csharpcode .lnum { color: #606060; }
//]]>//
</style>
  <h2></h2>
  <h2>So What?</h2>
  <p>So how much time does it really save you? It's negligible, really, when your mail server is on the LAN. If you are working with an SMTP server that is unreliable, slow, or keeping accounting on mail count/charging for bandwidth, the seconds per sent email can add up. </p>
  <p>No matter about SMTP servers... good, bad or ugly. You could <a href="http://articles.techrepublic.com.com/5100-10878_11-6165137.html" target="_blank">monitor a directory with the .NET FileSystemWatcher</a> to watch for newly dropped email files, and then open them automatically! </p>
  <p>Imagine, your unit or integration tests create a new email to be sent, and another dev tool (using FileSystemWatcher) can automatically ShellExecute it for you. That saves you the time of switching to the directory, double clicking the newly created email, and then getting on with the work of checking for correctness.</p>
  <h2>Credit</h2>
  <p>Yep, this StackOverflow question keeps on giving!</p>
  <p>
    <a href="http://stackoverflow.com/questions/54929/hidden-features-of-asp-net">http://stackoverflow.com/questions/54929/hidden-features-of-asp-net</a>
  </p>
</span>