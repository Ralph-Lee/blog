<!--{Title:"ASP.NET Cookie Wrapper Class - Code Garage Sale", PublishedOn:"2009-12-11T03:06:32", Intro:"Here's a class that'll make your life easier when you want to deal with saving information in cookie"} -->

Here's a class that'll make your life easier when you want to deal with saving information in cookies on your user's browser. Everyone needs a wrapper class for all those external data-stores - session, cookies, file system, web.config and app.config, registry, log files, etc. Here's a class usable in ASP.NET Web Forms and ASP.NET MVC.

###Wrapper Class###
Drop this into your web project, and refer to its static properties to get to your cookies. Any and all simple datatypes can be used, and heck, even serialized versions of your POCO objects can be saved/retrieved here. Image if you wanted to save those shopping cart items, a collection of user prefs, or whatever, you could simply override the `.ToString()` method in your custom class.

###Just Make Properties###
The key pattern here is that you *create new properties* for each piece of data that you want to save/retrieve. This solves the problem of:

* having to remember strings all over your project. 
* ensuring no duplicates exist imagine if multiple developers created a defect by using the same string indexer for their cookie, and ended up stomping each other's value? 
* typos in cookie names. 

Instead, the <strike>data access</strike> cookie-retrieval is done through named properties. This solution solves all those potential problems. Here's a peek at one of these properties.

    public static string UserFullName
    {
        get { return GetCookieVal(CookieItem.UserFullName); }
        set { UpdateCookieVal(CookieItem.UserFullName, value, 365); }
    }

###Enums Help###

With the aforementioned 'remembering strings' problem, the pattern that this class uses relies internally on an enum to handle the naming of the value in the cookie. The enum will boil down to an integer, but really we don't care what the key's is actually stored as in the cookie. We really only care to access/read/save the values constantly and easily from our calling code.

###Download###

[Download the cookie class](http://devtxt.com/blog/downloads/cookie/cookie.cs.txt), or copy/paste from below. You can see that I pre-loaded it with some amusing properties.
Be sure to change the ApplicationName const at the top.
Special thanks to Special-K!

    using System;
    using System.Web;

    public class Cookies
    {
        private const string ApplicationName = "MyCoolApplication";

        private enum CookieItem
        {
            UserGuid,
            UserFullName,
            UserLoginExpiry,
            UserHadForBreakfast,
            UserTimezone
        }
 
        // All cookie values are accessible by public  static  methods. 
        // No typos/duplicates are possible from calling code!
   
	    public static string UserFullName
	    {
            get { return GetCookieVal(CookieItem.UserFullName); }
            set { UpdateCookieVal(CookieItem.UserFullName, value, 365); }
	    }

	    public static  Guid UserGuid
	    {
            get { return new Guid(GetCookieVal(CookieItem.UserGuid)); }
            set { UpdateCookieVal(CookieItem.UserGuid, value.ToString(), 365); }
	    }

	    public static  DateTime UserLoginExpiry
	    {
            get { return DateTime.Parse(GetCookieVal(CookieItem.UserLoginExpiry)); }
            set { UpdateCookieVal(CookieItem.UserLoginExpiry, value.ToString(), 365); }
	    }

	    public static string UserHadForBreakfast
	    {
            get { return GetCookieVal(CookieItem.UserHadForBreakfast); }
            set { UpdateCookieVal(CookieItem.UserHadForBreakfast, value, 1); }
	    }

	    private static string GetCookieVal(CookieItem item)
	    {
            HttpCookie cookie = GetAppCookie(false); //get the existing cookie
            return (cookie != null && (cookie.Values[item.ToString()] != null)) //value or empty if doesn't exist
				? cookie.Values[item.ToString()]
				: string.Empty;
	    }

	    private static void UpdateCookieVal(CookieItem item, string val, int expireDays)
	    {
            //get the existing cookie (or new if not exists)
            HttpCookie cookie = GetAppCookie(true);

            //modify its contents & meta.
            cookie.Expires = DateTime.Now.AddDays(expireDays);
            cookie.Values[item.ToString()] = val;

            //add back to the http response to send back to the browser
            HttpContext.Current.Response.Cookies.Add(cookie);
	    }

	    private static	HttpCookie GetAppCookie(bool createIfDoesntExist)
	    {
            //get the cookie or a new one if indicated
            return HttpContext.Current.Request.Cookies[ApplicationName] 
			?? ((createIfDoesntExist) ? new HttpCookie(ApplicationName) : null);
        }
    }
