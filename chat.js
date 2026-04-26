function sendMessage() {
    let input = document.getElementById("userInput").value;
    let response = "";

    if (input.includes("headshot")) {
        response = "Drag aim up fast + high sensitivity 🔥";
    } else {
        response = "Practice daily to improve 🎯";
    }

    document.getElementById("response").innerText = response;
}