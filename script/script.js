var myForm = document.getElementById("formulary");
var container = document.getElementById("container");
var aside = document.getElementById("aside");
var third_part = document.getElementById("third_part");


var user_name = document.getElementById("user_name");
var month = document.getElementById("month");
var year = document.getElementById("year");
var CVC = document.getElementById("CVC");
var card_number = document.getElementById("card_number");

var card_number_result = document.getElementById("card_number_result");
var name_front_card = document.getElementById("name_front_card");
var CVC_code = document.getElementById("CVC_code");
var month_card = document.getElementById("month_card");
var year_card = document.getElementById("year_card");



const actual_year = new Date().getFullYear();
var has_letters = /[a-zA-Z]/;

var month_error = document.getElementById("month_error");
var year_error = document.getElementById("year_error");
var CVC_error = document.getElementById("CVC_error");
var card_number_error = document.getElementById("card_number_error");

myForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita o envio do formulário

    validate_month();
    validate_year();
    validate_CVC();
    validate_card_number();

    if (!has_errors()) {
        main_2()
    }
});

function validate_month() {
    var month_value = month.value;

    if (month_value > 12 || month_value <= 0) {
        month_error.innerHTML = 'Enter with a right month';
        month.classList.add("error");
    } else {
        month_error.innerHTML = '';
        month.classList.remove('error');
    }
}

function validate_year() {
    var year_value = year.value;

    if (year_value < actual_year / 100) {
        year_error.innerHTML = "Enter with a valid year";
        year.classList.add("error");
    } else {
        year_error.innerHTML = '';
        year.classList.remove('error');
    }
}

function validate_CVC() {
    var CVC_value = CVC.value;

    if (has_letters.test(CVC_value) || CVC_value.length < 3) {
        CVC_error.innerHTML = "Only numbers!";
        CVC.classList.add("error");
    } else {
        CVC_error.innerHTML = "";
        CVC.classList.remove("error");
    }
}

function validate_card_number() {
    var card_number_value = card_number.value;

    if (has_letters.test(card_number_value)) {
        card_number_error.innerHTML = "Only numbers!";
        card_number.classList.add("error");
    } else {
        card_number_error.innerHTML = "";
        card_number.classList.remove("error");
    }
}

function has_errors() {
    return (
        month.classList.contains("error") ||
        year.classList.contains("error") ||
        CVC.classList.contains("error") ||
        card_number.classList.contains("error")
    );
}

function repass_card() {
    var cardNumberValue = card_number.value;
    card_number_result.innerHTML = "Card Number: " + cardNumberValue;
}


function main_1(){
    container.style.visibility = 'visible';
    third_part.style.visibility = 'hidden';
    location.reload();
}

function main_2() {
    card_number_result.innerHTML = card_number.value;
    name_front_card.innerHTML = user_name.value;
    CVC_code.innerHTML = CVC.value;
    month_card.innerHTML = month.value
    year_card.innerHTML = year.value

    container.style.visibility = 'hidden';
    third_part.style.visibility = 'visible';
    
}