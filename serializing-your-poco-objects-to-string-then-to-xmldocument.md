<!--{Title:"Serializing Your POCO Objects to String then to XmlDocument", PublishedOn:"2009-06-23T06:26:00", Intro:"Today's Dreaded Exception: Data at the root level is invalid.  Found a problem recently when seriali"} -->

<span>

**Today's Dreaded Exception**: Data at the root level is invalid.
Found a problem recently when serializing a custom object.&amp;nbsp; Here's what I was working with. Warning: <a href="http://www.codinghorror.com/blog/archives/001268.html" target="_blank">this is the bathroom wall of code</a> version. Do not copy/paste this into production.
  <div class="csharpcode">
    <pre class="alt">
      <span class="kwrd">public</span>
      <span class="kwrd">static</span> XmlDocument SerializeToXmlDoc(Object obj) </pre>
    <pre>{ </pre>
    <pre class="alt">
      <span class="kwrd">try</span>
    </pre>
    <pre>    { </pre>
    <pre class="alt">        XmlDocument xmlDoc = <span class="kwrd">new</span> XmlDocument(); </pre>
    <pre>
      <span class="kwrd">string</span> xmlString =  SerializeIt(obj);             </pre>
    <pre class="alt">        xmlDoc.LoadXml(xmlString); </pre>
    <pre>
      <span class="kwrd">return</span> xmlDoc; </pre>
    <pre class="alt">    } </pre>
    <pre>
      <span class="kwrd">catch</span> (Exception e) {   <span class="kwrd">return</span><span class="kwrd">null</span>; } </pre>
    <pre class="alt">} </pre>
    <pre>&amp;nbsp;</pre>
    <pre class="alt">
      <span class="kwrd">public</span>
      <span class="kwrd">static</span>
      <span class="kwrd">string</span> SerializeIt(Object obj) </pre>
    <pre>{ </pre>
    <pre class="alt">
      <span class="kwrd">try</span>
    </pre>
    <pre>    {     </pre>
    <pre class="alt">        MemoryStream memoryStream = <span class="kwrd">new</span> MemoryStream(); </pre>
    <pre>        XmlSerializer xs = <span class="kwrd">new</span> XmlSerializer(obj.GetType()); </pre>
    <pre class="alt">        XmlTextWriter xmlTextWriter = <span class="kwrd">new</span> XmlTextWriter(memoryStream, Encoding.UTF8); </pre>
    <pre>        xs.Serialize(xmlTextWriter, obj); </pre>
    <pre class="alt">&amp;nbsp;</pre>
    <pre>        memoryStream = (MemoryStream)xmlTextWriter.BaseStream; </pre>
    <pre class="alt">&amp;nbsp;</pre>
    <pre>
      <span class="kwrd">string</span> xmlString = UTF8ByteArrayToString(memoryStream.ToArray()); </pre>
    <pre class="alt">
      <span class="kwrd">return</span> xmlString; </pre>
    <pre>    } </pre>
    <pre class="alt">
      <span class="kwrd">catch</span> (Exception e) { <span class="kwrd">return</span><span class="kwrd">null</span>; } </pre>
    <pre>} </pre>
    <pre class="alt">&amp;nbsp;</pre>
    <pre>
      <span class="kwrd">private</span>
      <span class="kwrd">static</span>
      <span class="kwrd">string</span> UTF8ByteArrayToString(<span class="kwrd">byte</span>[] characters) </pre>
    <pre class="alt">{ </pre>
    <pre>    UTF8Encoding encoding = <span class="kwrd">new</span> UTF8Encoding(); </pre>
    <pre class="alt">    String constructedString = encoding.GetString(characters); </pre>
    <pre>
      <span class="kwrd">return</span> (constructedString); </pre>
    <pre class="alt">} </pre>
  </div>

    <!-- .csharpcode, .csharpcode pre { 	font-size: small; 	color: black; 	font-family: consolas, "Courier New", courier, monospace; 	background-color: #ffffff; 	/*white-space: pre;*/ } .csharpcode pre { margin: 0em; } .csharpcode .rem { color: #008000; } .csharpcode .kwrd { color: #0000ff; } .csharpcode .str { color: #006080; } .csharpcode .op { color: #0000c0; } .csharpcode .preproc { color: #cc6633; } .csharpcode .asp { background-color: #ffff00; } .csharpcode .html { color: #800000; } .csharpcode .attr { color: #ff0000; } .csharpcode .alt  { 	background-color: #f4f4f4; 	width: 100%; 	margin: 0em; } .csharpcode .lnum { color: #606060; }  -->

  <p align="center">The problem that was that as I passed one of my custom objects to it, I'd get this exception:    <br />**Data at the root level is invalid. Line 1, position 1. **
  <p align="center">Fine, root level&amp;hellip; got it. Let's take a peek at what's actually trying to be loaded.
###Wait, What The&amp;hellip;?###
Here's the kicker: there was a funny null/something character at the beginning of the string, and therefore, my XmlDoc couldn't successfully execute the LoadXml method. Confessional: I scraped this method from the interwebs and its bathroom wall of code. I tweaked it to suit my needs. I figured it was ready for ANY kind of POCO object. Guess not. I have hit the 10% case where it didn't work well. Well, let's fire up the Text Visualizer and figure out why that string isn't loading into an XmlDocument properly.

    <br />
<img style="border-right-width: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px" title="Text Visualizer Visual Studio xml string" src="http://devtxt.com/blog/image.axd?picture=xmlString.png" border="0" alt="Text Visualizer Visual Studio xml string" width="335" height="160" />

Hmm. That's funny. What is that?! Turning to the Immediate Window didn't give any real answers as to the value of that unknown/bad character.

<img style="border-right-width: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px" title="immediate window Visual Studio 2008" src="http://devtxt.com/blog/image.axd?picture=immediate.png" border="0" alt="immediate window Visual Studio 2008" width="212" height="72" />
    <br />Hmm. Looks blank. I then copied that value right from the Immediate Window, pasted into Notepad, it comes out as a question mark. Nice! Here's the direct paste:
?xmlString.Substring(0,1)    <br />"?"
###Solved!###
You could go down all kinds of kludgey roads and try to replace the first character if it's not angle bracket "<", or try and trim null chars, etc.
Turns out that a StringWriter will do the job well in this case. No more null character leading to a failed load of the string.    <br />(via the bathroom wall of code at <a href="http://asp.net2.aspfaq.com/xml-serialization/simple-serialization.html)">http://asp.net2.aspfaq.com/xml-serialization/simple-serialization.html</a>)
  <div class="csharpcode">
    <pre class="alt">
      <span class="kwrd">public</span>
      <span class="kwrd">static</span>
      <span class="kwrd">string</span> SerializeIt(Object obj) </pre>
    <pre>{ </pre>
    <pre class="alt">
      <span class="kwrd">try</span>
    </pre>
    <pre>    {               </pre>
    <pre class="alt">        XmlSerializer serializer = <span class="kwrd">new</span> XmlSerializer(obj.GetType()); </pre>
    <pre>        StringWriter sw = <span class="kwrd">new</span> StringWriter(); </pre>
    <pre class="alt">        serializer.Serialize(sw, obj); </pre>
    <pre>        sw.Close(); </pre>
    <pre class="alt">&amp;nbsp;</pre>
    <pre>
      <span class="rem">// get the Xml as a string </span>
    </pre>
    <pre class="alt">
      <span class="kwrd">string</span> xmlString = sw.GetStringBuilder().ToString(); </pre>
    <pre>&amp;nbsp;</pre>
    <pre class="alt">
      <span class="kwrd">return</span> xmlString; </pre>
    <pre>    } </pre>
    <pre class="alt">
      <span class="kwrd">catch</span> (Exception e) { <span class="kwrd">return</span><span class="kwrd">null</span>; } </pre>
    <pre>}</pre>
  </div>

    <!-- .csharpcode, .csharpcode pre { 	font-size: small; 	color: black; 	font-family: consolas, "Courier New", courier, monospace; 	background-color: #ffffff; 	/*white-space: pre;*/ } .csharpcode pre { margin: 0em; } .csharpcode .rem { color: #008000; } .csharpcode .kwrd { color: #0000ff; } .csharpcode .str { color: #006080; } .csharpcode .op { color: #0000c0; } .csharpcode .preproc { color: #cc6633; } .csharpcode .asp { background-color: #ffff00; } .csharpcode .html { color: #800000; } .csharpcode .attr { color: #ff0000; } .csharpcode .alt  { 	background-color: #f4f4f4; 	width: 100%; 	margin: 0em; } .csharpcode .lnum { color: #606060; }  -->

&amp;nbsp;
&amp;nbsp;
&amp;nbsp;
The MemoryStream algorithm worked well for some of my POCO objects, but not for another.
</span>