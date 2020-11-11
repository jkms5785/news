const media1 = document.querySelectorAll(".js-media1"),
    media1_1 = document.querySelectorAll(".js-media1-1");

const media2 = document.querySelectorAll(".js-media2"),
    media2_1 = document.querySelectorAll(".js-media2-1");

const media3 = document.querySelectorAll(".js-media3"),
    media3_1 = document.querySelectorAll(".js-media3-1");

const media_push = document.querySelector("#js-media-push"),
    media_reset = document.querySelector("#js-media-reset");


function check_media(e) {
    e.target.parentElement.classList.toggle(`white`);
    let a;
    let b;
    if (e.target.classList.contains(`js-media1-1`)) {
        a = media1_1;
        b = media1;
    } else if (e.target.classList.contains(`js-media2-1`)) {
        a = media2_1;
        b = media2;
    } else if (e.target.classList.contains(`js-media3-1`)) {
        a = media3_1;
        b = media3;
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

for (let i = 0; i < media1_1.length; i++) {
    media1_1[i].addEventListener("click", check_media);
}

for (let i = 0; i < media2_1.length; i++) {
    media2_1[i].addEventListener("click", check_media);
}

for (let i = 0; i < media3_1.length; i++) {
    media3_1[i].addEventListener("click", check_media);
}

function check_mediaAll(e) {
    let a;
    let b;
    if (e.target.classList.contains(`js-media1`)) {
        a = media1;
        b = media1_1;
    } else if (e.target.classList.contains(`js-media2`)) {
        a = media2;
        b = media2_1
    } else if (e.target.classList.contains(`js-media3`)) {
        a = media3;
        b = media3_1;
    }

    if (a[0].checked) {
        for (let i = 0; i < b.length; i++) {
            b[i].checked = true;
            b[i].parentElement.classList.add(`white`);
        }
    } else {
        for (let i = 0; i < b.length; i++) {
            b[i].checked = false;
            b[i].parentElement.classList.remove(`white`);
        }
    }
}

media1[0].addEventListener("click", check_mediaAll);
media2[0].addEventListener("click", check_mediaAll);
media3[0].addEventListener("click", check_mediaAll);

function mediaReset() {
    media1[0].checked = false;
    media2[0].checked = false;
    media3[0].checked = false;

    for (let i = 0; i < media1_1.length; i++) {
        media1_1[i].checked = false;
        media1_1[i].parentElement.classList.remove(`white`);
    }
    for (let i = 0; i < media2_1.length; i++) {
        media2_1[i].checked = false;
        media2_1[i].parentElement.classList.remove(`white`);
    }
    for (let i = 0; i < media3_1.length; i++) {
        media3_1[i].checked = false;
        media3_1[i].parentElement.classList.remove(`white`);
    }
}

media_reset.addEventListener("click", mediaReset);

function mediaPush(e) {
   e.preventDefault();
    let media = document.querySelector(`#js-media`);
    media.classList.add(`hide`);
}

media_push.addEventListener("click", mediaPush);