function saveName() {
    const nameInput = document.getElementById("nameInput");
    const errorMessage = document.getElementById("errorMessage");

    const name = nameInput.value.trim();

    if (name === "" || !isNaN(name)) {
        errorMessage.innerText = "Please enter a valid name.";
        return;
    }

    localStorage.setItem("userName", name);
    document.getElementById("welcomeMessage").innerText = "Hi, " + name + "!";
    nameInput.style.display = "none";
    document.querySelector('button').style.display = "none";
    errorMessage.innerText = "";
}

if (localStorage.getItem("userName")) {
    var savedName = localStorage.getItem("userName");
    document.getElementById("welcomeMessage").innerText = "Hi! Welcome back, " + savedName + "!";
    document.getElementById("nameInput").style.display = "none";
    document.querySelector('button').style.display = "none";
}
