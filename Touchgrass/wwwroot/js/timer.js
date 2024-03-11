// --------------------- Timer -------------------------- //

var elements = document.getElementsByClassName("invite-timer");
var firstElement = elements[0];

var deadline = firstElement.getAttribute("id");
var dateRearranged = deadline[3]+deadline[4]+'/'+deadline[0]+deadline[1]+'/'+deadline[6]+deadline[7]+deadline[8]+deadline[9];

var countDownDate = new Date(dateRearranged + " 15:30").getTime();

var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    var timerElements = document.getElementsByClassName("invite-timer");

    for (var i = 0; i < timerElements.length; i++) {
        timerElements[i].innerHTML = days + "D " + hours + "h " + minutes + "m " + seconds + "s";
    }
    //   postMessage(countdownString);

    if (distance < 0) {
        clearInterval(x);
        for (var i = 0; i < timerElements.length; i++) {
            timerElements[i].innerHTML = "EXPIRED";
        }
    }
}, 1000);