const counterInputBox = document.getElementById("counterInputBox");

var counter = 0;

function ascendButton_Click() {
    counterInputBox.value = "";
    counterInputBox.value = counter += 1;
}

function descendButton_Click() {
    counterInputBox.value = "";
    counterInputBox.value = counter -= 1;
}

function resetButton_Click() {
    counter = 0;
    counterInputBox.value = "0";
}

function sourceCode_Click() {
    window.open("https://github.com/Charlzk05/Click-Counter-Online");
}