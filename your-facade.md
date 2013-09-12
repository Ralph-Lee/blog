<!--{Title:"Your Façade", PublishedOn:"2010-09-07T06:09:53", Intro:"A recent answer at stackoverflow on architecting systems. the question dealt with a system needing t"} -->


A recent answer at stackoverflow on architecting systems. the question dealt with a system needing to write and read from a queue. I chimed in with my answer suggesting catching the message with a façade, and sending another message to the internal system.
###Put a Façade in Front of Your Public Application###
If you have an application, you definitely will want to make your app more secure. One way is to add a layer of abstraction – the façade.

**Never expose your database to your DMZ.** Use firewall rules to ensure that calls from the public internet AND your DMZ machine cannot hit your database machine. 

**What If Your DMZ Machine is Pwned?** Imagine your public-facing web app, web server or operating system has a security vulnerability or otherwise compromised. Even root access is damaging. This setup will ensure that a compromised DMZ system/app cannot harm your data.

**Create an abstraction. **Deploy an application that will handle those calls from the users out in the public internet. Have this application call into your business logic deployed on your internal network, the network that the database is on.  The web service application may use a different object model than the façade application. The key to the security here is the parameterization and serialization of the data from the DMZ to the internal web service. 
Don't blindly trust calls from your DMZ machine.
###How It Works###
We have 3 nodes in this setup.

* DMZ (public facing) – this machine is exposed to the internet and services requests from customers. This could be a website or web service, but it doesn't have direct access to your database.
* Internal Web Service – your public-facing application calls into this service. This machine is NOT accessible from the public internet by firewall. The firewall does allow traffic from the DMZ machine to this machine via port 80 only.
* Database – this machine is also shielded from the public internet by firewall. No traffic should hit this machine from anywhere but the internal network (i.e. the internal web service).

<img style="background-image: none; border-bottom: 0px; border-left: 0px; padding-left: 0px; padding-right: 0px; display: block; float: none; margin-left: auto; border-top: 0px; margin-right: auto; border-right: 0px; padding-top: 0px" title="diag" border="0" alt="diag" src="http://devtxt.com/blog/image.axd?picture=diag.png" width="622" height="450" />

###Applications###
2 applications are needed here. one is the façade, or public facing service, and the second is the web service actually doing the work.

* Façade – this application fields the requests from the user. This could be a web service or some kind of HTTP handler. It could be a SOAP or WCF web service, REST URL, or a form submission. Anywhere this application takes data from the user can be used to call our internal web service. The idea here is that the façade is an abstraction layer, and doesn't write to a database. It creates a new call, using a new object model, to the internal web service. Any data sent by the user (malicious SQL injection script or not), will be inserted into this new message, specifically and purposefully by the application. If any malformed data or actions are sent to the façade, the application should handle it, or drop the request, rather than pass it along to the internal service. 
* Internal Web Service – The application accepts a web service call from the façade (or other internal services) to get to the database. It forces its callers to use its own object model, and provides   This ensures that It reads/writes to the database as per normal. 
