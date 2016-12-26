google.load("feeds", "1");

function initialize(){
    var feed = new google.feeds.Feed("https://www.google.com/calendar/feeds/pjjfdgelvdjtuvrr89tun3nu7k%40group.calendar.google.com/public/basic?orderby=starttime&sortorder=ascending&futureevents=true&singleevents=true&max-results=25");
	//var feed = new google.feeds.Feed("https://www.google.com/calendar/feeds/pjjfdgelvdjtuvrr89tun3nu7k%40group.calendar.google.com/public/basic?orderby=starttime&sortorder=ascending&singleevents=true&start-min=2012-09-01T10:57:00-08:00&start-max=2012-10-01T10:57:00-08:00");	
    //var feedBlog = new google.feeds.Feed("http://blogname.blogspot.com/feeds/posts/default?alt=rss");
	feed.setNumEntries(20);
    feed.load(function(result){
        if (!result.error) {
            var entry = result.feed.entries[0];
            var div = document.createElement("div");
            var par = document.createElement("p");
            entry.title = entry.title.replace('&#39;','\'');
            div.appendChild(document.createTextNode(entry.title));
            document.getElementById("feed1").appendChild(div);
            var contentSnippet = entry.contentSnippet;
            contentSnippet = contentSnippet.replace('Who: Hooked On Sonics','');
            contentSnippet = contentSnippet.replace('Event Status: confirmed','');
            contentSnippet = contentSnippet.replace('Event Description: ','');
            contentSnippet = contentSnippet.replace('CDT','');
            contentSnippet = contentSnippet.replace('&nbsp;','');
            
            par.appendChild(document.createTextNode(contentSnippet));
            document.getElementById("feedDate1").appendChild(par);
            
            entry = result.feed.entries[1];
            div = document.createElement("div");
            par = document.createElement("p");
            entry.title = entry.title.replace('&#39;','\'');
            div.appendChild(document.createTextNode(entry.title));
            document.getElementById("feed2").appendChild(div);
            contentSnippet = entry.contentSnippet;
            contentSnippet = contentSnippet.replace('Who: Hooked On Sonics','');
            contentSnippet = contentSnippet.replace('Event Status: confirmed','');
            contentSnippet = contentSnippet.replace('Event Description: ','');
            contentSnippet = contentSnippet.replace('CDT','');
            contentSnippet = contentSnippet.replace('&nbsp;','');
            
            par.appendChild(document.createTextNode(contentSnippet));
            document.getElementById("feedDate2").appendChild(par);
           
            
            entry = result.feed.entries[2];
            div = document.createElement("div");
            par = document.createElement("p");
            entry.title = entry.title.replace('&#39;','\'');
            div.appendChild(document.createTextNode(entry.title));
            document.getElementById("feed3").appendChild(div);
            contentSnippet = entry.contentSnippet;
            contentSnippet = contentSnippet.replace('Who: Hooked On Sonics','');
            contentSnippet = contentSnippet.replace('Event Status: confirmed','');
            contentSnippet = contentSnippet.replace('Event Description: ','');
            contentSnippet = contentSnippet.replace('CDT','');
            contentSnippet = contentSnippet.replace('&nbsp;','');
            
            par.appendChild(document.createTextNode(contentSnippet));
            document.getElementById("feedDate3").appendChild(par);

            
            for (var i = 0; i < 6; i++) {
                var entry = result.feed.entries[i];
				var content = entry.content;
				content = content.replace('<br>Who: Hooked On Sonics','');
				content = content.replace('<br>Event Status: confirmed','');
				content = content.replace('Event Description: ','');
				content = content.replace('CDT<br>','');
				entry.title = entry.title.replace('&#39;','\'');
				document.getElementById("event1").innerHTML += "<span class='color2'><h3>" + entry.title + "</h3></span>" + content + "<br><br><br>"; 
				if (i < 3){
					entry.title = entry.title.replace('&#39;','\'');
					document.getElementById("eventShort").innerHTML += "<span class='color2'><h3>" + entry.title + "</h3></span>" + content + "<br><br><br>";	
				}
				            
			}
        }
    });
}

google.setOnLoadCallback(initialize);
