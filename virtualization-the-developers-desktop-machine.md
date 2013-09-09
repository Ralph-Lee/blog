<!--{Title:"Virtualization – The Developer’s Desktop Machine", PublishedOn:"2009-10-26T02:24:11", Intro:"As developers, we usually have these things (file most of these under 'duh!'):            well power"} -->

<span>
  <p>As developers, we usually have these things (file most of these under 'duh!'):</p>
  <ul>
    <li>
      <strong>well powered desktop machines</strong>. OK, mostly desktop. Maybe you've got a big honkin' laptop-with-great-specs-but-called-a-desktop-replacement. </li>
    <li>a need to <strong>deploy/test/mess about in another machine</strong>. You don't want the cruft of your development machine to get in the way of the operation of your target environment. </li>
    <li>the <strong>desire to test out a new tool</strong>: a beta/RC OS, a new beta of Visual Studio, a new server product (SVN), a community technology preview (CTP), or some other package that you just don't want to push to your current Dev server. Hands up if you even have a 'Dev' server other than your machine? </li>
  </ul>
  <p>In the last 4 years, I've usually run into something dev-related that I really wanted to get my hands dirty with. Yes, the <a href="http://www.codinghorror.com/blog/archives/000916.html">shiny-object developer syndrome</a>. The old way was to install that piece on your Dev machine. Months would go by, and you'd (theoretically) dirty up your registry, and contribute to the eventual slowdown of your Windows install. The logical solution at that point would be to format and repave your Dev machine. Looking forward, and a bit contrary to the point I was just making, I don't get the sense that Windows 7 will succumb to the bloat and eventual slowdown. That said, it doesn't invalidate the need &amp; convenience of virtualization.</p>
  <h2>Free &amp; Many Options</h2>
  <p>Enter the full on assault of free options for virtualizing operating environments. We really have an embarrassment of riches. Perhaps I am late to the party, but the <em>freeness</em> of the VM solutions is jolting:</p>
  <ul>
    <li>
      <a href="http://www.microsoft.com/windows/virtual-pc/support/virtual-pc-2007.aspx">Microsoft Virtual PC</a>
    </li>
    <li>
      <a href="http://www.virtualbox.org/">Sun VirtualBox</a>
    </li>
    <li>
      <a href="www.vmware.com/products/server">VMWare Server</a>
    </li>
    <li>
      <a href="www.vmware.com/products/esxi">VMWare ESXi</a>
    </li>
  </ul>
  <h2>My Fave Virtualization Platforms</h2>
  <p>Doubtless you know the benefits of running VMs. Lower TCO in terms of number of physical metal boxes, lower cost of electricity to power and cool, etc. For me, it's the ability to pop (uh, Remote Desktop) into a new machine on the 'network' and install/configure/test whatever I am working on. The ability to mount ISOs for OS and app installation is just another kick ass speed benefit. Even better are the instances where you can download a pre-configured VM. Check out <a href="http://almworks.com/vbs/overview.html">ALMWorks' turnkey Bugzilla</a> and <a href="http://www.bing.com/search?q=free+subversion+virtual+machine">Subversion virtual machines</a>.</p>
  <h3>
    <a href="http://www.virtualbox.org/">Sun VirtualBox</a>
  </h3>
  <p>
    <a href="http://devtxt.com/blog/blogimg/VirtualizationTheDevelopersDesktopMachin_DDA9/sun_virtualBox.jpg">
      <img style="border-right-width: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; margin-left: 0px; border-left-width: 0px; margin-right: 0px" title="sun_virtualBox" border="0" alt="sun_virtualBox" align="left" src="http://devtxt.com/blog/blogimg/VirtualizationTheDevelopersDesktopMachin_DDA9/sun_virtualBox_thumb.jpg" width="164" height="93" />
    </a> Great product here. Easy creation of virtual hard drive disks, mount ISOs, and a nice looking application overall. Its config files are all XML, and messing around with file locations is easy. The one thing about VirtualBox is that it doesn't run VMs out of a single window, but rather opens a new window in your (in Windows anyway) taskbar. This is different from VMWare, likely due, in part, to VMware being headless.</p>
  <p>My big want out of VirtualBox is the ability to run headless. It's the one big feature that would allow me to adopt it as my one and only VM product on the Developer's machine. Sun releases this product for Windows, Mac and Linux hosts, and I think they've done a great job. The release frequency is stunning! Keep up the good work, Sun! <strong>8/10</strong></p>
  <h3>
    <a href="www.vmware.com/products/server">VMWare Server</a>
  </h3>
  <p>
    <a href="http://devtxt.com/blog/blogimg/VirtualizationTheDevelopersDesktopMachin_DDA9/vmwareserver.png">
      <img style="border-right-width: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; margin-left: 0px; border-left-width: 0px; margin-right: 0px" title="vmware-server" border="0" alt="vmware-server" align="left" src="http://devtxt.com/blog/blogimg/VirtualizationTheDevelopersDesktopMachin_DDA9/vmwareserver_thumb.png" width="164" height="101" />
    </a> I first got into VMWare Server as I was encouraged to run Windows 2003 on the job. Previously I had only used the Microsoft Virtual PC products, which were decent. The killer bit that won me over on VMWare Server was that it is HEADLESS. The machines can startup and shutdown in parallel with your host OS. Excellent feature for those who would expect those services to be up 100% of the time that your dev machine is (Dev or Test SQL Server, Active Directory services, build machine, etc). This is basically gives you the Ron Popeil method of running additional machines: set it, and forget it (curse you, 90's infomercials).</p>
  <p>The kicker for me today is that VMWare does NOT make Windows 7 64-bit signed drivers. Absolute killer for me during the Release Candidate of Windows 7, and still today at Win7's release. Reading the forums and related searches, it appears there were hacks for Vista 64, but the important part here is that Microsoft REQUIRES signed drivers for 64 bit systems today, starting with windows 7. <em>VMWare, please</em>! Get those signed drivers out! </p>
  <p>There's one thing about the latest releases of VMWare Server that gets me. The 1.x versions all had built in console on the host where you defined/configured/started/stopped your VMs. It was a nice presentation with console UI elements coming in an .exe. The 2.x releases have moved to a web-based console. I much preferred the 1.x presentation.</p>
  <p>I'm still using in on the job with Win7 32-bit, and it works well! <strong>9/10</strong></p>
  <h3>
    <a href="http://www.microsoft.com/windows/virtual-pc/download.aspx">Microsoft Virtual PC</a>
  </h3>
  <p>
    <a href="http://devtxt.com/blog/blogimg/VirtualizationTheDevelopersDesktopMachin_DDA9/virtual_pc.jpg">
      <img style="border-right-width: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; margin-left: 0px; border-left-width: 0px; margin-right: 0px" title="virtual_pc" border="0" alt="virtual_pc" align="left" src="http://devtxt.com/blog/blogimg/VirtualizationTheDevelopersDesktopMachin_DDA9/virtual_pc_thumb.jpg" width="164" height="114" />
    </a> This was my first foray into VM'ing. I think XP was the modern OS at the time, and it was a great introduction to testing out changes or running other apps that I didn't want on my machine. The kicker again here was that the system was not headless. Today, you'll run <a href="http://www.microsoft.com/windows/virtual-pc/support/virtual-pc-2007.aspx">Virtual PC 2007 on XP or Vista hosts</a>, while Win7 has the 'year' moniker dropped.</p>
  <p>The biggest one was a Toshiba voicemail/PBX management app that ONLY ran on XP machines that were NOT on a domain. What a pile of disappointment. The phone technician who installed the system had to be called out every time the company wanted to adjust the phone system (change a number, a name/label on the phone's display, or any options on the phone system overall). It turns out he simply was running this web app on IIS on his laptop. He just needed to tweak the IP address in the app to match the customer's phone system. One day I asked him how to DIY, and he suggested to run this web app on my machine. It was a perfect candidate for virtualization. Thanks MS Virtual PC 2004! <strong>7/10</strong></p>
  <h3>
    <a href="www.vmware.com/products/esxi">VMWare Server ESXi</a>
  </h3>
  <p>
    <a href="http://devtxt.com/blog/blogimg/VirtualizationTheDevelopersDesktopMachin_DDA9/vmwareesxi.png">
      <img style="border-right-width: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; margin-left: 0px; border-left-width: 0px; margin-right: 0px" title="vmware-esxi" border="0" alt="vmware-esxi" align="left" src="http://devtxt.com/blog/blogimg/VirtualizationTheDevelopersDesktopMachin_DDA9/vmwareesxi_thumb.png" width="160" height="136" />
    </a> This is a free hypervisor product. Really it's the entry-level product within the hypervisor line. It allows you to deploy multiple VMs on a machine and incur just a small performance penalty for the host OS. The licensing cost is zero. It runs a Linux kernel, and its <a href="http://en.wikipedia.org/wiki/VMware_ESXi#VMware_ESXi">footprint is ~32MB</a>! Hmmm... could you install that to a USB thumbdrive? So the real benefit here is that you don't have to worry about the license for your host, nor the overhead of the host.</p>
  <p>My next project will be to take my 4 virtual machines and deploy them to a machine running ESXi. How cool is it that VMWare makes it free? Your only limitation at this point is the amount of RAM and disk space (hardly a limitation today at 7 cents per GB on a SATA drive). The product is a downloadable ISO. You boot into its setup app, and from then on, you use the console application to communicate with it. </p>
  <center>
    <object width="425" height="344">
      <param name="movie" value="http://www.youtube.com/v/yZeeanyy-8k&amp;hl=en&amp;fs=1&amp;" />
      <param name="allowFullScreen" value="true" />
      <param name="allowscriptaccess" value="always" />
      <embed src="http://www.youtube.com/v/yZeeanyy-8k&amp;hl=en&amp;fs=1&amp;" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="425" height="344" />
    </object>
  </center>
  <h3>Also-Ran</h3>
  <p>The new hotness is Virtual XP with Windows 7. It's not really a multi-machine solution, and as a developer, it doesn't do much for me. I am surprised that they are doing the '<a href="http://en.wikipedia.org/wiki/RemoteApp#RemoteApp">Remote App</a>' thing in Windows 7, and definitely applaud Microsoft for it! XP, however... 2003 called, and it wants its... oh, nevermind!</p>
  <p>
    <strong>How have *you* leveraged virtualization as a developer?</strong>
  </p>
</span>