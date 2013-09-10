<!--{Title:"Randomizing Order of Your List or Array using LINQ", PublishedOn:"2009-11-05T05:07:34", Intro:"Perhaps you've got a collection of objects that you want ordered/sorted. I recently did. Perhaps you"} -->


Perhaps you've got a collection of objects that you want ordered/sorted. I recently did. Perhaps you want them displayed in a non-deterministic manner or sorted randomly each time you write to an HTML view or otherwise consume that collection. Indeed, I did. (OK, lame shtick over...)
###`Randomize()`###
So imagine we're working with a List of Customers.

<img style="border-right-width: 0px; margin: 0px 10px 0px 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px" title="data" border="0" alt="data" align="left" src="http://devtxt.com/blog/blogimg/RandomizingOrderofYourListorArrayusingLI_11BF0/data_thumb.png" width="330" height="135" />

Problem being, we don't really have anything non-deterministic to work with. We could do this in SQL Server:

      SELECT *,
	        (sin(Cust.ID * rand())) AS R
	   FROM Cust
	   ORDER BY R;
  
  
This though, puts your presentation logic in your data tier. Maybe you don't care, maybe it's not a big price to pay. I wanted to take it up to the presentation tier and do this sorting right before binding or writing these objects to the page.
Taking the <a href="http://brunosilva.net/list-random-order-in-net-using-linq/534/">lead from Bruno Silva</a>, I immediately realized this was the seed of the algorithm that I was looking for. Here's my modification of Bruno's algorithm:
  
    Random r = new Random();
	myCusts.OrderBy(x=>(r.Next())); 
	//bind this, or use in a foreach
  
The call to `r.Next()` is obviously the key. Each object as it is evaluated in the `OrderBy()` will get a new random number associated with it. Celebrate good times! 
###Turn It Into an Extension Method###
I haven't written much here about how much I love extension methods in the .NET CLR 3.0. I can't count the number of times that I've created a static 'utility' method that did something like this:

* take in an object of some kind. 
* modify it. 
* return it back to the caller. 
* caller reassigns the return back into the object that it calls. 

 
  
  Rather than the above, I've created an extension method that I'll be able to call whenever for any collection that implements `IEnumerable<T>`. It's trivial then to write the extension method for `IQueryable`.
  

<a href="http://www.extensionmethod.net">
<img style="border-right-width: 0px; margin: 0px 10px 0px 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px" title="ExtensionMethod" border="0" alt="ExtensionMethod" align="left" src="http://devtxt.com/blog/blogimg/RandomizingOrderofYourListorArrayusingLI_11BF0/ExtensionMethod_thumb.png" width="233" height="66" />
</a> I've <a href="http://extensionmethod.net/Details.aspx?ID=236">submitted my Randomize() extension method</a> over at <a href="http://www.ExtensionMethod.net">ExtensionMethod.net</a>. What a great site, by the way, kudos to those guys for taking user submissions and helping grow the use of this feature in .NET.


<a title="http://extensionmethod.net/Details.aspx?ID=236" href="http://extensionmethod.net/Details.aspx?ID=236">http://extensionmethod.net/Details.aspx?ID=236</a>

  
    public static IEnumerable<T> Randomize<T>(this IEnumerable<T> target)      
	{       
	    Random r = new Random();
		return target.OrderBy(x=>(r.Next()));
    } 
  