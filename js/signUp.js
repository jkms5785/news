const id = document.querySelector("#js-id"),
    ps = document.querySelector("#js-ps"),
    psCheck = document.querySelector("#js-psCheck"),
    email = document.querySelector("#js-email"),
    name = document.querySelector("#js-name"),
    submit = document.querySelector("#js-submit");

const form = document.querySelector("#js-form");

const id_noti = document.querySelector("#js-noti-id"),
    ps_noti = document.querySelector("#js-noti-ps"),
    email_noti = document.querySelector("#js-noti-email"),
    name_noti = document.querySelector("#js-noti-name");


function VALUE_CHECK() {
    if (this.value) {
        if (this.id == `js-id`) {
            id_noti.innerHTML = "";
        } else if (this.id == `js-email`) {
            email_noti.innerHTML = "";
        } else if (this.id == `js-name`) {
            name_noti.innerHTML = "";
        }
    }
}

function EMAIL_CHECK() {
    let str = email.value;
    let reg_email = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;

    if (!reg_email.test(str)) {
        email_noti.innerHTML = "잘못된 형식입니다.";
    } else {
        email_noti.innerHTML = "";
    }
}

function signIn(e) {
    e.preventDefault();
    if (!id.value || !ps.value || !psCheck.value || !email.value || !name.value) {
        if (!id.value) {
            id_noti.innerHTML = "필수 정보입니다.";
            id.addEventListener("focusout", VALUE_CHECK);
        } else {
            id_noti.innerHTML = "";
        }

        if (!ps.value || !psCheck.value) {
            ps_noti.innerHTML = "필수 정보입니다.";
        } else {
            ps_noti.innerHTML = "";
        }

        if (!email.value) {
            email_noti.innerHTML = "필수 정보입니다.";
            email.addEventListener("focusout", VALUE_CHECK);
        } else {
            EMAIL_CHECK();
        }

        if (!name.value) {
            name_noti.innerHTML = "필수 정보입니다.";
            name.addEventListener("focusout", VALUE_CHECK);
        } else {
            name_noti.innerHTML = "";
        }

    } else {
        form.submit();
        id.value = "";
        ps.value = "";
        psCheck.value = "";
        email.value = "";
        name.value = "";

    }
}

submit.addEventListener("click", signIn);

function PS_CHECK() {
    if (ps.value == psCheck.value) {
        ps_noti.innerHTML = ""
    } else {
        ps_noti.innerHTML = "비밀번호가 일치하지 않습니다."
    }
}

ps.addEventListener("focusout", PS_CHECK);
psCheck.addEventListener("focusout", PS_CHECK);



email.addEventListener("focusout", EMAIL_CHECK);