  <!--{PublishedOn:"June 4 2014", Title:"Podcast Round-Up 2014", Intro:"A collection of podcasts I listen to and recommend."}-->
<style>
#podcastList {padding-top: 40px;width: 800px;}
h3 {padding-top: 10px;}
a img {border: 0;}
.box {width: 50%;height: 350px;}
.box0 {float: left;}
.box1 {float: right;}
.comment {width:90%;}
</style>

<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
<script type="text/javascript">
        $(function () {
            var podcasts = [
                { imgSlug: "dotnet-rocks", comment: "Long running, well respected in the .NET dev community. 2 or 3 shows a week. Incredible. Hosts Carl Franklin and Richard Campbell.", title: ".NET Rocks", url: "http://dotnetrocks.com" },
                { imgSlug: "a-cast-of-kings", comment: "Analysis of each Game Of Thrones episodes. Great insights. Safe for non-book readers. Hosts Joanna Robinson and Dave Chen.", title: "A Cast Of Kings", url: "http://www.slashfilm.com/category/features/slashfilmcast/a-cast-of-kings/" },
                { imgSlug: "atp", comment: "Great converstation with 3 tech nerds. Discussion on Apple, programming, and other tech issues. RIP <a href='http://5by5.tv/hypercritical'>Hypercritical</a>. Hosts John Siracusa, Marco Arment, and Casey Liss.", title: "Accidental Tech Podcast", url: "http://atp.fm/" },
                { imgSlug: "canadaland", comment: "A look at issues in the media industry in Canada. Internet, TV, print. Searing. Host Jesse Brown.", title: "Canadaland", url: "http://canadalandshow.com/" },
                { imgSlug: "cordkillers", comment: "Cutting the cable cord. Watching content where you want, when you want, on the device you want. Hosts Tom Merritt and Brian Brushwood.", title: "Cordkillers", url: "http://www.cordkillers.com/" },
                { imgSlug: "debug", comment: "Conversations with developers in the Mac and iOS dev community. Hosts Guy English and Rene Ritchie.", title: "Debug", url: "http://www.imore.com/debug" },
                { imgSlug: "hanselminutes", comment: "Scott Hanselman interviews interesting people in software development. He's not wasting your time, either. ;)", title: "Hanselminutes", url: "http://hanselminutes.com/" },
                { imgSlug: "herding-code", comment: "Conversations with 4 devs in the .NET space, with guests. Not necessarily .NET related topics.", title: "Herding Code", url: "http://herdingcode.com/" },
                { imgSlug: "macbreak-weekly", comment: "This week's news on Apple related topics.", title: "MacBreak Weekly", url: "http://twit.tv/mbw" },
                { imgSlug: "old-tech-news", comment: "Andy reads his recent/old tech columns from The Chicago Sun Times and other publications he writes for.", title: "Old Tech News", url: "http://5by5.tv/otn" },
                { imgSlug: "radio-tfs", comment: "News about Team Foundation Server with Martin Woodward.", title: "Radio TFS", url: "http://www.radiotfs.com/" },
                { imgSlug: "random-trek", comment: "Analyzing old Star Trek episodes.", title: "Random Trek", url: "http://www.theincomparable.com/randomtrek/" },
                { imgSlug: "runas-radio", comment: "Analysing the IT industry, topics from a Microsoft point of view with Richard Campbell", title: "RunAs Radio", url: "http://www.runasradio.com/" },
                { imgSlug: "security-now", comment: "Internet security, news, issues, and computing concepts.", title: "Security Now", url: "http://twit.tv/sn" },
                { imgSlug: "stack-exchange", comment: "A listen into what's going on at StackExchange. Usually pretty fun.", title: "Stack Exchange Podcast", url: "http://blog.stackoverflow.com/category/podcasts/" },
                { imgSlug: "clockwise", comment: "5 tech topics in 30 mins. I love that they use podcast chapter bookmarks to separate content.", title: "TechHive Clockwise", url: "http://www.techhive.com/column/clockwise/" },
                { imgSlug: "ihnatko-almanac", comment: "A mix of pop culture: movies, TV, comics, Apple.", title: "The Ihnatko Almanac", url: "http://5by5.tv/ia" },
                { imgSlug: "the-incomparable", comment: "Geek pop-culture stuff: TV, games, comics, books, movies. The back catalog is great.", title: "The Incomparable", url: "http://www.theincomparable.com/" },
                { imgSlug: "the-talk-show", comment: "Discussion around Apple news.", title: "The Talk Show With John Gruber", url: "http://daringfireball.net/thetalkshow/" },
                { imgSlug: "twit", comment: "The week's tech news. Host Leo Laporte", title: "This Week In Tech", url: "http://twit.tv/twit" },
                { imgSlug: "triangulation", comment: "Q & A with someone in the tech industry.", title: "Triangulation", url: "http://twit.tv/tri" },
                { imgSlug: "under-the-influence", comment: "Insights into the advertising industry.", title: "Under The Influence", url: "http://www.cbc.ca/undertheinfluence/index.html" },
                { imgSlug: "vice", comment: "Interviewing a guest about news or politics.", title: "Vice Media", url: "http://www.vice.com/tag/The+VICE+Podcast+Show" },
                { imgSlug: "what-the-tech", comment: "Discussion of tech topics. Good banter from hosts Andrew Zarian and Paul Thurrott.", title: "What The Tech", url: "http://www.gfqnetwork.com/showsongfq/what-the-tech/" },
                { imgSlug: "windows-weekly", comment: "News and discussion of Microsoft-centric issues of the day. Insights from Mary Jo Foley and Paul Thurrott.", title: "Windows Weekly", url: "http://twit.tv/ww" }
            ];            
            $.each(podcasts, function (index, podcast) {

                var podcastItemHtml = "<a href='" + podcast.url + "'><h3>" + podcast.title + "</h3></a>";
                podcastItemHtml += "<p class='comment'>" + podcast.comment + "</p>";
                podcastItemHtml += "<a href='" + podcast.url + "'><img src='img/podcasts-" + podcast.imgSlug + ".png' alt='" + podcast.title + "'></a>";
                
                var boxClass = ((index % 2)==0) ? "box0" : "box1";
                var podcastBox = "<div class='box " + boxClass + "'>" + podcastItemHtml + "</div>";
                $("#podcastList").append(podcastBox);
            });
            if((podcasts.length % 2)==1)
            {
                $("#podcastList").append("<div class='box box1'></div>");
            }
        });
</script>
<p>
    I love listening to podcasts. Here's my heavy rotation. I love trying podcast clients. Of the handful I've used on iOS, I keep coming back to <a href="http://downcastapp.com/">Downcast</a>. It's tweakable.
</p>
<div id="podcastList"></div>