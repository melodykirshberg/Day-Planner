//---------------------time
var today = $("#current");

setInterval(function () {
    today.text(moment().format("MMM Do YYYY - hh:mm:ss"));
}, 1000);



var todos = [];

function getit() {

    todos = fstorage("localStoragetodos");
    if (todos === null) {
        todos = {};
        tstorage("localStoragetodos", todos);
    }
    else if (todos.hasOwnProperty("text9")) {
        document.getElementById("text9").value = todos.t9;
    }
    else if (todos.hasOwnProperty("text10")) {
        document.getElementById("text10").value = todos.t10;
    }
    else if (todos.hasOwnProperty("text11")) {
        document.getElementById("text11").value = todos.t11;
    }
    else if (todos.hasOwnProperty("text12")) {
        document.getElementById("text12").value = todos.test12;
    }
    else if (todos.hasOwnProperty("text13")) {
        document.getElementById("text13").value = todos.test13;
    }
    else if (todos.hasOwnProperty("text14")) {
        document.getElementById("text14").value = todos.test14;
    }
    else if (todos.hasOwnProperty("text15")) {
        document.getElementById("text15").value = todos.test15;
    }
    else if (todos.hasOwnProperty("text16")) {
        document.getElementById("text16").value = todos.test16;
    }
    else if (todos.hasOwnProperty("text17")) {
        document.getElementById("text17").value = todos.test17;
    }
}


//---------------------------------creates value when clicking save
function save(key, value) {
    todos[key] = value;
    tstorage("localStoragetodos", todos);

}

//--------------------------------sends new todos to local storage
function tstorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}


//--------------------------------retrieves todos from local storage
function fstorage(key) {
    return JSON.parse(localStorage.getItem(key));
}

$("button").on("click", function(){
    save("text9", document.getElementById("text9").value);
    getit();

})