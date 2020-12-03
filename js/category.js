const mediaBtn = document.querySelector("#js-mediaBtn"),
    media = document.querySelector("#js-media");

const allBtn = document.querySelector("#js-allBtn"),
    all = document.querySelector("#js-all");

// const accidentBtn = document.querySelector("#js-accidentBtn"),
// accident = document.querySelector("#js-accident");

const dateBtn = document.querySelector("#js-dateBtn"),
    date = document.querySelector("#js-date");

function makeCategoryDetail(e) {
    let Xpos = Number(mediaBtn.parentElement.style.transform.substring(11, 14));
    let mediaBtnWidth = mediaBtn.clientWidth,
        allBtnWidth = allBtn.clientWidth,
        // accidentBtnWidth = accidentBtn.clientWidth;
        dateBtnWidth = dateBtn.clientWidth;

    let borderWidth = 2.5;

    if (e.target == mediaBtn) {
        media.classList.toggle("hide");
        all.classList.add("hide");
        // accident.classList.add("hide");
        date.classList.add("hide");
        media.style.transform = `translateX(${Xpos}px)`;

    } else if (e.target == allBtn) {
        all.classList.toggle("hide");
        media.classList.add("hide");
        // accident.classList.add("hide");
        date.classList.add("hide");
        all.style.transform = `translateX(${Xpos + mediaBtnWidth + 16 + borderWidth}px)`;

        // } else if (e.target == accidentBtn) {
        //     accident.classList.toggle("hide");
        //     media.classList.add("hide");
        //     all.classList.add("hide");

        //     accident.style.transform = `translateX(${Xpos + (accidentBtnWidth * 2 ) + 24}px)`;
        
    } else if (e.target == dateBtn) {
        date.classList.toggle("hide");
        media.classList.add("hide");
        all.classList.add("hide");

        date.style.transform = `translateX(${Xpos + mediaBtnWidth + 16 + borderWidth + allBtnWidth + 16 + borderWidth}px)`;
        //   date.style.transform = `translateX(${Xpos + (dateBtnWidth * 2 ) + 24}px)`;
    }
}

mediaBtn.addEventListener("click", makeCategoryDetail);
allBtn.addEventListener("click", makeCategoryDetail);
// accidentBtn.addEventListener("click", makeCategoryDetail);
dateBtn.addEventListener("click", makeCategoryDetail);

mediaBtn.classList.add("hide");
allBtn.classList.add("hide");
// accidentBtn.classList.add("hide");
dateBtn.classList.add("hide");

media.classList.add("hide");
all.classList.add("hide");
// accident.classList.add("hide");
date.classList.add("hide");