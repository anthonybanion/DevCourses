let age = Document.querySelector("form");

age.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting

    let name = document.querySelector("#name").value;
    let age = document.querySelector("#age").value;

    if (name && age) {
        alert(`Hello ${name}, you are ${age} years old!`);
    } else {
        alert("Please enter both your name and age.");
    }
}
);