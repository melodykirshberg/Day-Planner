var today = $("#current");

today.text(moment().format("MMM Do YYYY hh:mm:ss "));

setInterval (function () {
    today.text(moment().format("MMM Do YYYY - hh:mm:ss "));
}, 1000);


