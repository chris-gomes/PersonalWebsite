function getTimeValues(date) {
    var currentDate = new Date();
    var eventDate = new Date(date);
    var days = 0;
    var hours = 0;
    var minutes = 0;
    var secondsLeft = 0;

    if (currentDate < eventDate) {
        secondsLeft = Math.floor((eventDate - currentDate) / 1000);
        days = Math.floor(secondsLeft / 60 / 60 / 24);
        secondsLeft = secondsLeft - (days * 24 * 60 * 60);
        hours = Math.floor(secondsLeft / 60 / 60);
        secondsLeft = secondsLeft - (hours * 60 * 60);
        minutes = Math.floor(secondsLeft / 60);
        secondsLeft = secondsLeft - (minutes * 60);
    }

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = secondsLeft;
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function resetNameAndDate() {
    var name = prompt("Event Name:");
    var date = prompt("Event Date (Month DD YYYY):");
    setCookie("CountdownEventName", name, 365);
    setCookie("CountdownEventDate", date, 365);
    location.reload(true);
}

if (getCookie("CountdownEventName") == "" || getCookie("CountdownEventDate") == "") {
    var name = prompt("Event Name:");
    var date = prompt("Event Date (Month DD YYYY):");
    setCookie("CountdownEventName", name, 365);
    setCookie("CountdownEventDate", date, 365);
}
var savedName = getCookie("CountdownEventName");
var savedDate = getCookie("CountdownEventDate");
document.getElementById("name").innerHTML = savedName;
window.setInterval(getTimeValues, 100, savedDate);