var mouseEventsButton = document.getElementById("mouse-events-btn");
var mouseEventsText = document.getElementById("mouse-events-message");
mouseEventsButton.addEventListener("mouseover", () => {
    mouseEventsText.innerHTML = "Hovered button";
});

mouseEventsButton.addEventListener("mouseleave", () => {
    mouseEventsText.innerHTML = "Mouse left the button";
});

var inputKeyboardEvents = document.getElementById("input-keyboard-events");

inputKeyboardEvents.addEventListener("keydown", (e) => {
    var keyEventsText = document.getElementById("keyboard-events-message");
    keyEventsText.innerHTML = `Key pressed: ${e.key}`;
});

var formEvents = document.getElementById("form-events");
formEvents.addEventListener("submit", (e) => {
    var formEventsText = document.getElementById("form-events-message");
    e.preventDefault();
    formEventsText.innerHTML = "The form was submitted successfully!"
});
