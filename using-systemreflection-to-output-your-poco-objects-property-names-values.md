<!--{Title:"Using System.Reflection to output your POCO object's property names + values", PublishedOn:"2009-08-09T00:29:40", Intro:"On two recent projects, I've had the need to write out the properties of multiple custom entities. T" }-->

<span>
  <p>On two recent projects, I've had the need to write out the properties of multiple custom entities. The example here will be around the venerable <font face="Courier New">Customer</font> class. Let's pretend that a requirement would be to send an email each time a customer makes an order to a support rep in your company. Yes, we'll be logging the order to the database, but the value-add here is that the recipient of the email will receive a link to the order, plus all the details of the customer and order included in the email.</p>
  <p>So we need to take an object, iterate through its properties and their values, and put into a string for the body of an email. </p>
  <p>The first thought might be: "just loop through each property and write it to the email body". That's fine, but as soon as you add a property in the future, you need to remember to change the emailing code. That's not helpful for the developer needing to maintain this application. Let's look at the <a href="http://msdn.microsoft.com/en-us/library/system.reflection.aspx">Reflection namespace in the .NET framework</a>. </p>
  <h2>Reflection in .NET</h2>
  <p>Reflection lets you programmatically find out information about types in your assemblies at runtime. Using classes in the <font face="Courier New">System.Reflection</font> namespace, you can learn details of an class's methods &amp; properties. In the topic at hand, we're interested in the names, values, and datatypes of properties. You could possibly use reflection to get info at runtime about a method's parameters. </p>
  <h2>Override<font face="Courier New"> Customer.ToString()</font></h2>
  <p>The <font face="Courier New">Customer</font> class needs its own <font face="Courier New">ToString()</font> method overridden. Here's the class: </p>
  <p />
  <p />
  <div id="codeSnippetWrapper">
    <div style="border-bottom-style: none; text-align: left; padding-bottom: 0px; line-height: 12pt; border-right-style: none; background-color: #f4f4f4; padding-left: 0px; width: 100%; padding-right: 0px; font-family: &amp;#39;Courier New&amp;#39;, courier, monospace; direction: ltr; border-top-style: none; color: black; font-size: 8pt; border-left-style: none; overflow: visible; padding-top: 0px" id="codeSnippet">
      <pre style="border-bottom-style: none; text-align: left; padding-bottom: 0px; line-height: 12pt; border-right-style: none; background-color: white; margin: 0em; padding-left: 0px; width: 100%; padding-right: 0px; font-family: &amp;#39;Courier New&amp;#39;, courier, monospace; direction: ltr; border-top-style: none; color: black; font-size: 8pt; border-left-style: none; overflow: visible; padding-top: 0px"></pre>
      <!--CRLF -->
      <pre style="border-bottom-style: none; text-align: left; padding-bottom: 0px; line-height: 12pt; border-right-style: none; background-color: #f4f4f4; margin: 0em; padding-left: 0px; width: 100%; padding-right: 0px; font-family: &amp;#39;Courier New&amp;#39;, courier, monospace; direction: ltr; border-top-style: none; color: black; font-size: 8pt; border-left-style: none; overflow: visible; padding-top: 0px">
        <span style="color: #0000ff">using</span> System.Reflection; </pre>
      <!--CRLF -->
      <pre style="border-bottom-style: none; text-align: left; padding-bottom: 0px; line-height: 12pt; border-right-style: none; background-color: white; margin: 0em; padding-left: 0px; width: 100%; padding-right: 0px; font-family: &amp;#39;Courier New&amp;#39;, courier, monospace; direction: ltr; border-top-style: none; color: black; font-size: 8pt; border-left-style: none; overflow: visible; padding-top: 0px">
        <span style="color: #0000ff">using</span> System.Text;</pre>
      <!--CRLF -->
      <pre style="border-bottom-style: none; text-align: left; padding-bottom: 0px; line-height: 12pt; border-right-style: none; background-color: #f4f4f4; margin: 0em; padding-left: 0px; width: 100%; padding-right: 0px; font-family: &amp;#39;Courier New&amp;#39;, courier, monospace; direction: ltr; border-top-style: none; color: black; font-size: 8pt; border-left-style: none; overflow: visible; padding-top: 0px"></pre>
      <!--CRLF -->
      <pre style="border-bottom-style: none; text-align: left; padding-bottom: 0px; line-height: 12pt; border-right-style: none; background-color: white; margin: 0em; padding-left: 0px; width: 100%; padding-right: 0px; font-family: &amp;#39;Courier New&amp;#39;, courier, monospace; direction: ltr; border-top-style: none; color: black; font-size: 8pt; border-left-style: none; overflow: visible; padding-top: 0px">
        <span style="color: #0000ff">public</span>
        <span style="color: #0000ff">class</span> Customer{</pre>
      <!--CRLF -->
      <pre style="border-bottom-style: none; text-align: left; padding-bottom: 0px; line-height: 12pt; border-right-style: none; background-color: #f4f4f4; margin: 0em; padding-left: 0px; width: 100%; padding-right: 0px; font-family: &amp;#39;Courier New&amp;#39;, courier, monospace; direction: ltr; border-top-style: none; color: black; font-size: 8pt; border-left-style: none; overflow: visible; padding-top: 0px"></pre>
      <!--CRLF -->
      <pre style="border-bottom-style: none; text-align: left; padding-bottom: 0px; line-height: 12pt; border-right-style: none; background-color: white; margin: 0em; padding-left: 0px; width: 100%; padding-right: 0px; font-family: &amp;#39;Courier New&amp;#39;, courier, monospace; direction: ltr; border-top-style: none; color: black; font-size: 8pt; border-left-style: none; overflow: visible; padding-top: 0px">
        <span style="color: #0000ff">public</span>
        <span style="color: #0000ff">string</span> Name{ get; set; } </pre>
      <!--CRLF -->
      <pre style="border-bottom-style: none; text-align: left; padding-bottom: 0px; line-height: 12pt; border-right-style: none; background-color: #f4f4f4; margin: 0em; padding-left: 0px; width: 100%; padding-right: 0px; font-family: &amp;#39;Courier New&amp;#39;, courier, monospace; direction: ltr; border-top-style: none; color: black; font-size: 8pt; border-left-style: none; overflow: visible; padding-top: 0px">
        <span style="color: #0000ff">public</span>
        <span style="color: #0000ff">string</span> Email { get; set; }</pre>
      <!--CRLF -->
      <pre style="border-bottom-style: none; text-align: left; padding-bottom: 0px; line-height: 12pt; border-right-style: none; background-color: white; margin: 0em; padding-left: 0px; width: 100%; padding-right: 0px; font-family: &amp;#39;Courier New&amp;#39;, courier, monospace; direction: ltr; border-top-style: none; color: black; font-size: 8pt; border-left-style: none; overflow: visible; padding-top: 0px">
        <span style="color: #0000ff">public</span>
        <span style="color: #0000ff">string</span> Address { get; set; } </pre>
      <!--CRLF -->
      <pre style="border-bottom-style: none; text-align: left; padding-bottom: 0px; line-height: 12pt; border-right-style: none; background-color: #f4f4f4; margin: 0em; padding-left: 0px; width: 100%; padding-right: 0px; font-family: &amp;#39;Courier New&amp;#39;, courier, monospace; direction: ltr; border-top-style: none; color: black; font-size: 8pt; border-left-style: none; overflow: visible; padding-top: 0px">
        <span style="color: #0000ff">public</span>
        <span style="color: #0000ff">string</span> City { get; set; } </pre>
      <!--CRLF -->
      <pre style="border-bottom-style: none; text-align: left; padding-bottom: 0px; line-height: 12pt; border-right-style: none; background-color: white; margin: 0em; padding-left: 0px; width: 100%; padding-right: 0px; font-family: &amp;#39;Courier New&amp;#39;, courier, monospace; direction: ltr; border-top-style: none; color: black; font-size: 8pt; border-left-style: none; overflow: visible; padding-top: 0px">
        <span style="color: #0000ff">public</span>
        <span style="color: #0000ff">string</span> State { get; set; } </pre>
      <!--CRLF -->
      <pre style="border-bottom-style: none; text-align: left; padding-bottom: 0px; line-height: 12pt; border-right-style: none; background-color: #f4f4f4; margin: 0em; padding-left: 0px; width: 100%; padding-right: 0px; font-family: &amp;#39;Courier New&amp;#39;, courier, monospace; direction: ltr; border-top-style: none; color: black; font-size: 8pt; border-left-style: none; overflow: visible; padding-top: 0px">
        <span style="color: #0000ff">public</span> DateTime JoinDate { get; set; }</pre>
      <!--CRLF -->
      <pre style="border-bottom-style: none; text-align: left; padding-bottom: 0px; line-height: 12pt; border-right-style: none; background-color: white; margin: 0em; padding-left: 0px; width: 100%; padding-right: 0px; font-family: &amp;#39;Courier New&amp;#39;, courier, monospace; direction: ltr; border-top-style: none; color: black; font-size: 8pt; border-left-style: none; overflow: visible; padding-top: 0px"></pre>
      <!--CRLF -->
      <pre style="border-bottom-style: none; text-align: left; padding-bottom: 0px; line-height: 12pt; border-right-style: none; background-color: #f4f4f4; margin: 0em; padding-left: 0px; width: 100%; padding-right: 0px; font-family: &amp;#39;Courier New&amp;#39;, courier, monospace; direction: ltr; border-top-style: none; color: black; font-size: 8pt; border-left-style: none; overflow: visible; padding-top: 0px">
        <span style="color: #0000ff">public</span>
        <span style="color: #0000ff">override</span>
        <span style="color: #0000ff">string</span> ToString() {</pre>
      <!--CRLF -->
      <pre style="border-bottom-style: none; text-align: left; padding-bottom: 0px; line-height: 12pt; border-right-style: none; background-color: white; margin: 0em; padding-left: 0px; width: 100%; padding-right: 0px; font-family: &amp;#39;Courier New&amp;#39;, courier, monospace; direction: ltr; border-top-style: none; color: black; font-size: 8pt; border-left-style: none; overflow: visible; padding-top: 0px"></pre>
      <!--CRLF -->
      <pre style="border-bottom-style: none; text-align: left; padding-bottom: 0px; line-height: 12pt; border-right-style: none; background-color: #f4f4f4; margin: 0em; padding-left: 0px; width: 100%; padding-right: 0px; font-family: &amp;#39;Courier New&amp;#39;, courier, monospace; direction: ltr; border-top-style: none; color: black; font-size: 8pt; border-left-style: none; overflow: visible; padding-top: 0px">        StringBuilder personString = <span style="color: #0000ff">new</span> StringBuilder(); </pre>
      <!--CRLF -->
      <pre style="border-bottom-style: none; text-align: left; padding-bottom: 0px; line-height: 12pt; border-right-style: none; background-color: white; margin: 0em; padding-left: 0px; width: 100%; padding-right: 0px; font-family: &amp;#39;Courier New&amp;#39;, courier, monospace; direction: ltr; border-top-style: none; color: black; font-size: 8pt; border-left-style: none; overflow: visible; padding-top: 0px"></pre>
      <!--CRLF -->
      <pre style="border-bottom-style: none; text-align: left; padding-bottom: 0px; line-height: 12pt; border-right-style: none; background-color: #f4f4f4; margin: 0em; padding-left: 0px; width: 100%; padding-right: 0px; font-family: &amp;#39;Courier New&amp;#39;, courier, monospace; direction: ltr; border-top-style: none; color: black; font-size: 8pt; border-left-style: none; overflow: visible; padding-top: 0px">
        <span style="color: #0000ff">foreach</span> (PropertyInfo pi <span style="color: #0000ff">in</span><span style="color: #0000ff">this</span>.GetType().GetProperties()) {</pre>
      <!--CRLF -->
      <pre style="border-bottom-style: none; text-align: left; padding-bottom: 0px; line-height: 12pt; border-right-style: none; background-color: white; margin: 0em; padding-left: 0px; width: 100%; padding-right: 0px; font-family: &amp;#39;Courier New&amp;#39;, courier, monospace; direction: ltr; border-top-style: none; color: black; font-size: 8pt; border-left-style: none; overflow: visible; padding-top: 0px">
        <span style="color: #008000">//get the name of the property and its value. </span>
      </pre>
      <!--CRLF -->
      <pre style="border-bottom-style: none; text-align: left; padding-bottom: 0px; line-height: 12pt; border-right-style: none; background-color: #f4f4f4; margin: 0em; padding-left: 0px; width: 100%; padding-right: 0px; font-family: &amp;#39;Courier New&amp;#39;, courier, monospace; direction: ltr; border-top-style: none; color: black; font-size: 8pt; border-left-style: none; overflow: visible; padding-top: 0px">            personString.AppendLine(<span style="color: #0000ff">string</span>.Format(<span style="color: #006080">"{0}: {1}"</span>, pi.Name, pi.GetValue(<span style="color: #0000ff">this</span>,<span style="color: #0000ff">null</span>))); </pre>
      <!--CRLF -->
      <pre style="border-bottom-style: none; text-align: left; padding-bottom: 0px; line-height: 12pt; border-right-style: none; background-color: white; margin: 0em; padding-left: 0px; width: 100%; padding-right: 0px; font-family: &amp;#39;Courier New&amp;#39;, courier, monospace; direction: ltr; border-top-style: none; color: black; font-size: 8pt; border-left-style: none; overflow: visible; padding-top: 0px">        } </pre>
      <!--CRLF -->
      <pre style="border-bottom-style: none; text-align: left; padding-bottom: 0px; line-height: 12pt; border-right-style: none; background-color: #f4f4f4; margin: 0em; padding-left: 0px; width: 100%; padding-right: 0px; font-family: &amp;#39;Courier New&amp;#39;, courier, monospace; direction: ltr; border-top-style: none; color: black; font-size: 8pt; border-left-style: none; overflow: visible; padding-top: 0px"></pre>
      <!--CRLF -->
      <pre style="border-bottom-style: none; text-align: left; padding-bottom: 0px; line-height: 12pt; border-right-style: none; background-color: white; margin: 0em; padding-left: 0px; width: 100%; padding-right: 0px; font-family: &amp;#39;Courier New&amp;#39;, courier, monospace; direction: ltr; border-top-style: none; color: black; font-size: 8pt; border-left-style: none; overflow: visible; padding-top: 0px">
        <span style="color: #0000ff">return</span> personString.ToString(); </pre>
      <!--CRLF -->
      <pre style="border-bottom-style: none; text-align: left; padding-bottom: 0px; line-height: 12pt; border-right-style: none; background-color: #f4f4f4; margin: 0em; padding-left: 0px; width: 100%; padding-right: 0px; font-family: &amp;#39;Courier New&amp;#39;, courier, monospace; direction: ltr; border-top-style: none; color: black; font-size: 8pt; border-left-style: none; overflow: visible; padding-top: 0px">    }</pre>
      <!--CRLF -->
      <pre style="border-bottom-style: none; text-align: left; padding-bottom: 0px; line-height: 12pt; border-right-style: none; background-color: white; margin: 0em; padding-left: 0px; width: 100%; padding-right: 0px; font-family: &amp;#39;Courier New&amp;#39;, courier, monospace; direction: ltr; border-top-style: none; color: black; font-size: 8pt; border-left-style: none; overflow: visible; padding-top: 0px">} </pre>
      <!--CRLF -->
    </div>
  </div>
  <p></p>
  <h2>Use It!</h2>
  <div id="codeSnippetWrapper">
    <div style="border-bottom-style: none; text-align: left; padding-bottom: 0px; line-height: 12pt; border-right-style: none; background-color: #f4f4f4; padding-left: 0px; width: 100%; padding-right: 0px; font-family: &amp;#39;Courier New&amp;#39;, courier, monospace; direction: ltr; border-top-style: none; color: black; font-size: 8pt; border-left-style: none; overflow: visible; padding-top: 0px" id="codeSnippet">
      <pre style="border-bottom-style: none; text-align: left; padding-bottom: 0px; line-height: 12pt; border-right-style: none; background-color: white; margin: 0em; padding-left: 0px; width: 100%; padding-right: 0px; font-family: &amp;#39;Courier New&amp;#39;, courier, monospace; direction: ltr; border-top-style: none; color: black; font-size: 8pt; border-left-style: none; overflow: visible; padding-top: 0px"></pre>
      <!--CRLF -->
      <pre style="border-bottom-style: none; text-align: left; padding-bottom: 0px; line-height: 12pt; border-right-style: none; background-color: #f4f4f4; margin: 0em; padding-left: 0px; width: 100%; padding-right: 0px; font-family: &amp;#39;Courier New&amp;#39;, courier, monospace; direction: ltr; border-top-style: none; color: black; font-size: 8pt; border-left-style: none; overflow: visible; padding-top: 0px">Customer cust = <span style="color: #0000ff">new</span> Customer{</pre>
      <!--CRLF -->
      <pre style="border-bottom-style: none; text-align: left; padding-bottom: 0px; line-height: 12pt; border-right-style: none; background-color: white; margin: 0em; padding-left: 0px; width: 100%; padding-right: 0px; font-family: &amp;#39;Courier New&amp;#39;, courier, monospace; direction: ltr; border-top-style: none; color: black; font-size: 8pt; border-left-style: none; overflow: visible; padding-top: 0px">    Name = <span style="color: #006080">"Mike"</span>,</pre>
      <!--CRLF -->
      <pre style="border-bottom-style: none; text-align: left; padding-bottom: 0px; line-height: 12pt; border-right-style: none; background-color: #f4f4f4; margin: 0em; padding-left: 0px; width: 100%; padding-right: 0px; font-family: &amp;#39;Courier New&amp;#39;, courier, monospace; direction: ltr; border-top-style: none; color: black; font-size: 8pt; border-left-style: none; overflow: visible; padding-top: 0px">    Email = <span style="color: #006080">"some@dot.com"</span>,</pre>
      <!--CRLF -->
      <pre style="border-bottom-style: none; text-align: left; padding-bottom: 0px; line-height: 12pt; border-right-style: none; background-color: white; margin: 0em; padding-left: 0px; width: 100%; padding-right: 0px; font-family: &amp;#39;Courier New&amp;#39;, courier, monospace; direction: ltr; border-top-style: none; color: black; font-size: 8pt; border-left-style: none; overflow: visible; padding-top: 0px">    HomeAddress = <span style="color: #006080">"1 Some Street"</span>,</pre>
      <!--CRLF -->
      <pre style="border-bottom-style: none; text-align: left; padding-bottom: 0px; line-height: 12pt; border-right-style: none; background-color: #f4f4f4; margin: 0em; padding-left: 0px; width: 100%; padding-right: 0px; font-family: &amp;#39;Courier New&amp;#39;, courier, monospace; direction: ltr; border-top-style: none; color: black; font-size: 8pt; border-left-style: none; overflow: visible; padding-top: 0px">    State = <span style="color: #006080">"ZZ"</span>};</pre>
      <!--CRLF -->
      <pre style="border-bottom-style: none; text-align: left; padding-bottom: 0px; line-height: 12pt; border-right-style: none; background-color: white; margin: 0em; padding-left: 0px; width: 100%; padding-right: 0px; font-family: &amp;#39;Courier New&amp;#39;, courier, monospace; direction: ltr; border-top-style: none; color: black; font-size: 8pt; border-left-style: none; overflow: visible; padding-top: 0px"></pre>
      <!--CRLF -->
      <pre style="border-bottom-style: none; text-align: left; padding-bottom: 0px; line-height: 12pt; border-right-style: none; background-color: #f4f4f4; margin: 0em; padding-left: 0px; width: 100%; padding-right: 0px; font-family: &amp;#39;Courier New&amp;#39;, courier, monospace; direction: ltr; border-top-style: none; color: black; font-size: 8pt; border-left-style: none; overflow: visible; padding-top: 0px">
        <span style="color: #0000ff">string</span> customerOuput = cust.ToString(); <span style="color: #008000">//now put this in your email body!</span></pre>
      <!--CRLF -->
      <pre style="border-bottom-style: none; text-align: left; padding-bottom: 0px; line-height: 12pt; border-right-style: none; background-color: white; margin: 0em; padding-left: 0px; width: 100%; padding-right: 0px; font-family: &amp;#39;Courier New&amp;#39;, courier, monospace; direction: ltr; border-top-style: none; color: black; font-size: 8pt; border-left-style: none; overflow: visible; padding-top: 0px"></pre>
      <!--CRLF -->
      <pre style="border-bottom-style: none; text-align: left; padding-bottom: 0px; line-height: 12pt; border-right-style: none; background-color: #f4f4f4; margin: 0em; padding-left: 0px; width: 100%; padding-right: 0px; font-family: &amp;#39;Courier New&amp;#39;, courier, monospace; direction: ltr; border-top-style: none; color: black; font-size: 8pt; border-left-style: none; overflow: visible; padding-top: 0px">Console.WriteLine(customerOutput);</pre>
      <!--CRLF -->
      <pre style="border-bottom-style: none; text-align: left; padding-bottom: 0px; line-height: 12pt; border-right-style: none; background-color: white; margin: 0em; padding-left: 0px; width: 100%; padding-right: 0px; font-family: &amp;#39;Courier New&amp;#39;, courier, monospace; direction: ltr; border-top-style: none; color: black; font-size: 8pt; border-left-style: none; overflow: visible; padding-top: 0px"></pre>
      <!--CRLF -->
      <pre style="border-bottom-style: none; text-align: left; padding-bottom: 0px; line-height: 12pt; border-right-style: none; background-color: #f4f4f4; margin: 0em; padding-left: 0px; width: 100%; padding-right: 0px; font-family: &amp;#39;Courier New&amp;#39;, courier, monospace; direction: ltr; border-top-style: none; color: black; font-size: 8pt; border-left-style: none; overflow: visible; padding-top: 0px">
        <span style="color: #008000">/* Console will show:</span>
      </pre>
      <!--CRLF -->
      <pre style="border-bottom-style: none; text-align: left; padding-bottom: 0px; line-height: 12pt; border-right-style: none; background-color: white; margin: 0em; padding-left: 0px; width: 100%; padding-right: 0px; font-family: &amp;#39;Courier New&amp;#39;, courier, monospace; direction: ltr; border-top-style: none; color: black; font-size: 8pt; border-left-style: none; overflow: visible; padding-top: 0px">
        <span style="color: #008000">Name: Mike</span>
      </pre>
      <!--CRLF -->
      <pre style="border-bottom-style: none; text-align: left; padding-bottom: 0px; line-height: 12pt; border-right-style: none; background-color: #f4f4f4; margin: 0em; padding-left: 0px; width: 100%; padding-right: 0px; font-family: &amp;#39;Courier New&amp;#39;, courier, monospace; direction: ltr; border-top-style: none; color: black; font-size: 8pt; border-left-style: none; overflow: visible; padding-top: 0px">
        <span style="color: #008000">Email: some@dot.com</span>
      </pre>
      <!--CRLF -->
      <pre style="border-bottom-style: none; text-align: left; padding-bottom: 0px; line-height: 12pt; border-right-style: none; background-color: white; margin: 0em; padding-left: 0px; width: 100%; padding-right: 0px; font-family: &amp;#39;Courier New&amp;#39;, courier, monospace; direction: ltr; border-top-style: none; color: black; font-size: 8pt; border-left-style: none; overflow: visible; padding-top: 0px">
        <span style="color: #008000">HomeAddress: 1 Some Street</span>
      </pre>
      <!--CRLF -->
      <pre style="border-bottom-style: none; text-align: left; padding-bottom: 0px; line-height: 12pt; border-right-style: none; background-color: #f4f4f4; margin: 0em; padding-left: 0px; width: 100%; padding-right: 0px; font-family: &amp;#39;Courier New&amp;#39;, courier, monospace; direction: ltr; border-top-style: none; color: black; font-size: 8pt; border-left-style: none; overflow: visible; padding-top: 0px">
        <span style="color: #008000">City: </span>
      </pre>
      <!--CRLF -->
      <pre style="border-bottom-style: none; text-align: left; padding-bottom: 0px; line-height: 12pt; border-right-style: none; background-color: white; margin: 0em; padding-left: 0px; width: 100%; padding-right: 0px; font-family: &amp;#39;Courier New&amp;#39;, courier, monospace; direction: ltr; border-top-style: none; color: black; font-size: 8pt; border-left-style: none; overflow: visible; padding-top: 0px">
        <span style="color: #008000">State: ZZ</span>
      </pre>
      <!--CRLF -->
      <pre style="border-bottom-style: none; text-align: left; padding-bottom: 0px; line-height: 12pt; border-right-style: none; background-color: #f4f4f4; margin: 0em; padding-left: 0px; width: 100%; padding-right: 0px; font-family: &amp;#39;Courier New&amp;#39;, courier, monospace; direction: ltr; border-top-style: none; color: black; font-size: 8pt; border-left-style: none; overflow: visible; padding-top: 0px">
        <span style="color: #008000">JoinDate: </span>
      </pre>
      <!--CRLF -->
      <pre style="border-bottom-style: none; text-align: left; padding-bottom: 0px; line-height: 12pt; border-right-style: none; background-color: white; margin: 0em; padding-left: 0px; width: 100%; padding-right: 0px; font-family: &amp;#39;Courier New&amp;#39;, courier, monospace; direction: ltr; border-top-style: none; color: black; font-size: 8pt; border-left-style: none; overflow: visible; padding-top: 0px">
        <span style="color: #008000">*/</span>
      </pre>
      <!--CRLF -->
    </div>
  </div>
  <h2></h2>
  <h2>Consider This...</h2>
  <p>There are a few things to consider with this implementation:</p>
  <ul>
    <li>collections aren't handled well. </li>
    <li>complex datatypes aren't either.</li>
    <li>consider customizing your implementation to include special formatting for <font face="Courier New">DateTime</font>s.</li>
    <li>what happens when you want the output to have a well-formatted output for a property like <font face="Courier New">HomeAddress</font>. We'd probably want it to show as "Home Address".</li>
    <li>consider handling <font face="Courier New">null</font> values better than writing "null".</li>
  </ul>
  <h2>Wrap Up</h2>
  <p>I know this will save developers time in two ways:</p>
  <ol>
    <li>Not having to iterate manually through X properties to build your string for email. That'll scale depending on the number of properties and your adeptness at Ctrl-C, Ctrl-V. </li>
    <li>When you add a new simple property, you will NOT have to adjust anything for it to show in the <font face="Courier New">.toString()</font> method.</li>
  </ol>
  <p />
How are <strong>you</strong> using <font face="Courier New">System.Reflection</font>? </span>