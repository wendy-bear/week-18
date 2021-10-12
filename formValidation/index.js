let errors = [];
let greet = "Добро пожаловать, ";
let emailForm = document.getElementById("email");
document.getElementById("error_all").innerHTML = "";

function checkValidity(input) {
    let validity = input.validity;

    if (validity.valueMissing) {
        errors.push("Поле " + input.placeholder + " не заполнено<br>");
    }


    if (validity.rangeOverflow) {
        let max = input.max;
        errors.push('Максимальное значение не может быть больше чем ' + max);
    }

    if (validity.rangeUnderflow) {
        let min = input.min;
        errors.push('Минимальное значение не может быть больше чем ' + min);
    }
    if (validity.tooShort) {
        let lenght = input.validity.tooShort;
        errors.push('Пароль не меньше 8 символов<br>');
    }
    let mailFormat = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
    if (emailForm.value.match(mailFormat)) {
        return true;
    } else {
        errors.push("Введите емейл правильно<br>");

    }

}



function formValid() {
    errors = [];
    let inputs = document.querySelectorAll('input');
    for (let input of inputs) {
        checkValidity(input);
    }

    document.getElementById("error_all").innerHTML = errors.join('\n');
    let errorAll = document.getElementById("error_all");
    if (errorAll.innerHTML == "") {
        let greetName = document.getElementById("name").value;
        alert(greet + greetName);
    }


}