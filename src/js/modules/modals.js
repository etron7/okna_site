const modals = () => {
    function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {
        const trigger = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              close = document.querySelector(closeSelector),
              windows = document.querySelectorAll('[data-modal]')
              scroll = calcScroll(); // remove scroll popup

              trigger.forEach(item => {
                item.addEventListener('click', (e) => {
                    if (e.target) {
                        e.preventDefault();
                    }
                    // close modals - closeClickOverlay true
                    windows.forEach(item => {
                        item.style.display = 'none';
                    });
        
                    modal.style.display = "block";
                    // scroll off
                    document.body.style.overflow = "hidden";
                    // document.body.classList.add('modal-open'); // bootstrap

                    document.body.style.marginRight = `${scroll}px`; // remove scroll popup - add margin scroll
                });
            });

        // close popup click on close btn
        close.addEventListener('click', () => {

             // close modals -  closeClickOverlay true
             windows.forEach(item => {
                item.style.display = 'none';
            });

            modal.style.display = "none";
            document.body.style.overflow = "";

            document.body.style.marginRight = `0px`; // popup - remove margin scroll

        });
        // close popup click on empty space
        modal.addEventListener('click', (e) => {
            if (e.target === modal && closeClickOverlay) {
                // disable close -  modals calc forms on empty space - closeClickOverlay false
                windows.forEach(item => {
                    item.style.display = 'none';
                });

                modal.style.display = "none";
                document.body.style.overflow = "";

                document.body.style.marginRight = `0px`; // popup - remove margin scroll
            }
        });
    }
    // show modal after 60 sec
    function showModalByTime(selector, time) {
        setTimeout(function() {
            document.querySelector(selector).style.display = 'block';
            document.body.style.overflow = "hidden";

        }, time);
    }

    // Popup - browser window scrolling remove
    function calcScroll() {
        let div = document.createElement('div');

        div.style.width = "50px";
        div.style.height = "50px";
        div.style.overflow = "scroll";
        div.style.visibility = "hidden";

        document.body.appendChild(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();

        return scrollWidth;
    }

   
    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
    bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
    // showModalByTime('.popup', 60000);
};

export default modals;
