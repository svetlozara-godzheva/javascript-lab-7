var mouseEventsButton = document.getElementById("btn-mouse-events");
var mouseEventsText = document.getElementById("mouse-events-message");
mouseEventsButton.addEventListener("mouseover", () => {
    mouseEventsText.innerHTML = "Hovered button";
});

mouseEventsButton.addEventListener("mouseleave", () => {
    mouseEventsText.innerHTML = "Mouse left the button";
});

var inputKeyboardEvents = document.getElementById("input-keyboard-events");
var keyEventsText = document.getElementById("keyboard-events-meassage");
inputKeyboardEvents.addEventListener("keydown", (e) => {
    keyEventsText.innerHTML = `Key pressed: ${e.key}`;
});