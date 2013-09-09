<!--Title:"Online .NET Code Conversion Tools", PublishedOn:"2009-11-02T01:10:25", Intro:"I recently had the privilege of working on a contract where the main goal of the project was to port" -->

<span>
  <p>I recently had the privilege of working on a contract where the main goal of the project was to port/convert the web project and associated assemblies (business and data layers) from one .NET language to another. The other tasks were around fixing a handful of defects, and adding a few bits of functionality. The project was hard-capped at a set quoted number of hours, so there was little room for error. </p>
  <p>The solution consisted of three .NET 3.5 projects:</p>
  <ul>
    <li>
      <strong>ASP.NET web project </strong>– this project had roughly 10 pages and a handful of helper classes in the App_Code directory. This project <strong>already had VB </strong>as its language.</li>
    <li>
      <strong>Business Layer Assembly</strong> – 6 classes brokering access to the data layer. Very much pass-through code with not a lot of business logic in between the web layer and data layer. There were moderate amounts of looping and updating of the business object properties.</li>
    <li>
      <strong>Data Layer Assembly</strong> – the DL included the matching DL classes for each of the 6 classes above. The most challenging (code for the converter here was the Linq-To-Sql code.</li>
  </ul>
  <h2>Sizing Up the Task</h2>
  <p>The largest part of the project for me was the conversion task. All told, the conversion/translation involved:</p>
  <ul>
    <li>12 .cs files </li>
    <li>~55 methods</li>
    <li>~500 lines of code</li>
  </ul>
  <p>I had previously figured the smartest way to spend my time was <em>not rewriting code by hand</em>. If there's anything a developer should be good at, it's evaluating and choosing to use the right tool for the job. That's a major part of <strong><em><font size="3">your</font></em></strong> job as a developer!</p>
  <h2>Enter the Telerik Batch Converter Tool</h2>
  <p>A quick <a href="http://www.bing.com/search?q=convert+vb+to+c%23">Bing search</a> brought me to a few options: online-in-the-browser-cut-and-paste style, or full file upload.</p>
  <p>I first noticed that <a href="http://converter.telerik.com/batch.aspx">Telerik had a batch converter tool</a>. This allows the user to upload a handful of source code files, and the converter will do its magic on the server. This was right up my alley, as it meant that I didn't have to laboriously <em>open</em> each code file, <em>copy</em>, <em>paste</em>, and <em>make</em> a new source code file.</p>
  <p>
    <a href="http://converter.telerik.com/batch.aspx">
      <img style="border-bottom: 0px; border-left: 0px; display: inline; border-top: 0px; border-right: 0px" title="Telerik Batch Code Converter Upload" border="0" alt="Telerik Batch Code Converter Upload" src="http://devtxt.com/blog/blogimg/OnlineCodeConversionTools_E345/TelerikBatchCodeConverter_3.png" width="654" height="342" />
    </a>
  </p>
  <p>The initial load of the page shows the user 3 input boxes where you can browse to the location of your code file. Obviously for those ASP.NET web projects needing conversion, you don't need to upload your <font size="3" face="Consolas">.aspx</font> files, but rather your code-behind files. This particular project was using code-behind files, rather than inline &lt;script&gt;.</p>
  <p>
    <strong>Aside</strong>: It's amazing to me that some developers are using &lt;script&gt; tags to hold their code which belongs in a code behind  <font size="3" face="Consolas">Page.aspx.cs</font> or <font size="3" face="Consolas">.vb</font> file. Obviously it's a style or configuration issue, but to me it just feels wrong. I like the separation of .NET code and HTML markup. Perhaps it's just a side effect of trawling the web for source code, and people are choosing to format their <font size="3" face="Consolas">.aspx</font> to include code within, instead of posting separate files. </p>
  <p>Back to the task. The process is easy:</p>
  <ul>
    <li>Browse one-by-one for the files you need converted. Make sure to remember to pickup your Linq-To-Sql's <font size="3" face="Consolas">.designer.vb</font> or <font size="3" face="Consolas">.cs</font> class. That's the file where your SQL Server tables are mapped to POCO [Plain Old CLR Objects ;) ]</li>
    <li>Upload, Convert and Download a .zip containing the artifacts of the conversion. Included are all the converted files, and a Report.txt file.</li>
  </ul>
  <p>
    <img style="border-bottom: 0px; border-left: 0px; display: inline; border-top: 0px; border-right: 0px" title="Telerik Batch Code Converter Done" border="0" alt="Telerik Batch Code Converter Done" src="http://devtxt.com/blog/blogimg/OnlineCodeConversionTools_E345/TelerikBatchCodeConverter_done.png" width="654" height="270" />
  </p>
  <h2>Results &amp; Conversion Report</h2>
  <p>The real answer you're looking for is right here: <strong>the results of the conversion with the Telerik tool, for me, were 100%.</strong> Absolutely no problems were had in compiling a new project with these new files added to it. I can't believe it was so easy. Here's the report that Telerik included in the .zip (irrelevant or repetitive bits snipped):</p>
  <blockquote>
    <p>
      <font size="1">Conversion Error Report (Created [datetime]) </font>
    </p>
    <p>
      <font size="1">Every time a possible conversion problem is located, the file name, problem severity , and problem description are recorded. There are three levels of severity: </font>
    </p>
    <p>
      <font size="1">    Warning    = code will convert and will likely work, but conversion may need manual improvement       <br />    Minor    = code will convert, but it will likely need manual correction to work        <br />    Major    = code will not convert. It must be modified before used with converter </font>
    </p>
    <p>
      <font size="1">There are also general issues to remember when converting web sites:       <br />    - Events connected with the Handles syntax in VB will not work in C#. Events must be connected in code or in the control markup.        <br /></font>
    </p>
    <p>
      <font size="1">Report Details:       <br />================================================        <br />1: TEST.designer.cs    Minor    Your region may not convert from C# to VB if quotes have not been used to name the region. Make sure       region name is surrounded in quotes before using code.        <br />2: TEST.designer.cs    Minor    Your region may not convert from C# to VB if quotes have not been used to name the region. Make sure       region name is surrounded in quotes before using code.        <br /></font>
    </p>
    <p>
      <font size="1">End Report (11 total matches)</font>
    </p>
  </blockquote>
  <h2>Easy &amp; Accurate Results</h2>
  <p>I can't believe it was so easy to convert the code. It really meant that I could spend more time ADDING VALUE to the project by way of <strong>adding features</strong> and <strong>fixing defects</strong> than by the drudgery of converting source between languages. The price to pay for the Telerik online batch tool was the included comments at the bottom of each source file. That's an easy price to pay! Can I say now a BIG THANK YOU to Telerik, NRefactory &amp; SharpDevelop, and <a href="mailto:Anglin@Telerik">Todd Anglin @ Telerik</a> for making this tool free and available for the world at large!</p>
  <p>
    <a href="http://devtxt.com/blog/blogimg/OnlineCodeConversionTools_E345/TelerikBatchCodeConverter_Comments.png">
      <img style="border-bottom: 0px; border-left: 0px; display: inline; border-top: 0px; border-right: 0px" title="TelerikBatchCodeConverter_Comments" border="0" alt="TelerikBatchCodeConverter_Comments" src="http://devtxt.com/blog/blogimg/OnlineCodeConversionTools_E345/TelerikBatchCodeConverter_Comments_thumb.png" width="513" height="229" />
    </a>
  </p>
  <h2>Stitching your Converted Files Back Into a Project &amp; Solution</h2>
  <p>The tricky work is to then take the output of the converter and create a new project. For each of the assembly projects, I:</p>
  <ul>
    <li>copied all the reusable non-.NET files from the old solutions - *.xml, *.config, etc.</li>
    <li>made new .vbproj projects in Visual Studio</li>
    <li>for the web project, Add Existing Files –&gt; Select all your converted files.</li>
  </ul>
  <p>For those converting a web project, just create a new Web Project. For each of your pages, modify your .aspx  to have its Page directive to have the appropriate configurations:</p>
  <p align="left">
    <font size="2" face="Consolas">&lt;%@ Page Language="VB" MasterPageFile="~/SomeMaster.master" CodeFile="SomeFile.aspx.vb"</font>
  </p>
  <p align="center">Then do the same Add Existing Files routine for all your converted .aspx.vb or .cs files.</p>
  <h2>Quick Online .NET VB and C# Converters</h2>
  <p>In some cases, you'll find snippets online (yes, the bathroom wall of code) where you actually like the snippet, but rather want it in the language of your choice. I recently searched for and used both these tools when needing to convert a large snippet of VB to C#.</p>
  <p>Try DeveloperFusion's online code conversion tool - <a title="http://www.developerfusion.com/tools/convert/vb-to-csharp/" href="http://www.developerfusion.com/tools/convert/vb-to-csharp/">http://www.developerfusion.com/tools/convert/vb-to-csharp/</a></p>
  <p>Telerik's Code Converter is of course, likely to be mostly used for its quick online code converter - <a title="http://converter.telerik.com/" href="http://converter.telerik.com/">http://converter.telerik.com/</a></p>
</span>