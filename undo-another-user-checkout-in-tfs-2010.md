<!--{Title:"Undo Another User's Checkout In TFS 2010",Intro:"Sometimes developers leave the dev team, or the organization. Sometimes you pave a dev machine with files checked out. Here's how to reset the checkout status for that user/workstation.",PublishedOn:"Mar 3 2014"}-->

    tf undo /workspace:machineName;domain\acct $/TeamProject/Path/To/Files/* /server:yourTfsServerName/TeamCollection


Or maybe you'd rather nuke the user's workspace,

    tf workspace /delete machineName;domain\acct
    