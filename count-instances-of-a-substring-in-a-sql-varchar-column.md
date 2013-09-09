<!--Title:"Count Instances of a Substring in a SQL Varchar Column", PublishedOn:"2010-03-05T15:30:46", Intro:"The Problem  Recently I needed to count how many particular HL7 segments were in a given column. Rat" -->

<span>
  <h3>The Problem</h3>
  <p>Recently I needed to count how many particular HL7 segments were in a given column. Rather, I wanted to find those with 2+. I needed a solution to find how many occurrences of a substring were in a target column to be searched.</p>
  <p>I was about to post a question on StackOverflow on this, but found the answer myself bit a bit of help from a few SQL related questions that I found while searching (<a title="http://stackoverflow.com/questions/1860457/how-to-count-instances-of-character-in-sql-column/1860478#1860478" href="http://How-to-count-instances-of-character-in-sql-column/1860478#1860478">How to count instances of a character in a SQL column</a>). Funny how SO's 'search' functionality doesn't show the questions related, but when you're composing the question's title, it does a MUCH better job. </p>
  <p>Here's the question I would have posted:</p>
  <p>
    <font color="#0000ff">Consider a varchar column or varchar variable holding a value like this:</font>
  </p>
  <p>
    <font color="#0000ff">
      <font size="3" face="Consolas">ABC123|foo|bar|ABC123|987|ABC123|123|DEF|456|ABC|</font>
    </font>
  </p>
  <p>
    <font color="#0000ff">          The goal is to count the number of times <font size="3" face="Consolas">ABC123|</font> appears in that given string/column.</font>
  </p>
  <p>
    <font color="#0000ff">          How would you write the algorithm in T-SQL for SQL 2005 and/or 2008?</font>
  </p>
  <p>I would suggest that mostly you'd want to take this sort of task to a higher level language, rather than do it at the database level. Sometimes you have no choice, and a customer is asking for this kind of information in a short timeframe.</p>
  <h3>The Solution</h3>
  <p>The solution here is fairly easy. </p>
  <ul>
    <li>define the substring you want to find. </li>
    <li>find the length of the original string </li>
    <li>REPLACE that string with a blank </li>
    <li>subtract the length of the replaced string from the length of the original </li>
    <li>the remainder is the number of characters that were removed </li>
    <li>the number of substrings found is found by dividing by the length of the substring </li>
  </ul>
  <code>
    <span style="font-family: courier new; font-size: 10pt">
      <span style="color: blue">DECLARE</span>
      <span style="color: #8000ff">@Subj</span>
      <span style="font-style: italic; color: black">VARCHAR</span>
      <span style="color: maroon">(</span>
      <span style="color: black">6000</span>
      <span style="color: maroon">)</span>
      <span style="color: silver">,</span>
      <br />
      <span style="color: #8000ff">@Find</span>
      <span style="font-style: italic; color: black">VARCHAR</span>
      <span style="color: maroon">(</span>
      <span style="color: black">10</span>
      <span style="color: maroon">)</span>
      <span style="color: silver">,</span>
      <br />
      <span style="color: #8000ff">@NumInstances</span>
      <span style="font-style: italic; color: black">INT</span>
      <br />
      <br />
      <span style="color: blue">SELECT</span>
      <span style="color: #8000ff">@Find</span>
      <span style="color: silver">=</span>
      <span style="color: red">'OBX|'</span>
      <span style="font-style: italic; color: green">--this is the string we want to count the occurrences of </span>
      <br />
      <span style="color: silver">,</span>
      <span style="color: #8000ff">@Subj</span>
      <span style="color: silver">=</span>
      <span style="color: red">'MSH|^~\&amp;|LAB|TEST|TEST||20100302132036||ORU^R01|987654321|T|2.3 PID|1||Z000000167||TESTLAST^TESTFIRST^TESTMIDDLE||19100101|M|||^^^^|||||||ABC123 PID|1||0000000135|9028520613|KGH^ECPAT^^^^||19561203|F|^^^^^||99 TESTING STREET^^TEST^CA^90210||555-333-4444|||M|NV|ABC123|ZYX987| PV1|1|P|EM^^^.|||||||||||||||ER||HP|||||||||||||||||||.||PRE| ORC|SC|0203:U00006R300.0000|||CM||||201003021319|TEST^TESTER^DR^HELLO^^^||TESTING^TEST^DR^WORLD^^^| OBR|1|0203:U00006R300.0000|0203:U00006R|Some Test^L300.0000^00024940^24356-8^Some Test Name^|||201003021319||| ||||201003021319|| TEST^TESTER^DR^HELLO^^^||||||201003021320||LAB|F||| TEST^TESTER^DR^HELLO^^^| OBX|1|ST|L300.0200^Clarity^000z4940^32167-9^Clarity|1|Clear||Clear|N|||F|||201003021320| OBX|2|ST|L300.0700^Colour^000z4940^5778-6^Colour|1|Yellow||Yellow|N|||F|||201003021320| OBX|3|NM|L300.1300^XGravity^000z4940^5811-5^XGravity|1|1.006||1-10|N|||F|||201003021320| OBX|4|NM|L300.1400^pH^000z4940^5803-2^pH|1|5.0||5.0-9.0|N|||F|||201003021320| OBX|5|ST|L300.1500^Protein^000z4940^5804-0^Protein|1|Negative|g/L|N|N|||F|||201003021320| '</span>
      <br />
      <br />
      <span style="color: blue">SELECT</span>
      <span style="color: #8000ff">@NumInstances</span>
      <span style="color: silver">=</span>
      <span style="color: maroon">(</span>
      <span style="font-style: italic; color: fuchsia">LEN</span>
      <span style="color: maroon">(</span>
      <span style="color: #8000ff">@Subj</span>
      <span style="color: maroon">)</span>
      <span style="color: silver">-</span>
      <span style="font-style: italic; color: fuchsia">LEN</span>
      <span style="color: maroon">(</span>
      <span style="font-style: italic; color: fuchsia">REPLACE</span>
      <span style="color: maroon">(</span>
      <span style="color: #8000ff">@Subj</span>
      <span style="color: silver">,</span>
      <span style="color: #8000ff">@Find</span>
      <span style="color: silver">,</span>
      <span style="color: red">''</span>
      <span style="color: maroon">)</span>
      <span style="color: maroon">)</span>
      <span style="color: maroon">)</span>
      <span style="color: silver">/</span>
      <span style="font-style: italic; color: fuchsia">LEN</span>
      <span style="color: maroon">(</span>
      <span style="color: #8000ff">@Find</span>
      <span style="color: maroon">)</span>
      <br />
      <br />
      <span style="color: blue">SELECT</span>
      <span style="color: #8000ff">@NumInstances</span>
      <span style="color: blue">AS</span> NumInstancesFound </span>
  </code>
  <h3></h3>
  <p>It'd take a tiny bit of modification to convert the logic to perform the REPLACE/LEN statement on a column, rather than a table.</p>
  <p>
    <font size="2" face="Courier New">
      <font color="#0000ff">SELECT</font>  myColumn       <br /><font color="#0000ff">FROM</font><font color="#800000">myTable</font><br /><font color="#0000ff">WHERE</font><font color="#800000">(</font><font color="#ff00ff"><i>LEN</i></font><font color="#800000">(</font><font color="#800000">myColumn</font><font color="#800000">)</font><font color="#c0c0c0">-</font><font color="#ff00ff"><i>LEN</i></font><font color="#800000">(</font><font color="#ff00ff"><i>REPLACE</i></font><font color="#800000">(</font><font color="#800000">myColumn</font><font color="#c0c0c0">,</font><font color="#800000">@mySubstring</font><font color="#c0c0c0">,</font><font color="#ff0000">''</font><font color="#800000">)</font><font color="#800000">)</font><font color="#800000">)</font><font color="#c0c0c0">/</font><font color="#ff00ff"><i>LEN</i></font><font color="#800000">(@</font><font color="#800000">mySubstring</font><font color="#800000">)</font><font color="#c0c0c0">&gt;</font><font color="#000000">1</font><font color="#008000"><i>--where we want to find 2 or more occurrences</i></font></font>
  </p>
  <h3>Any better ways?</h3>
  <p>Having solved the problem in a fairly string-manipulative way, I wondered if there were any other ways to achieve this in the database layer. The other possibilities:</p>
  <ul>
    <li>
      <strong>Write a CLR stored procedure</strong>. Here you could use your .NET Framework features to EASILY bust this out with a simple one-liner: String.Split() and Array.Length(). Better? Perhaps for maintainability or the abstraction of the logic. It's a bit heavy for my tastes. </li>
    <li>
      <strong>Set-based</strong>. Given that's what SQL is actually for, you could perform some gymnastics on the column/variable, but the amount of code would be much more than the REPLACE/LEN solution above. </li>
  </ul>
</span>