var list = document.querySelector('ul');

list.addEventListener('click', function (ev) {
    if (ev.target.tagName === "LI") {
        ev.target.classList.toggle('checked');
    } else if (ev.target.tagName === "SPAN") {
        var div = ev.target.parentNode;
    }
}, false);


button = document.querySelector("span");
button.addEventListener("click", function () {

    li = document.createElement('li');
    inputValue = document.getElementById('input').value;
    t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === "") {
        alert("Enter your case!");
    } else {
        document.getElementById('list').appendChild(li);
    }
    document.getElementById('input').value = "";
    var span = document.createElement('SPAN');
    var txt = document.createTextNode("X");

    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    list = document.getElementById('list').innerHTML;
    localStorage.setItem("list", list);

});


window.onload = function () {
    document.getElementById('list').innerHTML =  localStorage.getItem('list');


    document.getElementById('input').onkeypress = function searchKeyPress(event) {
        if (event.keyCode === 13) {
            document.getElementById('add').click();
        }
    };
};