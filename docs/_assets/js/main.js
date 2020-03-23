window.addEventListener("load", function () {
    toggleBackToTopButton();
    window.addEventListener("scroll", toggleBackToTopButton);

    document.querySelector("#back-to-top")
        .addEventListener("click", scrollToTop);

});

function toggleBackToTopButton() {
    let minHeightToShow = 50;
    let show = (document.body.scrollTop >= minHeightToShow || document.documentElement.scrollTop >= minHeightToShow);
    document.querySelector("#back-to-top").style.display = show ? "block" : "none";
}

function scrollToTop() {
    window.scrollTo(0, 0);
}
