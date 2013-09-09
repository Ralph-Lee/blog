<!--Title:"Mirth: Converting HL7 v2.x to v3", PublishedOn:"2009-06-04T17:28:00", Intro:"The Goal: Have your HL7 v3 converted by Mirth to a specified HL7 v2 message.   The Prerequisites    " -->

<span>
  <p>
    <strong>The Goal:</strong> Have your HL7 v3 converted by Mirth to a specified HL7 v2 message. </p>
  <h2>The Prerequisites</h2>
  <ul>
    <li>Using Mirth 1.8+. This may work with previous versions, but this solution hasn't been tested on anything but 1.8. </li>
    <li>You know what your HL7 XML looks like. You have a sample message available. </li>
    <li>You know what you want the HL7 v2 to look like. </li>
    <li>You may be expecting repeating segments to be converted. That's OK, it will be covered here. </li>
  </ul>
  <h2>Let's Do It</h2>
  <table border="0" cellspacing="3" cellpadding="3" width="700">
    <tbody>
      <tr>
        <td valign="top" width="453">
          <p>1. Login to your Mirth Administrator, create a new channel. </p>
          <ul>
            <li>Give your channel a name </li>
            <li>Ensure the incoming datatype is set to HL7 v3 </li>
            <li>All the other defaults are OK </li>
            <li>Save </li>
          </ul>
        </td>
        <td valign="top" width="247">
          <a href="http://devtxt.com/Blog/blogimg/MirthConvertingHL7v2.xtov3_11A47/1_2.png">
            <img style="border-right-width: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px" title="1" border="0" alt="1" src="http://devtxt.com/Blog/blogimg/MirthConvertingHL7v2.xtov3_11A47/1_thumb.png" width="244" height="125" />
          </a>
        </td>
      </tr>
      <tr>
        <td valign="top" width="453">
          <p>2. Switch to the Source tab.</p>
          <ul>
            <li>Ensure your Listener port is something unique. </li>
            <li>All the other defaults are OK </li>
          </ul>
        </td>
        <td valign="top" width="247">
          <a href="http://devtxt.com/Blog/blogimg/MirthConvertingHL7v2.xtov3_11A47/1b_2.png">
            <img style="border-right-width: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px" title="1b" border="0" alt="1b" src="http://devtxt.com/Blog/blogimg/MirthConvertingHL7v2.xtov3_11A47/1b_thumb.png" width="244" height="117" />
          </a>
        </td>
      </tr>
      <tr>
        <td valign="top" width="453">
          <p>3. Switch to the Destinations tab. </p>
          <ul>
            <li>Give the first Destination a good name </li>
            <li>Change the connector type to anything </li>
            <li>Save </li>
          </ul>
        </td>
        <td valign="top" width="247">
          <a href="http://devtxt.com/Blog/blogimg/MirthConvertingHL7v2.xtov3_11A47/3_2.png">
            <img style="border-right-width: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px" title="3" border="0" alt="3" src="http://devtxt.com/Blog/blogimg/MirthConvertingHL7v2.xtov3_11A47/3_thumb.png" width="244" height="143" />
          </a>
        </td>
      </tr>
      <tr>
        <td valign="top" width="453">
          <p>4. Switch to the "Edit Transformer" menu option </p>
          <ul>
            <li>Click "Add New Step" </li>
            <li>Change the Type to "JavaScript". This walkthrough will take the JavaScript route as more code/mapping can be fit into one window. The other mappers may fit your style better! </li>
            <li>Give it an appropriate name, hit Enter </li>
          </ul>
        </td>
        <td valign="top" width="247">
          <a href="http://devtxt.com/Blog/blogimg/MirthConvertingHL7v2.xtov3_11A47/4_2.png">
            <img style="border-right-width: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px" title="4" border="0" alt="4" src="http://devtxt.com/Blog/blogimg/MirthConvertingHL7v2.xtov3_11A47/4_thumb.png" width="244" height="58" />
          </a>
          <br />
          <br />
          <br />
          <a href="http://devtxt.com/Blog/blogimg/MirthConvertingHL7v2.xtov3_11A47/4b_2.png">
            <img style="border-right-width: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px" title="4b" border="0" alt="4b" src="http://devtxt.com/Blog/blogimg/MirthConvertingHL7v2.xtov3_11A47/4b_thumb.png" width="244" height="27" />
          </a>
        </td>
      </tr>
      <tr>
        <td valign="top" width="453">
          <p>5. On the top right pane, click the Message Templates tab. </p>
          <ul>
            <li>This is where your XML HL7 v3 template will go. If you don't have a template, you can make one up for your experimental/development purposes! </li>
            <li>Find your XML HL7 v3 template, and paste it here. </li>
          </ul>
        </td>
        <td valign="top" width="247">
          <a href="http://devtxt.com/Blog/blogimg/MirthConvertingHL7v2.xtov3_11A47/5_2.png">
            <img style="border-right-width: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px" title="5" border="0" alt="5" src="http://devtxt.com/Blog/blogimg/MirthConvertingHL7v2.xtov3_11A47/5_thumb.png" width="208" height="244" />
          </a>
          <a href="http://devtxt.com/Blog/blogimg/MirthConvertingHL7v2.xtov3_11A47/5b_2.png">
            <img style="border-right-width: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px" title="5b" border="0" alt="5b" src="http://devtxt.com/Blog/blogimg/MirthConvertingHL7v2.xtov3_11A47/5b_thumb.png" width="206" height="244" />
          </a>
        </td>
      </tr>
      <tr>
        <td valign="top" width="453">
          <p>6. On the bottom right pane, find the Outbound Message Template. It will likely default to HL7 v3.0. </p>
          <ul>
            <li>Ensure the data type dropdown shows HL7 v2.x. </li>
            <li>Find your HL7 v2 template, and paste it here. Keep any default values that you have, but go through and prefix them with something unique to remind yourself to ensure that value is mapped from the HL7 v3 message. That'll help identify any mapping that has been missed. </li>
          </ul>
        </td>
        <td valign="top" width="247">
          <a href="http://devtxt.com/Blog/blogimg/MirthConvertingHL7v2.xtov3_11A47/6_2.png">
            <img style="border-right-width: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px" title="6" border="0" alt="6" src="http://devtxt.com/Blog/blogimg/MirthConvertingHL7v2.xtov3_11A47/6_thumb.png" width="219" height="244" />
          </a>
          <a href="http://devtxt.com/Blog/blogimg/MirthConvertingHL7v2.xtov3_11A47/6b_2.png">
            <img style="border-right-width: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px" title="6b" border="0" alt="6b" src="http://devtxt.com/Blog/blogimg/MirthConvertingHL7v2.xtov3_11A47/6b_thumb.png" width="219" height="244" />
          </a>
        </td>
      </tr>
      <tr>
        <td valign="top" width="453">
          <p>7. Click Message Trees </p>
          <ul>
            <li>You'll see a tree representation of both your messages. </li>
          </ul>
        </td>
        <td valign="top" width="247">
          <a href="http://devtxt.com/Blog/blogimg/MirthConvertingHL7v2.xtov3_11A47/7_2.png">
            <img style="border-right-width: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px" title="7" border="0" alt="7" src="http://devtxt.com/Blog/blogimg/MirthConvertingHL7v2.xtov3_11A47/7_thumb.png" width="156" height="244" />
          </a>
        </td>
      </tr>
      <tr>
        <td valign="top" width="453">
          <ul>
            <li>8.     Now it's time to match up the elements that you want to go from the v3 to the v2. Draggy-droppy time! Repeat this for EACH data field that you want moved from the v3 to the v2. </li>
            <li>Drill down into the Outbound Message Template. Find the v2 element that you want filled. (e.g. Patient Last Name at PID 5.1) </li>
            <li>Pick the Green dot icon. Drag it over and drop onto to the JavaScript window. </li>
            <li>You'll now have something like this in the JavaScript code window:              <br /><font size="3" face="Courier New">tmp[<span class="str">'PID'</span>][<span class="str">'PID.5'</span>][<span class="str">'PID.5.1'</span>]</font></li>
            <li>Type the equals sign at the end of this line. We're going to assign this value to something after the next step. Now you'll have this: </li>
          </ul>
          <p>
            <font size="3" face="Courier New">tmp[<span class="str">'PID'</span>][<span class="str">'PID.5'</span>][<span class="str">'PID.5.1'</span>] =</font>
          </p>
          <ul>
            <li>Go back to the Inbound Message Template Tree. Drill down into where the Patient Last Name is at. </li>
            <li>Drag and drop that Green dot icon over to the JavaScript window. Drop it off after the equals sign. </li>
            <li>You should now have something like this code in your JavaScript window:              <br /><font size="2"><font face="Courier New">tmp['PID']['PID.5']['PID.5.1']=msg['controlActProcess']['subject']['target']['identifiedPerson']['name']['family'].toString()</font></font></li>
            <li>Congrats, you've just mapped one property from v3 to v2. </li>
            <li>Repeat the above step as necessary for all the fields that you need transformed from v3 to v2. </li>
            <li>You code any steps by hand in JavaScript now that you have the basic syntax down. I'd suggest creating new Transformer steps for each v2 segment. It will help you find/fix problems that you find for a particular segment if/when they appear. It follows the idea of modularity. </li>
          </ul>
        </td>
        <td valign="top" width="247">
          <a href="http://devtxt.com/Blog/blogimg/MirthConvertingHL7v2.xtov3_11A47/8_2.png">
            <img style="border-right-width: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px" title="8" border="0" alt="8" src="http://devtxt.com/Blog/blogimg/MirthConvertingHL7v2.xtov3_11A47/8_thumb.png" width="244" height="183" />
          </a>
          <a href="http://devtxt.com/Blog/blogimg/MirthConvertingHL7v2.xtov3_11A47/8b_2.png">
            <img style="border-right-width: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px" title="8b" border="0" alt="8b" src="http://devtxt.com/Blog/blogimg/MirthConvertingHL7v2.xtov3_11A47/8b_thumb.png" width="218" height="244" />
          </a>
        </td>
      </tr>
      <tr>
        <td valign="top" width="453">9. Use this sample channel for the full solution.</td>
        <td valign="top" width="247"></td>
      </tr>
      <tr>
        <td valign="top" width="453">
          <p>10. Deploy your channel and use the Send Message command.</p>
          <ul>
            <li>Copy/paste a V3 message with all the values filled in. </li>
            <li>Click Send. </li>
            <li>In the "Encoded Message" tab of the Destination Connector, you'll see your output HL7 v2. </li>
          </ul>
        </td>
        <td valign="top" width="247"></td>
      </tr>
    </tbody>
  </table>
</span>