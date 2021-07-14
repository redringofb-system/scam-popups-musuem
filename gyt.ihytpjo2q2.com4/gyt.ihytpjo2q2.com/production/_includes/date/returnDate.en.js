//------------------------------------
//------------------------------------
//-----UNITED STATES DATE CODE--------
//------------------------------------
//------------------------------------
 
function returnDate(format, print, force_date){ 	
	var out;
     
    var curDate = new Date();
    if(force_date != undefined && force_date != "" && force_date != "undefined"){
	    curDate = force_date;
    }
    var year = curDate.getFullYear();
    var month = curDate.getMonth();
    var day = curDate.getDate();
    var dayofweek = curDate.getDay();
    var hour = curDate.getHours();
     
    var daysofweek = new Array('Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday');
    var months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
     
    if(format == "timeofday"){
        if (hour < 12) out = "morning";
        else if (hour < 17) out = "afternoon";
        else out = "evening";        
    }
    else if(format == "dayofweek"){
        out = daysofweek[dayofweek];
    }
    else if(format == "day"){
        out = day;
    }
    else if(format == "month"){
        out = months[month];
    }
	else if(format == "year"){
        out = year;
    }
    else{
        out = months[month]+' '+day+', '+year;
    }
	if ( print ) 
		document.write( out );
	else
		return out;
}