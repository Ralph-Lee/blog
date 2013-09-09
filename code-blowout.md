<!--Title:"Code Blowout", PublishedOn:"2009-04-26T01:23:48", Intro:"Taking the advice of Scott Hanselman today. It's a code garage sale. Everything of worth (you be the" -->

<span>
  <p>Taking the <a href="http://www.hanselman.com/blog/SocialNetworkingForDevelopersConferenceTalkVideo.aspx">advice of Scott Hanselman today</a>. It's a code garage sale. Everything of worth (you be the judge!) must be opened up and freed for WAY below cost. </p>
  <h4>SQL Server ADO Abstractor/Wrapper</h4>
  <p>
    <em>never write a line of ADO.NET setup code again!</em>
  </p>
  <p>The first offering is a .NET class that you can reference in any project that needs to call SQL Server stored procedures. It takes care of spinning up the ADO.NET objects and closing them (mostly) when appropriate. </p>
  <p>Use it to: </p>
  <ul>
    <li>ExecNonQuery </li>
    <li>ExecScalar </li>
    <li>ExecDataReader </li>
    <li>ExecDataSet </li>
  </ul>
  <p>All you've got to do is supply it with: </p>
  <ul>
    <li>a connection string (as managed by your own datalayer and/or app.config. Hardcode a string into it, go ahead, see if anyone cares), </li>
    <li>a stored procedure name </li>
    <li>any parameter names and values that you need. </li>
  </ul>
  <p>Another great feature here is that this class implements the IDisposable interface. This means you can use it with the Using statement/construct, and it will go out of scope when execution steps out of the Using statement/construct. This saves you a line or two of code. </p>
  <p>Here's some sample code showing how to use it:</p>
  <p>C#</p>
  <div class="csharpcode">
    <pre class="alt">
      <span class="lnum">   1:  </span>
      <span class="rem">// run a non-query stored procedure</span>
    </pre>
    <pre>
      <span class="lnum">   2:  </span>
      <span class="kwrd">try</span>{                </pre>
    <pre class="alt">
      <span class="lnum">   3:  </span>
      <span class="kwrd">using</span> (SqlAdoAbstractor db = <span class="kwrd">new</span> SQLDataHelper(someConnectionString))</pre>
    <pre>
      <span class="lnum">   4:  </span>        {</pre>
    <pre class="alt">
      <span class="lnum">   5:  </span>            db.AddParam(<span class="str">"@MyNumericIdentifier"</span>, 1);</pre>
    <pre>
      <span class="lnum">   6:  </span>            db.AddParam(<span class="str">"@MyString"</span>, <span class="str">"Hello World"</span>);</pre>
    <pre class="alt">
      <span class="lnum">   7:  </span>
    </pre>
    <pre>
      <span class="lnum">   8:  </span>            db.ExecNonQuery(<span class="str">"MySproc"</span>);</pre>
    <pre class="alt">
      <span class="lnum">   9:  </span>        }</pre>
    <pre>
      <span class="lnum">  10:  </span>    }</pre>
    <pre class="alt">
      <span class="lnum">  11:  </span>
      <span class="kwrd">catch</span> (Exception ex) { <span class="kwrd">throw</span>; }</pre>
    <pre>
      <span class="lnum">  12:  </span>
    </pre>
    <pre class="alt">
      <span class="lnum">  13:  </span>
      <span class="rem">// get a datareader</span>
    </pre>
    <pre>
      <span class="lnum">  14:  </span>
      <span class="kwrd">try</span>{                </pre>
    <pre class="alt">
      <span class="lnum">  15:  </span>
      <span class="kwrd">using</span> (SqlAdoAbstractor db = <span class="kwrd">new</span> SQLDataHelper(someConnectionString))</pre>
    <pre>
      <span class="lnum">  16:  </span>        {</pre>
    <pre class="alt">
      <span class="lnum">  17:  </span>            db.AddParam(<span class="str">"@SomeNumericIdentifier"</span>, 1);    </pre>
    <pre>
      <span class="lnum">  18:  </span>
    </pre>
    <pre class="alt">
      <span class="lnum">  19:  </span>            SqlDataReader dr = db.ExecReader(<span class="str">"ListAllEmployeesByRegionID"</span>);</pre>
    <pre>
      <span class="lnum">  20:  </span>
    </pre>
    <pre class="alt">
      <span class="lnum">  21:  </span>
      <span class="rem">//iterate through your datareader as necessary</span>
    </pre>
    <pre>
      <span class="lnum">  22:  </span>
      <span class="kwrd">while</span> (dr.Read()){</pre>
    <pre class="alt">
      <span class="lnum">  23:  </span>
      <span class="rem">//dr["EmpID"].ToString();</span>
    </pre>
    <pre>
      <span class="lnum">  24:  </span>            }</pre>
    <pre class="alt">
      <span class="lnum">  25:  </span>            dr.Close(); <span class="rem">//you must close the open reader </span></pre>
    <pre>
      <span class="lnum">  26:  </span>        }</pre>
    <pre class="alt">
      <span class="lnum">  27:  </span>    }</pre>
    <pre>
      <span class="lnum">  28:  </span>
      <span class="kwrd">catch</span> (Exception ex) { <span class="kwrd">throw</span>; }</pre>
    <pre class="alt">
      <span class="lnum">  29:  </span>
    </pre>
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
  <p>VB</p>
  <div class="csharpcode">
    <pre class="alt">
      <span class="lnum">   1:  </span>Using help <span class="kwrd">As</span> SqlAdoAbstractor = <span class="kwrd">New</span> SqlAdoAbstractor(someConnectionString)</pre>
    <pre>
      <span class="lnum">   2:  </span>        help.AddParam(<span class="str">"@MyNumericIdentifier"</span>, 1)</pre>
    <pre class="alt">
      <span class="lnum">   3:  </span>        help.ExecNonQuery(<span class="str">"MySproc"</span>)</pre>
    <pre>
      <span class="lnum">   4:  </span>
    </pre>
    <pre class="alt">
      <span class="lnum">   5:  </span>
      <span class="kwrd">End</span> Using</pre>
    <pre>
      <span class="lnum">   6:  </span>
    </pre>
    <pre class="alt">
      <span class="lnum">   7:  </span>
    </pre>
    <pre>
      <span class="lnum">   8:  </span>    Using help <span class="kwrd">As</span> SqlAdoAbstractor = <span class="kwrd">New</span> SqlAdoAbstractor(someConnectionString)</pre>
    <pre class="alt">
      <span class="lnum">   9:  </span>        help.AddParam(<span class="str">"@MyNumericIdentifier"</span>, 1)</pre>
    <pre>
      <span class="lnum">  10:  </span>
      <span class="kwrd">Dim</span> dr <span class="kwrd">As</span> SqlDataReader = help.ExecReader(<span class="str">"MySproc"</span>)</pre>
    <pre class="alt">
      <span class="lnum">  11:  </span>
    </pre>
    <pre>
      <span class="lnum">  12:  </span>
      <span class="kwrd">While</span> dr.Read</pre>
    <pre class="alt">
      <span class="lnum">  13:  </span>
      <span class="rem">'dr("EmpID")</span>
    </pre>
    <pre>
      <span class="lnum">  14:  </span>
      <span class="kwrd">End</span>
      <span class="kwrd">While</span>
    </pre>
    <pre>
      <span class="lnum">  15:  </span>
      <span class="kwrd">dr.Close <span class="rem">'you must close the datareader yourself</span></span>
    </pre>
    <pre class="alt">
      <span class="lnum">  16:  </span>
      <span class="kwrd">End</span> Using</pre>
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
</span>