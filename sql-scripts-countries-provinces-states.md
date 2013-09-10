<!--{Title:"SQL Scripts – Countries, Provinces, States", PublishedOn:"2009-06-17T09:29:38", Intro:"A new project has me writing up the same old Country/State/Province reference tables. My feeling is "} -->


A new project has me writing up the same old Country/State/Province reference tables. My feeling is that these static (fairly static) entities should be normalized and referenced by foreign key. I had asked a StackOverflow question on whether other developers had this prebuilt set of <a href="http://stackoverflow.com/questions/994539/sql-script-to-create-country-state-tables">country/state/province create scripts</a> in their toolbelt.
This is a code garage sale! Never again worry about creating and loading country and province/state data.
###Create The Schema###
Create your Country and State tables with this <a href="http://devtxt.com/blog/downloads/sql/CreateCountryAndState.sql.txt" target="_blank">CREATE SQL script</a>. As always, name the State table whatever you like (ProvState, tblState, whathaveyou).  Some folks don't like table names to be the same as reserved keywords. 

<img style="border-right-width: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; margin-left: 0px; border-left-width: 0px; margin-right: 0px" title="country_state_erd" border="0" alt="country_state_erd" src="http://devtxt.com/Blog/blogimg/SQLScriptsCountriesProvincesStates_ED30/country_state_erd_thumb.png" width="359" height="138" />

###Populating ###
Here is a collection of insert scripts to get the data populated quickly for you.

* 
  <a href="http://devtxt.com/blog/downloads/sql/Canada_Provinces.sql.txt" target="_blank">Canada_Provinces.sql</a>
    
* 
  <a href="http://devtxt.com/blog/downloads/sql/USA_States.sql.txt" target="_blank">USA_States.sql</a>
    
* 
  <a href="http://devtxt.com/blog/downloads/sql/Mexico_States.sql.txt" target="_blank">Mexico_States.sql</a>
    

###Have Fun###
Some developers go further down the normalization path by creating a City table, but I usually pass on that. As always, that decision is largely dependant on the problem domain or task at hand. 
Yippee for me – that'll be fun trying to reconcile data when someone <a href="http://www.epodunk.com/top10/misspelled/index.html" target="_blank">enters their city location incorrectly</a> as "St. Paul" / "Tuscon" / "Pittsburg" instead of Saint Paul / Tucson/ Pittsburgh.
If you would like to contribute an insert script or two for a country that you would like to see here, just <a href="http://devtxt.com/blog/email.aspx">contact me</a> with your script!
