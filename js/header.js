const searchForm = document.querySelector("#js-searchForm"),
    serachInput = document.querySelector("#js-searchInput"),
    searchIcon = document.querySelector("#js-searchIcon");

const detailBtn = document.querySelectorAll(".js-detailBtn");

const searchFilter = document.querySelector(`#js-searchFilter`);

function Searchtoggle(e) {
    e.stopPropagation();
    let x = serachInput.parentElement.offsetLeft;
    detailBtn[0].parentElement.style.transform = `translateX(${x}px)`

    for (let i = 0; i < detailBtn.length; i++) {
        detailBtn[i].classList.toggle(`hide`);
    }

    if (detailBtn[0].classList.contains(`hide`)) {
        let fadeOutMedia = document.querySelector("#js-media");
        let fadeOutAll = document.querySelector("#js-all");
        // let fadeOutaccident = document.querySelector("#js-accident");
        let fadeOutDate = document.querySelector("#js-date");

        fadeOutMedia.classList.add(`hide`);
        fadeOutAll.classList.add(`hide`);
        fadeOutDate.classList.add(`hide`);
        // fadeOutaccident.classList.add(`hide`);
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
    for (let i = 0; i < detailBtn.length; i++) {
        detailBtn[i].classList.toggle(`hide`);
    }
    let fadeOutMedia = document.querySelector("#js-media");
    let fadeOutAll = document.querySelector("#js-all");
    // let fadeOutaccident = document.querySelector("#js-accident");
    let fadeOutDate = document.querySelector("#js-date");

    fadeOutMedia.classList.add(`hide`);
    fadeOutAll.classList.add(`hide`);
    // fadeOutaccident.classList.add(`hide`);
    fadeOutDate.classList.add(`hide`);

    searchFilter.classList.toggle(`hide`);
}

function searchPush() {
    searchForm.submit();
}

searchIcon.addEventListener('click', searchPush);
serachInput.addEventListener('focus', Searchtoggle);


function keyCheckOut() {
     window.onkeydown = function(e) {
    //    console.log(`enter is locked`);
    }
}

function keyCheck(e) {
    window.onkeydown = function (e) {
        if (e.keyCode == 13) {
            e.preventDefault();
            searchForm.submit();
            // console.log(`enter`);
        }
    }
}

serachInput.addEventListener(`focusin`, keyCheck);
serachInput.addEventListener(`focusout`, keyCheckOut);