
var fromDate = jQuery.formatDateTime('yy-mm-dd', new Date()); 
jQuery.getJSON('https://www.googleapis.com/calendar/v3/calendars/pjjfdgelvdjtuvrr89tun3nu7k%40group.calendar.google.com/events?maxResults=3&orderBy=startTime&singleEvents=true&timeMin=' + fromDate + 'T10%3A00%3A00-07%3A00&key=AIzaSyC5FUd7RDTh6pzjKmK6vw7UOqzlXT6KZwI&jsoncallback=? ', function(data){
    console.log(data);
        var summary = data.items[0].summary;
        summary = summary.replace('Hooked On Sonics','');
        summary = jQuery.formatDateTime('DD, MM d', new Date(data.items[0].start.dateTime), {ampmNames: ['am', 'pm']}) + summary;
       var div = document.createElement("div");
		var par = document.createElement("p");
		var header = document.createElement("h2");
		var contentSnip = document.createElement("h3");
		header.innerHTML = summary;
		div.appendChild(par);
		var contentSnippet = data.items[0].location;
		contentSnip.innerHTML = contentSnippet
		par.appendChild(header);
		par.appendChild(contentSnip);
		document.getElementById("feed1").appendChild(par);

		
        var summary = data.items[1].summary;
        summary = summary.replace('Hooked On Sonics','');
        summary = jQuery.formatDateTime('DD, MM d', new Date(data.items[1].start.dateTime), {ampmNames: ['am', 'pm']}) + summary;
      var div2 = document.createElement("div");
      var par2 = document.createElement("p");
      var header2 = document.createElement("h3");
      header2.innerHTML = summary
      par2.appendChild(header2);
      div2.appendChild(par2);
      contentSnippet = data.items[1].location;
      par2.innerHTML = par2.innerHTML + contentSnippet
      document.getElementById("feed1").appendChild(par2);

      var summary = data.items[2].summary;
      summary = summary.replace('Hooked On Sonics','');
      summary = jQuery.formatDateTime('DD, MM d', new Date(data.items[2].start.dateTime), {ampmNames: ['am', 'pm']}) + summary;
      var div3 = document.createElement("div");
      var par3 = document.createElement("p");
      var header3 = document.createElement("h3");
      header3.innerHTML = summary
      par3.appendChild(header3);
      div3.appendChild(par3);
      contentSnippet = data.items[2].location;
      par3.innerHTML = par3.innerHTML + contentSnippet
      document.getElementById("feed1").appendChild(par3);
      
      //    }
});
