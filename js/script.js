let modal = document.getElementById('modal');
let modalClose = document.getElementById('modal-close');
let modalTarget = document.querySelector('.certificate')

modalClose.addEventListener('click', function () {
    modal.style.display = "none";
});

modalTarget.addEventListener('click', function () {
    if (modal.style.display = "none") {
        modal.style.display = "block";
    }
});