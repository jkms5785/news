const date1 = document.querySelectorAll(".js-date1");

const date_push = document.querySelector("#js-date-push"),
    date_reset = document.querySelector("#js-date-reset");

const dateUl = document.querySelector(`#js-date-ul`);

const dateInput = document.querySelectorAll(`input[type=date]`);

function check_date(e) {
    for (let i = 0; i < dateUl.children.length; i++) {
        if (dateUl.children[i].children[0].classList.contains(`white`)) {
            dateUl.children[i].children[0].classList.remove(`white`);
        }
    }
    e.target.parentElement.classList.toggle(`white`);
}

for (let i = 0; i < date1.length; i++) {
    date1[i].addEventListener("click", check_date);
}

function dateReset(e) {
    e.preventDefault();

    for (let i = 0; i < date1.length; i++) {
        date1[i].parentElement.classList.remove(`white`);
    }

    dateInput[0].value = "";
    dateInput[1].value = "";
}

date_reset.addEventListener("click", dateReset);

function datePush(e) {
    e.preventDefault();
    let date = document.querySelector(`#js-date`);
    date.classList.add(`hide`);
}

date_push.addEventListener("click", datePush);