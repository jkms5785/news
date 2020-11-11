const id = document.querySelector(`#js-id`),
    ps = document.querySelector(`#js-ps`),
    signIn = document.querySelector(`#js-login`);

const noti = document.querySelector(`#js-noti`);

const form = document.querySelector(`#js-form`);

function login(e) {
    e.preventDefault();
    id_check = id.value;
    ps_check = ps.value;
    // console.log(id_check, ps_check);

    if (!id_check || !ps_check) {
        noti.innerHTML = "아이디와 비밀번호를 모두 입력해주세요."
        noti.style.paddingTop = "8px";
        noti.style.paddingBottom = "12px";
    } else {
        form.submit();
        id.value = "";
        ps.value = "";
    }
}

signIn.addEventListener("click", login);