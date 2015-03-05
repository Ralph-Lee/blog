<!--{PublishedOn:"05-Mar-2015",Title:"Removing single lines of comments using Visual Studio find/replace regex",Intro:"I wanted to remove the entire comment line in a handful of unit test classes."}-->

I found an older project that had a lot of unit test methods. Unit tests are great obviously, but in this case, they had single line comments that were distracting and added no value really. This copypasta is repeated hundreds of times. Yuck.

    [TestMethod]
    public void AddCustomer_ShouldFailWhen_NameIsBlank()
    {
        var cust = new Customer();

        //arrange           
        cust.FirstName = "";

        //act 
        bool isValid = cust.IsValid();

        //assert
        Assert.IsFalse(isValid, "First name is blank"));
    }

I removed these single line comments (the entire line) by using the Visual Studio find and replace with regex. I wanted to find and remove lines that contained only these comments.

I'm no regex expert, and this was a bit of a learning exercise.

Use this regex in Visual Studio to find and replace single line comments with a single word. Perhaps it'll be a good starting off point if you need to do something similar in VS.

	^\s+//(arrange|act|assert)\s+\n	

- starts with whitespace `^\s+`
- C# comment `//`
- any of the words arrange, act, or assert (it's case insensitive) 
- any whitespace `\s+`
- a newline `/n`

Here's the result showing positive matches, and excluding comments that should not be removed.

![](http://i.imgur.com/I508AFw.png)

[VS 2013 has a decent help pane](http://i.imgur.com/K2gr3lZ.png) showing some help, but it's curiously difficult to find (don't worry though, regexes are notoriously easy, right?).

The best information for VS 2012+ regex find/replace is at [MSDN's Using Regular Expressions in Visual Studio](https://msdn.microsoft.com/en-us/library/2k3te2cs.aspx). Be warned though that some advice there could be simpler (i.e. their recommendation for whitespace is `(?([^\r\n])\s)` when a simple `\s+` would suffice. 

**Outdated Info On The Web**

The discussion you might find out on Stack Overflow and on the web about Visual Studio's Find and Replace regex is largely outdated.

In Visual Studio 2012, the regex engine was overhauled to use more standard regex operators, rather than older VS-specific regex operators (like `:b` for whitespace). There were [frustrations using non-standard regex](http://blog.codinghorror.com/the-visual-studio-ide-and-regular-expressions/).



