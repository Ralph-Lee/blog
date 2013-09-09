<!--Title:"Be a Green IT Hero", PublishedOn:"2009-04-27T06:33:53", Intro:"Got wind of a great idea. Some organizations are making an effort to reduce printing, print devices " -->

<span>
  <p>Got wind of a great idea. Some organizations are making an effort to reduce printing, print devices and printing costs. Please note, this isn't my original idea, and <a href="http://en.wikipedia.org/wiki/IANAL">IANAEA</a> (I am not an Exchange admin). I am just being loud about it, perhaps you'll turn out to be a green hero where you work. This will work for any SMB or large organization.</p>
  <p>Some organizations work like this: someone is assigned the fax machine, and part of their job is to take care of the incoming faxes. Holy <a href="http://www.thefreedictionary.com/humdrum">hum-drum</a>, Batman!</p>
  <h2>Lessen the burden on those fax-gathering-folk</h2>
  <ul>
    <li>Acquire a fax machine that will transform an incoming fax to an email with an attachment (pdf, tif or whatever). Obviously the smaller filesize the better. </li>
    <li>Have that incoming fax document emailed to an account that only deals with email. </li>
    <li>Be nice though. Setup their email client with a new folder and rule so that emails from fax@mycompany.org go to only one folder. </li>
    <li>Perhaps have that account checked only X times a day to limit the interruptions to the human. </li>
    <li>They can then filter and send to the recipients. </li>
    <li>This is a human-powered time-consuming spam filtering mechanism as well. Just imagine all the restaurants, travel agents, and sundry fax spammers whose hopes and dreams are crushed by this system. </li>
    <li>Encourage the end-recipients not to print that fax. </li>
  </ul>
  <h2>Level Up</h2>
  <p>Now that you are saving paper, go the extra step. Save some human time. Let's assume you are using Microsoft Exchange and Outlook. Any version will work.</p>
  <ul>
    <li>
      <a href="http://support.gfi.com/manuals/en/fax12/fax12manual-1-037.html">Create yourself a new Public Folder</a> - one per fax line that you have. Do you have 'private' fax lines for the HR types, or director types? <a href="http://www.msexchange.org/tutorials/Public-Folder-Basics-Part1.html">Lock it down with Active Directory permissions</a>! Simple stuff! </li>
    <li>Modify the 'to' email address on the fax machine to send to that new Public Folder. </li>
    <li>Direct people to visit that Public Folder when they're expecting a fax. </li>
    <li>Build your own set of business rules around when to remove items from this Public Folder. i.e. If the fax is meant for you, and only you, then delete or move it to your personal Inbox as you will. Fwd to anyone concerned is also appropriate. Standard email rules apply here as well (etiquette, attachment size, etc). </li>
    <li>Have people add that Fax folder to their Favorites in Outlook Public Folders. </li>
  </ul>
  <p>Write a nice how-to document for people on how to visit that Public Folder. How to Move/Copy to their inbox. Set the business rules here. Obviously management buy-in will be important.</p>
  <p />
  <h2>"So What?! It's just a few pieces of paper!"</h2>
  <p>Well let's do the math. Here's my quick and dirty formula.</p>
  <ul>
    <li>20 faxes per day. </li>
    <li>.0055 hours (20 seconds) to analyze a fax and determine who to redirect it to, and forward the email. (20 seconds /3600 seconds per hour = .0055 hours) </li>
    <li>$15 per hour for a human </li>
    <li>10 cents per page printed. Assume that includes TCO items: paper, printer toner (galaxies more for ink), printer maintenance, amortized cost of the printer. </li>
  </ul>
  <blockquote>
    <p>20 x (($15 x .0055) + $.10) = $3.65 per day</p>
    <p>$3.65 x <a href="http://wiki.answers.com/Q/How_may_work_days_in_a_year">255 work days per year</a> = $930.75</p>
  </blockquote>
  <p>My example company is spending $930 a year on receiving faxes. I know this number is dwarfed by the time-costs of email, but it's something to look at. I know the fax-hunter-gatherer would love to have that task melt away.</p>
</span>