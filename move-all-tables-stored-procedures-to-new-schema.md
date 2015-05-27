<!--{PublishedOn:"27-May-2015",Title:"Move all SQL Server tables and stored procedures to a new schema",Intro:"Use this script to move all your objects to a new schema in your SQL Server database.",Tags:["sql-server","sql","tsql"]} -->

If you have all your objects in `dbo` (or any other schema), use this script to move them to a new schema.

<script src="https://gist.github.com/philoushka/b4a02e0a2c34e0e0c37d.js"></script>

Notes:

- this will catch `fn_diagramobjects` and `dbo.sysdiagrams` if you have the diagramming objects installed in that database.
