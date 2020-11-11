const accidentDisplayBtn = document.querySelectorAll(`.js-acBtn`);

const ac1 = document.querySelectorAll(`.js-ac1`),

    ac1_1 = document.querySelectorAll(`.js-ac1-1`),
    ac1_1_1 = document.querySelectorAll(`.js-ac1-1-1`),

    ac1_2 = document.querySelectorAll(`.js-ac1-2`),
    ac1_2_1 = document.querySelectorAll(`.js-ac1-2-1`),

    ac1_3 = document.querySelectorAll(`.js-ac1-3`),
    ac1_3_1 = document.querySelectorAll(`.js-ac1-3-1`),

    ac1_4 = document.querySelectorAll(`.js-ac1-4`),
    ac1_4_1 = document.querySelectorAll(`.js-ac1-4-1`);

const ac2 = document.querySelectorAll(`.js-ac2`),

    ac2_1 = document.querySelectorAll(`.js-ac2-1`),

    ac2_2 = document.querySelectorAll(`.js-ac2-2`),
    ac2_2_1 = document.querySelectorAll(`.js-ac2-2-1`),

    ac2_3 = document.querySelectorAll(`.js-ac2-3`),
    ac2_3_1 = document.querySelectorAll(`.js-ac2-3-1`);

const ac3 = document.querySelectorAll(`.js-ac3`),

    ac3_1 = document.querySelectorAll(`.js-ac3-1`),
    ac3_1_1 = document.querySelectorAll(`.js-ac3-1-1`);

const ac4 = document.querySelectorAll(`.js-ac4`),

    ac4_1 = document.querySelectorAll(`.js-ac4-1`),
    ac4_1_1 = document.querySelectorAll(`.js-ac4-1-1`),

    ac4_2 = document.querySelectorAll(`.js-ac4-2`),
    ac4_2_1 = document.querySelectorAll(`.js-ac4-2-1`);

// 임의 선택
const ac1__ = document.querySelectorAll(`.js-ac1__`),
    ac2__ = document.querySelectorAll(`.js-ac2__`),
    ac3__ = document.querySelectorAll(`.js-ac3__`),
    ac4__ = document.querySelectorAll(`.js-ac4__`);

const ac1__1 = document.querySelectorAll(`.js-ac1__1`),
    ac2__1 = document.querySelectorAll(`.js-ac2__1`),
    ac3__1 = document.querySelectorAll(`.js-ac3__1`),
    ac4__1 = document.querySelectorAll(`.js-ac4__1`);

const ac_push = document.querySelector("#js-ac-push"),
    ac_reset = document.querySelector("#js-ac-reset");

function displayDetail__(e) {
    if (e.target.innerHTML == "+") {
        e.target.innerHTML = "-";
    } else {
        e.target.innerHTML = "+";
    }

    let ul = e.target.parentElement.nextElementSibling;
    ul.classList.toggle(`hide`);
}

for (let i = 0; i < accidentDisplayBtn.length; i++) {

    accidentDisplayBtn[i].addEventListener(`click`, displayDetail__);
    accidentDisplayBtn[i].parentElement.nextElementSibling.classList.add('hide');
}

// 하위
function check_ac__(e) {
    let TARGET = e.target.classList[0];
    let pick = document.querySelectorAll(`.${TARGET}`);
    let SplicePick = TARGET.substring(0, 8);
    let pickParent = document.querySelectorAll(`.${SplicePick}`);

    let checkCount = 0;

    for (let i = 0; i < pick.length; i++) {
        if (pick[i].checked == true) {
            checkCount++;
        }
    }
    // 하위 -> 중위 
    if (checkCount == pick.length) {
        pickParent[0].checked = true;
    } else {
        pickParent[0].checked = false;
        // 하위 -> 중위 -> 상위 
        SplicePick_ = TARGET.substring(0, 6);
        pickParentParent = document.querySelectorAll(`.${SplicePick_}`);
        pickParentParent[0].checked = false;
    }
}

