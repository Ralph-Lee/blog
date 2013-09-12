<!--{Title:"Code Blowout", PublishedOn:"2009-04-26T01:23:48", Intro:"Taking the advice of Scott Hanselman today. It's a code garage sale. Everything of worth (you be the"} -->

Taking the [advice of Scott Hanselman today](http://www.hanselman.com/blog/SocialNetworkingForDevelopersConferenceTalkVideo.aspx); it's a code garage sale. Everything of worth (you be the judge!) must be opened up and freed for WAY below cost. 
###SQL Server ADO Abstractor/Wrapper###

*never write a line of ADO.NET setup code again!*

The first offering is a .NET class that you can reference in any project that needs to call SQL Server stored procedures. It takes care of spinning up the ADO.NET objects and closing them (mostly) when appropriate. 
Use it to: 

* ExecNonQuery 
* ExecScalar 
* ExecDataReader 
* ExecDataSet 

All you've got to do is supply it with: 

* a connection string (as managed by your own datalayer and/or app.config. Hardcode a string into it, go ahead, see if anyone cares), 
* a stored procedure name 
* any parameter names and values that you need. 

Another great feature here is that this class implements the `IDisposable` interface. This means you can use it with the `Using` statement/construct, and it will go out of scope when execution steps out of the Using statement/construct. This saves you a line or two of code. 
 

**C#**

    // run a non-query stored procedure
    try{                
        using (SqlAdoAbstractor db = <span class="kwrd">new SQLDataHelper(someConnectionString))
        {
          db.AddParam("@MyNumericIdentifier", 1);
          db.AddParam("@MyString", "Hello World");
          db.ExecNonQuery("MySproc");
        }
     }
    catch (Exception ex) {throw; }
 
    // get a datareader
    try{  
        using (SqlAdoAbstractor db = new SQLDataHelper(someConnectionString)) 
        {
           db.AddParam("@SomeNumericIdentifier", 1);
           SqlDataReader dr = db.ExecReader("ListAllEmployeesByRegionID");
           //iterate through your datareader as necessary
           while (dr.Read()){
               //dr["EmpID"].ToString();
           }
           dr.Close();  //you must close the open reader 
         }
      }
    catch (Exception ex) { throw; }
 
  
**VB** 

    Using help As SqlAdoAbstractor =  New SqlAdoAbstractor(someConnectionString)
      help.AddParam("@MyNumericIdentifier", 1)
      help.ExecNonQuery("MySproc")
    End Using

    Using help As SqlAdoAbstractor =  New SqlAdoAbstractor(someConnectionString)
       help.AddParam("@MyNumericIdentifier", 1)

       Dim dr  As SqlDataReader = help.ExecReader("MySproc")

        While dr.Read
            'dr("EmpID")
        End While

      dr.Close 'you must close the datareader yourself
    End Using

