const bindModal = () => {
    const openModal = (triggerSelector, modalSelector, closeSelector) => {

        const trigger = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              close = document.querySelector(closeSelector);

        trigger.forEach(i => {
            i.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }
                modal.style.display = "block";
                document.body.style.overflow = "hidden";
            });
            /* document.body.classList.add('modal-open') */
        });
        close.addEventListener('click', (e) => {
            e.preventDefault();
            modal.style.display = "none";
            document.body.style.overflow = "";
            /* document.body.classList.remove('modal-open') */
        });
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = "none";
                document.body.style.overflow = "";
                /* document.body.classList.remove('modal-open') */
            }
        });
    };

    function autoModal(selector, time) {
        setTimeout(function() {
            document.querySelector(selector).style.display = "block";
            document.body.style.overflow = "hidden";
        }, time);
    }

    openModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    openModal('.phone_link', '.popup', '.popup .popup_close');
    /* autoModal('.popup', 60000); */
    
};

export default bindModal;