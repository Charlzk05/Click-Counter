const counter = document.getElementById("counter");
const per = document.getElementById("per");

var count = 0;
var perClick = per.value;

increaseButton_Click = () => {
    counter.value = count += parseInt(per.value);
}

decreaseButton_Click = () => {
    counter.value = count -= parseInt(per.value);
}

perClickButton_Click = () => {
    perClick = per.value;
}

per.addEventListener("keypress", (event) => {
    if (event.key == "Enter") {
        event.preventDefault();
        perClick = per.value;
    }
});