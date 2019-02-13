'use strict';


document.onkeydown = function (event) {
    if (event.keyCode == 27) { // escape
        cancel();
        return false;
    }

    if ((event.ctrlKey && event.keyCode == 'E'.charCodeAt(0)) && !area.offsetHeight) {
        edit();
        return false;
    }

    if ((event.ctrlKey && event.keyCode == 'S'.charCodeAt(0)) && area.offsetHeight) {
        save();
        return false;
    }
}

function edit() {
    result.style.display = 'none';
    area.style.display = 'block';
    area.focus();
    area.value = '';
}

function save() {
    area.style.display = 'none';
    result.innerHTML = area.value;
    result.style.display = 'block';
}

function cancel() {
    area.style.display = 'none';
    result.style.display = 'block';
}