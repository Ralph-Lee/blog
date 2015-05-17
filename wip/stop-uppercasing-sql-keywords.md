<!--{Title:"Stop Uppercasing your SQL keywords",Intro:"Your IDE/editor already makes it readable.",Keywords:["sql","software-development","habits"],PublishedOn:"16-May-2015"} -->

One day I caught myself doing what I've always done - capitalizing SQL keywords as I'm writing code: `SELECT`, `FROM`, `WHERE`, etc.

Why is it engrained as SQL writers that we uppercase SQL keywords in our DML and DDL statements?

For as long as I've been a developer, I've seen:

- my teams' *Official Documented Recommended Best Practice Coding Standards.doc* has included a section stating thou shalt uppercase your SQL keywords because that's how it's always been done. Oh, and it's *easier to read*.
- [samples](https://msdn.microsoft.com/en-us/library/ms187731.aspx), [documentation](http://dev.mysql.com/doc/refman/5.6/en/delete.html), [examples](http://docs.oracle.com/cd/B10501_01/server.920/a96540/statements_103a.htm#2066379) from all the vendors using uppercase.
- developers have followed suit. [Questions and answers online](http://stackoverflow.com/questions/292026/is-there-a-good-reason-to-use-upper-case-for-sql-keywords) largely follow this practice, in my observation.


### It's Not *More* Readable

If your SQL is contained ina stored procedure, or otherwise standalone from your web application, the chances are high that you're using an editor that provides keyword sytling/colorization.

Notepad++, Sublime Text, Atom, 




### Intertia

Choosing to do something b

### Why Are Samples & Documentation Capitalized Anyway?

It's not a coding style choice with rationale, but a technical documentation style choice.

Vendor documentation has its own style guide. Keywords are capitalized as a rule. Bold and italic denote other characteristics. 

I suspect that developers took technical documentation styles and copy+pasted into their code, and the practice snowballed into dev culture and has become the default coding style. 

<a href="https://technet.microsoft.com/en-us/library/ms177563(v=sql.90).aspx""><img src="http://i.imgur.com/i24BuVu.png"/></a>

