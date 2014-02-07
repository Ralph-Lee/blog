<!--{Title:"SQL terminiology",PublishedOn:"",Intro:"SQL terminology because it's important."} -->

I sometimes see questions on StackOverflow or forums posts with loose or incorrect terms like:

* subselect
* inner select
* inner subselect

Let's get the terminology straight:

###Subquery###
These are self contained. They have no dependency on the outer query that they're being referenced by.


    SELECT  CompanyID, CompanyName
    FROM    dbo.Company
    WHERE   SharePrice = (SELECT MAX(Price) FROM dbo.DayTrades WHERE TradeDate = 'Aug 1 2010');


###Correlated Subquery###

The subquery depends on the outer query for its values, and is executed repeatedly, once for each row that might be selected by the outer query.

    SELECT C.CompanyName, E.AreaPopulation 
    FROM dbo.Company    AS C
    JOIN dbo.YearSales  AS S ON S.CompanyID = C.ID      
    WHERE S.SalesAmount <
        (SELECT CityName, 
         FROM dbo.City 
         WHERE C.Country = sp.BusinessEntityID) ;



###Derived table###

Here the Sales table is queried to create a small derived table, and that resultset is used in an inner join with the Company table.
     
    SELECT TOP 10 C.CompanyName, S.SalesAmount 
    FROM   dbo.Company AS C
    JOIN   (SELECT CompanyID, SUM(Sales) AS SalesAmount
            FROM   dbo.Sales 
            WHERE  DATEPART(YYYY,SaleDate) = 1998
            GROUP BY CompanyID
            ) AS S ON S.CompanyID = C.ID
    ORDER BY S.SalesAmount DESC;
 
         
            
    


###Inline###

###CTE###
Defined using a `WITH` clause
Not nestable, but can define multiples; can reference each other.
Refer to it multiple times in the outer query (i.e. join on itself)
