const form = document.getElementById("form");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const firstField = document.getElementById("first-field");
    const secondField = document.getElementById("second-field");
    const resultMessage = document.getElementById("result-message");

    if (secondField.value > firstField.value) {
        resultMessage.innerText = `O valor ${secondField.value} é maior que ${firstField.value}!`;
    }
    else {
        resultMessage.innerText = `O valor ${secondField.value} não é maior que ${firstField.value}.`;
    }
})
