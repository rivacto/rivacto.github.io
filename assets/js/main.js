var intervalId = window.setInterval(function () {
    var date = new Date();
    var utcTime = date.getTime() + (date.getTimezoneOffset() * 60000);
    var timeOffset = 1;
    var MaTime = new Date(utcTime + (3600000 * timeOffset));
    var output = document.getElementById('time_now')
    output.textContent = tConvert(MaTime.toLocaleTimeString());
}, 1000);

function tConvert(time) {
    // Check correct time format and split into components
    time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

    if (time.length > 1) { // If time format correct
        time = time.slice(1);  // Remove full string match value
        time[5] = +time[0] < 12 ? ' AM' : ' PM'; // Set AM/PM
        time[0] = +time[0] % 12 || 12; // Adjust hours
    }
    return time.join(''); // return adjusted time or original string
}

function goToEnd() {
    window.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth" });
}
