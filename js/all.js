const allDisplayBtn = document.querySelectorAll(`.js-allBtn`);

const all1 = document.querySelectorAll(`.js-all1`),
    all1_1 = document.querySelectorAll(`.js-all1-1`);

const all2 = document.querySelectorAll(`.js-all2`),
    all2_1 = document.querySelectorAll(`.js-all2-1`);

const all3 = document.querySelectorAll(`.js-all3`),
    all3_1 = document.querySelectorAll(`.js-all3-1`);

const all4 = document.querySelectorAll(`.js-all4`),
    all4_1 = document.querySelectorAll(`.js-all4-1`);

const all5 = document.querySelectorAll(`.js-all5`),
    all5_1 = document.querySelectorAll(`.js-all5-1`);

const all_push = document.querySelector("#js-all-push"),
    all_reset = document.querySelector("#js-all-reset");


function displayDetail(e) {
    if(e.target.innerHTML == "+"){
        e.target.innerHTML = "-";
    }else{
        e.target.innerHTML = "+";
    }
  
    let ul = e.target.parentElement.nextElementSibling;
    ul.classList.toggle(`hide`);
}

for (let i = 0; i < allDisplayBtn.length; i++) {
    allDisplayBtn[i].addEventListener('click', displayDetail);
    allDisplayBtn[i].parentElement.nextElementSibling.classList.add('hide');
}

function check_all(e) {
    let a;
    let b;
    if (e.target.classList.contains(`js-all1-1`)) {
        a = all1_1;
        b = all1;
    } else if (e.target.classList.contains(`js-all2-1`)) {
        a = all2_1;
        b = all2;
    } else if (e.target.classList.contains(`js-all3-1`)) {
        a = all3_1;
        b = all3;
    } else if (e.target.classList.contains(`js-all4-1`)) {
        a = all4_1;
        b = all4;
    } else if (e.target.classList.contains(`js-all5-1`)) {
        a = all5_1;
        b = all5;
    }

    let checkCount = 0;

    for (let i = 0; i < a.length; i++) {
        if (a[i].checked == true) {
            checkCount++;
        }
    }
    if (checkCount == a.length) {
        b[0].checked = true;
    } else {
        b[0].checked = false;
    }
}

for (let i = 0; i < all1_1.length; i++) {
    all1_1[i].addEventListener('click', check_all);
}

for (let i = 0; i < all2_1.length; i++) {
    all2_1[i].addEventListener('click', check_all);
}

for (let i = 0; i < all3_1.length; i++) {
    all3_1[i].addEventListener('click', check_all);
}

for (let i = 0; i < all4_1.length; i++) {
    all4_1[i].addEventListener('click', check_all);
}

for (let i = 0; i < all5_1.length; i++) {
    all5_1[i].addEventListener('click', check_all);
}

function check_allAll(e) {
    let a;
    let b;
    if (e.target.classList.contains(`js-all1`)) {
        a = all1;
        b = all1_1;
    } else if (e.target.classList.contains(`js-all2`)) {
        a = all2;
        b = all2_1;
    } else if (e.target.classList.contains(`js-all3`)) {
        a = all3;
        b = all3_1;
    } else if (e.target.classList.contains(`js-all4`)) {
        a = all4;
        b = all4_1;
    } else if (e.target.classList.contains(`js-all5`)) {
        a = all5;
        b = all5_1;
    }

    if (a[0].checked) {
        for (let i = 0; i < b.length; i++) {
            b[i].checked = true;
        }
    } else {
        for (let i = 0; i < b.length; i++) {
            b[i].checked = false;
        }
    }
}

all1[0].addEventListener(`click`, check_allAll);
all1[0].style.cursor = `pointer`;

all2[0].addEventListener(`click`, check_allAll);
all2[0].style.cursor = `pointer`;

all3[0].addEventListener(`click`, check_allAll);
all3[0].style.cursor = `pointer`;

all4[0].addEventListener(`click`, check_allAll);
all4[0].style.cursor = `pointer`;

all5[0].addEventListener(`click`, check_allAll);
all5[0].style.cursor = `pointer`;

function allReset(e) {
    e.preventDefault();
    all1[0].checked = false;
    all2[0].checked = false;
    all3[0].checked = false;
    all4[0].checked = false;
    all5[0].checked = false;

    for (let i = 0; i < all1_1.length; i++) {
        all1_1[i].checked = false;
    }
    for (let i = 0; i < all2_1.length; i++) {
        all2_1[i].checked = false;
    }
    for (let i = 0; i < all3_1.length; i++) {
        all3_1[i].checked = false;
    }
    for (let i = 0; i < all3_1.length; i++) {
        all3_1[i].checked = false;
    }
    for (let i = 0; i < all3_1.length; i++) {
        all3_1[i].checked = false;
    }
}

all_reset.addEventListener("click", allReset);

function allPush(e) {
    e.preventDefault();
    let all = document.querySelector(`#js-all`);
    all.classList.add(`hide`);
}

all_push.addEventListener("click", allPush);