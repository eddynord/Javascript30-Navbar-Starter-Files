let modalBtn = document.querySelector('.dropdown-item');
let modal = document.querySelector('.modal-nav');
let closeBtn = document.querySelector('.btn-close')


modalBtn.onclick = function() {
    if(modal.style.display = 'none') {
        modal.style.display = 'block'
    }
}

closeBtn.onclick = function() {
    if(modal.style.display = 'block') {
        modal.style.display = 'none'
    }
}

