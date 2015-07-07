<!--{Title:"Getting the month name from a date in Google Sheets",PublishedOn:"",Intro:"Lamenting no MONTHNAME? It's easier with Sheets' TEXT() function",Tags:["google-docs"]}-->

If you have a Google Sheet where you require just the month of the date in its named format, you might've wanted `MONTHNAME` from back in Excel or MySQL.

Use this instead to use the date from cell `G2` and output its month's name.

    =TEXT(G2,"MMM")
    
[`TEXT()` on Google Sheets help](https://support.google.com/docs/answer/3094139).    

If you might not have a date in that source column, use an `IF`:

    =if(G2="","",text(G2,"MMM")) 

![](http://i.imgur.com/SdYbzvr.png)
