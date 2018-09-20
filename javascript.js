// JavaScript Document

function ID() {
    var x = document.getElementById("demo");
    x.style.color = "red";
}

function tag() {
    var x = document.getElementsByTagName("LI");
    document.getElementById("tag").innerHTML = x[1].innerHTML;
}

function Element() {
    var btn = document.createElement("BUTTON");
    var t = document.createTextNode("CLICK ME");
    btn.appendChild(t);
    document.body.appendChild(btn);
}

function append() {
    var node = document.createElement("LI");
    var textnode = document.createTextNode("Water");
    node.appendChild(textnode);
    document.getElementById("myList").appendChild(node);
}

function textnode() {
    var h = document.createElement("H3");
    var t = document.createTextNode("Hello World");
    h.appendChild(t);
    document.body.appendChild(h);
}