//중위
function check_ac(e) {
    let a;
    let b;
    if (e.target.classList.contains(`js-ac1__`)) {
        a = ac1__;
        b = ac1;
        c = ac1__1;
    } else if (e.target.classList.contains(`js-ac2__`)) {
        a = ac2__;
        b = ac2;
        c = ac2__1;
    } else if (e.target.classList.contains(`js-ac3__`)) {
        a = ac3__;
        b = ac3;
        c = ac3__1;
    } else if (e.target.classList.contains(`js-ac4__`)) {
        a = ac4__;
        b = ac4;

        c = ac4__1;
    }

    let checkCount = 0;

    for (let i = 0; i < a.length; i++) {
        if (a[i].checked == true) {
            checkCount++;
        }
    }
    // 중위 -> 상위 
    if (checkCount == a.length) {
        b[0].checked = true;
    } else {
        b[0].checked = false;
    }

    // 중위 -> 하위
    let TARGET = e.target.classList[0];
    let addPick = TARGET.concat(`-1`);
    let pickChild = document.querySelectorAll(`.${addPick}`);
    if (e.target.checked) {
        for (let i = 0; i < pickChild.length; i++) {
            pickChild[i].checked = true;
        }
    } else {
        for (let i = 0; i < pickChild.length; i++) {
            pickChild[i].checked = false;
        }
    }
}

// 상위
function check_acAll(e) {
    let a;
    let b;
    if (e.target.classList.contains(`js-ac1`)) {
        a = ac1;
        b = ac1__;
        c = ac1__1;
    } else if (e.target.classList.contains(`js-ac2`)) {
        a = ac2;
        b = ac2__;
        c = ac2__1;
    } else if (e.target.classList.contains(`js-ac3`)) {
        a = ac3;
        b = ac3__;
        c = ac3__1;
    } else if (e.target.classList.contains(`js-ac4`)) {
        a = ac4;
        b = ac4__;
        c = ac4__1;
    }

    if (a[0].checked) {
        for (let i = 0; i < b.length; i++) {
            b[i].checked = true; // 중위
        }
        for (let i = 0; i < c.length; i++) {
            c[i].checked = true; // 하위
        }
    } else {
        for (let i = 0; i < b.length; i++) {
            b[i].checked = false;
        }
        for (let i = 0; i < c.length; i++) {
            c[i].checked = false;
        }
    }
}

ac1[0].addEventListener(`click`, check_acAll);
ac2[0].addEventListener(`click`, check_acAll);
ac3[0].addEventListener(`click`, check_acAll);
ac4[0].addEventListener(`click`, check_acAll);

function makeEvent(a, b) {
    let i = 0;
    let name;
    for (i; i < eval(`ac${a}_${b}`).length; i++) {
        name = eval(`ac${a}_${b}`);
        name[i].addEventListener(`click`, check_ac);
        makeEvent__(a, b);
    }
}

function makeEvent__(a, b) {
    if (a == 2 && b == 1) {} else {
        let i = 0;
        let name;
        for (i; i < eval(`ac${a}_${b}_1`).length; i++) {
            name = eval(`ac${a}_${b}_1`);
            name[i].addEventListener(`click`, check_ac__);
        }
    }
}

makeEvent(1, 1); //  ac1_1,
makeEvent(1, 2); //  ac1_2,
makeEvent(1, 3); //  ac1_3,
makeEvent(1, 4); //  ac1_4,
makeEvent(2, 1); //  ac2_1,
makeEvent(2, 2); //  ac2_2,
makeEvent(2, 3); //  ac2_3,
makeEvent(3, 1); //  ac2_1,
makeEvent(4, 1); //  ac2_1,
makeEvent(4, 2); //  ac2_2,

function acReset() {
    // 상위
    ac1[0].checked = false;
    ac2[0].checked = false;
    ac3[0].checked = false;
    ac4[0].checked = false;

    // 중위
    for (let i = 0; i < ac1__.length; i++) {
        ac1__[i].checked = false;
    }
    for (let i = 0; i < ac2__.length; i++) {
        ac2__[i].checked = false;
    }
    for (let i = 0; i < ac3__.length; i++) {
        ac3__[i].checked = false;
    }
    for (let i = 0; i < ac3__.length; i++) {
        ac4__[i].checked = false;
    }

    // 하위
    for (let i = 0; i < ac1__1.length; i++) {
        ac1__1[i].checked = false;
    }
    for (let i = 0; i < ac2__1.length; i++) {
        ac2__1[i].checked = false;
    }
    for (let i = 0; i < ac3__1.length; i++) {
        ac3__1[i].checked = false;
    }
    for (let i = 0; i < ac3__1.length; i++) {
        ac4__1[i].checked = false;
    }
}

ac_reset.addEventListener("click", acReset);

function acPush(e) {
    e.preventDefault();
    let accident = document.querySelector(`#js-accident`);
    accident.classList.add(`hide`);
}

ac_push.addEventListener("click", acPush);