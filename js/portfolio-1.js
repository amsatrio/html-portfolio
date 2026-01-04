// FIX BUG NAVBAR OVERFLOW
const stickyTop = document.querySelector(".sticky-top");
const offcanvas = document.querySelector(".offcanvas");
offcanvas.addEventListener("hidden.bs.offcanvas", function () {
    stickyTop.style.overflow = "hidden";
});
offcanvas.addEventListener("show.bs.offcanvas", function () {
    stickyTop.style.overflow = "visible";
});
