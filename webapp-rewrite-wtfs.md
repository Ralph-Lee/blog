<!--{Title:"This Ancient WebApp That I Enhanced Had A Lot Of WTFs", PublishedOn:"", Intro:"A collection of WTFs from a web application that I was tasked to modernize/fix."}-->

This is just a collection of WTFs from an ASP.NET WebForms project that I was tasked to modernize/fix. The app had a single webform with:

* 2245 lines of markup
* methods with 170 parameters
* [params commented out when calling said methods](http://i.imgur.com/pCYjkYN.png)
* roll your own JavaScript injection from ASP.NET code-behind 
* 


###HTML###

Plain old invalid 

    <td style="width: 10">

**Every single text box** had this attribute:

    Style="width: 100%"

Tables for layout. Input elements in tables. **Tables using a blank cell for spacing**.

    <td></td>
    <td>&nbsp;</td>
    <td class="nowrap" align="right">&nbsp;</td>

DropDownList items repeating their values for no reason. `Value` will simply do; display will inherit from `Value` when `Text` is not specified.

    <asp:ListItem Value="Foo">Foo</asp:ListItem>

Nonsensical table attributes

    <tr>
        <td style="width: 50%">Medications</td>
        <td style="width: 75%">Dosage</td>
    </tr>

###CSS###

Giving an element an `id` attribute, but using inline styles.

     <table id="tblInclude" style="font-weight: bold; color: black; width: 100%" cellspacing="1" cellpadding="0" border="0">
    