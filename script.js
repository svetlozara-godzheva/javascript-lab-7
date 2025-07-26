var mouseEventsButton = document.getElementById("btn-mouse-events");
var mouseEventsText = document.getElementById("mouse-events-message");
mouseEventsButton.addEventListener("mouseover", () => {
    mouseEventsText.innerHTML = "Hovered button";
});
mouseEventsButton.addEventListener("mouseleave", () => {
    mouseEventsText.innerHTML = "Mouse left the button";
});