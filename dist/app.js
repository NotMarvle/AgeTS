// You Can Replace It If Its Not 2023 Already So It Can Work Properly
var currentYear = 2023;
function submit() {
    var yearInput = document.getElementById("year");
    var year = parseInt(yearInput.value);
    var output = (currentYear - year);
    document.getElementById("container").innerHTML = "<h1>You Are/Will Be " + output + " Years Old.</h1>";
}
