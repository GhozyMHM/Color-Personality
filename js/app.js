import "./component/nav-bar.js";
import "./component/title-content.js";

var navbar = document.getElementsByClassName('navig')[0]

window.onscroll = function () {
    if (window.pageYOffset > 10) {
        navbar.style.background = "rgb(201, 23, 201)";
    } else {
        navbar.style.background = "transparent";
    }
}