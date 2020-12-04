const date1 = document.querySelectorAll(".js-date1");

const date_push = document.querySelector("#js-date-push"),
    date_reset = document.querySelector("#js-date-reset");

const dateUl = document.querySelector(`#js-date-ul`);

const dateInput = document.querySelectorAll(`input[type=date]`);

let dateValues = [];

let today = new Date();
let year = today.getFullYear(); // 년도
let month = today.getMonth() + 1; // 월
let days = today.getDate(); // 날짜

let today_cal = new Date(year, month - 1, days);
let year_cal;
let month_cal;
let days_cal;

function makeDateBtnVariables() {
    for (let i = 0; i < date1.length; i++) {
        dateValues[i] = date1[i].value;
    }
}

makeDateBtnVariables();

function cal_date(a) {
    // 전체 input value 바꿨을때, 아래 all도 해당 value로 바꿔야함
    if (a !== `all`) {
        today_cal = new Date(year, month - 1, days);

        today_cal.setDate(today_cal.getDate() - a);
        year_cal = today_cal.getFullYear();
        month_cal = today_cal.getMonth() + 1;
        days_cal = today_cal.getDate();
        dateInput[0].value = `${year_cal}-${month_cal < 10 ? `0${month_cal}` : `${month_cal}`}-${days_cal < 10 ? `0${days_cal}` : `${days_cal}`}`
    } else {
        dateInput[0].value = "1990-01-01";
    }
}

function check_date(e) {
    for (let i = 0; i < dateUl.children.length; i++) {
        if (dateUl.children[i].children[0].classList.contains(`white`)) {
            dateUl.children[i].children[0].classList.remove(`white`);
        }
    }
    e.target.parentElement.classList.toggle(`white`);
    cal_date(e.target.value);
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
    dateSet();
}

date_reset.addEventListener("click", dateReset);

function datePush(e) {
    e.preventDefault();
    let date = document.querySelector(`#js-date`);
    date.classList.add(`hide`);
}

date_push.addEventListener("click", datePush);

function dateSet() {
    dateInput[0].value = "1990-01-01";
    dateInput[1].value = `${year}-${month < 10 ? `0${month}` : `${month}`}-${days < 10 ? `0${days}` : `${days}`}`
}

dateSet();