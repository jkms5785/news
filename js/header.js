const searchForm = document.querySelector("#js-searchForm"),
    serachInput = document.querySelector("#js-searchInput"),
    searchIcon = document.querySelector("#js-searchIcon");

const detailBtn = document.querySelectorAll(".js-detailBtn");

const searchFilter = document.querySelector(`#js-searchFilter`);

function Searchtoggle(e) {
    e.stopPropagation();
    let x = serachInput.parentElement.offsetLeft;
    detailBtn[0].parentElement.style.transform = `translateX(${x}px)`
    detailBtn[0].classList.toggle(`hide`);
    detailBtn[1].classList.toggle(`hide`);
    detailBtn[2].classList.toggle(`hide`);

    if (detailBtn[0].classList.contains(`hide`)) {
        let fadeOutmedia = document.querySelector("#js-media");
        let fadeOutall = document.querySelector("#js-all");
        let fadeOutaccident = document.querySelector("#js-accident");

        fadeOutmedia.classList.add(`hide`);
        fadeOutall.classList.add(`hide`);
        fadeOutaccident.classList.add(`hide`);
    }

    searchFilter.classList.toggle(`hide`);
    searchFilter.style.height = `${window.innerHeight}px`;
    searchFilter.addEventListener(`resize`, function () {
        searchFilter.style.height = `${window.innerHeight}px`;
    })
    searchFilter.addEventListener(`click`, removetoggle);
}

function removetoggle(e) {
    e.stopPropagation();
    detailBtn[0].classList.add(`hide`);
    detailBtn[1].classList.add(`hide`);
    detailBtn[2].classList.add(`hide`);
    let fadeOutmedia = document.querySelector("#js-media");
    let fadeOutall = document.querySelector("#js-all");
    let fadeOutaccident = document.querySelector("#js-accident");

    fadeOutmedia.classList.add(`hide`);
    fadeOutall.classList.add(`hide`);
    fadeOutaccident.classList.add(`hide`);

    searchFilter.classList.toggle(`hide`);
}

function searchPush() {
    searchForm.submit();
}

searchIcon.addEventListener('click', searchPush);
serachInput.addEventListener('focus', Searchtoggle);

function keyCheck(e) {
    window.onkeydown = function (e) {
        console.log(e.keyCode);
        if (e.keyCode == 13) {
            e.preventDefault();
            searchForm.submit();
        }
    }
}

serachInput.addEventListener(`focus`, keyCheck);