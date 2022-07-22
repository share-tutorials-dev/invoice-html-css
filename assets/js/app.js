// Start Add/Edit modal button - invoice
const showAddModal = document.querySelector(
    '.main__modal'
);
const toggleShowModal = document.querySelector(
    '.btn__open--modal'
);
const closeShowModal = document.querySelectorAll(
    '.btn__close--modal'
);

toggleShowModal.addEventListener('click', () => {
    showAddModal.classList.toggle('show');
});

closeShowModal.forEach((btn) => {
    btn.addEventListener('click', () => {
        showAddModal.classList.toggle('show');
    });
});

// End Add/Edit modal button - invoice
