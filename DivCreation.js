document.getElementById("createDiv").addEventListener("click", function () {
    const newDiv = document.createElement("div");
    newDiv.textContent = "I am a new div!";
    newDiv.style.border = "1px solid black";
    newDiv.style.margin = "10px";
    newDiv.style.padding = "10px";
    document.body.appendChild(newDiv);
});
