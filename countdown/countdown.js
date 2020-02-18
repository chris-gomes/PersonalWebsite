function calcTimeValues(date) {
    var currentDate = new Date();
    var eventDate = new Date(date);
    if (currentDate >= eventDate) {
        return [0, 0, 0, 0];
    }
    var secondsLeft = Math.floor((eventDate - birthDate) / 1000);
    var days = Math.floor(secondsLeft / 60 / 60 / 24);
    secondsLeft = secondsLeft - (days * 24 * 60 * 60);
    var hours = Math.floor(secondsLeft / 60 / 60);
    secondsLeft = secondsLeft - (hours * 60 * 60);
    var minutes = Math.floor(secondsLeft / 60);
    secondsLeft = secondsLeft - (minutes * 60);
    return [days, hours, minutes, secondsLeft];
}

// function setCookie(cname, cvalue) {
//     var d = new Date();
//     d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
//     var expires = "expires=" + d.toUTCString();
//     document.cookie = cname + "=" + cvalue;
// }

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
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
    document.cookie = "CountdownEventName" + "=" + name;
    document.cookie = "CountdownEventDate" + "=" + date;
    location.reload(true);
}

function updateHTML(name, timeValues) {
    document.getElementById("name").innerHTML = name;
    document.getElementById("days").innerHTML = timeValues[0];
    document.getElementById("hours").innerHTML = timeValues[1];
    document.getElementById("minutes").innerHTML = timeValues[2];
    document.getElementById("seconds").innerHTML = timeValues[3];
}

// if (getCookie("CountdownEventName") == "" || getCookie("CountdownEventDate") == "") {
//     var name = prompt("Event Name:");
//     var date = prompt("Event Date (Month DD YYYY):");
//     document.cookie = "CountdownEventName" + "=" + name;
//     document.cookie = "CountdownEventDate" + "=" + date;
// }
var savedName = prompt("Event Name:");
var savedDate = prompt("Event Date (Month DD YYYY):");
// savedName = getCookie("CountdownEventName");
// savedDate = getCookie("CountdownEventDate");
timeValues = calcTimeValues(savedDate)
document.getElementById("eventName").innerHTML = savedName;
// document.getElementById("days").innerHTML = timeValues[0];
// document.getElementById("hours").innerHTML = timeValues[1];
// document.getElementById("minutes").innerHTML = timeValues[2];
// document.getElementById("seconds").innerHTML = timeValues[3];
// window.setInterval(updateHTML, 100, savedName, timeValues);
