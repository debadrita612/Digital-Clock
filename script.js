window.addEventListener('load', calculateTime); // func call of calculateTime() 

function calculateTime() {

    var date = new Date();

    var dayNumber = date.getDay();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var ampm = hour >= 12 ? 'PM' : 'AM';
    var dayNames = ["SUN", "MON", "TUE", "WED", "THURS", "FRI", "SAT"];

    hour = hour % 12;
    hour = (hour === 0) ? '12' : hour;  // else 12 noon and 12 midnight will show as 0 instead of 12 bcoz of mod 
    hour = hour < 10 ? '0' + hour : hour;
    minute = minute < 10 ? '0' + minute : minute;

    document.getElementById("day").innerHTML = dayNames[dayNumber];
    document.getElementById("hour").innerHTML = hour;
    document.getElementById("minute").innerHTML = minute;
    document.getElementById("am-pm").innerHTML = ampm;

    setTimeout(calculateTime, 200) // calls the func after every 200ms to get the most accurate time 
}
