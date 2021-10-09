var modal = document.querySelector(".modal");
var trigger = document.querySelectorAll(".trigger");
var closeButton = document.querySelector(".close-button");

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}
if (trigger && closeButton) {
    for (let i = 0; i < trigger.length; i++)
    trigger[i].addEventListener("click", toggleModal);
    closeButton.addEventListener("click", toggleModal);
}
// trigger.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);
