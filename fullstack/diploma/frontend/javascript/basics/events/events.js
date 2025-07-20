// onclick – Fires when a single click occurs
document.getElementById("clickBtn").onclick = function () {
    alert("You clicked the button!");
};

// ondblclick – Fires when a double click occurs
document.getElementById("dblClickBtn").ondblclick = function () {
    alert("You double-clicked the button!");
};

// onmouseover – When the mouse enters the element
// onmouseout – When the mouse leaves the element
const hoverBox = document.getElementById("hoverBox");
hoverBox.onmouseover = () => hoverBox.style.backgroundColor = "orange";
hoverBox.onmouseout = () => hoverBox.style.backgroundColor = "lightblue";

// onkeydown – Fires when a key is pressed down
// onkeyup – Fires when a key is released
const keyInput = document.getElementById("keyInput");
keyInput.onkeydown = (e) => console.log("Key down: " + e.key);
keyInput.onkeyup = (e) => console.log("Key up: " + e.key);

// oninput – Fires every time the input value changes
document.getElementById("inputField").oninput = function () {
    console.log("Input changed: " + this.value);
};

// onchange – Fires when the input loses focus after its value has changed
document.getElementById("changeField").onchange = function () {
    console.log("Value changed (onchange): " + this.value);
};

// onfocus – When the element gains focus
// onblur – When the element loses focus
const focusBlur = document.getElementById("focusBlurField");
focusBlur.onfocus = () => console.log("Input focused");
focusBlur.onblur = () => console.log("Input blurred");

// onerror – When an error occurs (e.g., broken image)
document.getElementById("imgError").onerror = () => {
    console.warn("Image failed to load.");
};

// onload – When an external resource is fully loaded
document.getElementById("iframeLoad").onload = () => {
    console.log("Iframe has loaded successfully.");
};

// onscroll – When the scroll event happens
document.getElementById("scrollBox").onscroll = () => {
    console.log("You scrolled inside the box!");
};

// onselect – When user selects text
document.getElementById("selectText").onselect = () => {
    console.log("Text selected!");
};

// oncopy – When user copies text
document.getElementById("copyText").oncopy = () => {
    console.log("Text copied!");
};

// onsearch – When a search is submitted in an input[type="search"]
document.getElementById("searchField").onsearch = () => {
    console.log("Search executed: " + document.getElementById("searchField").value);
};
