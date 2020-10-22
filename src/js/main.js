import "./slider";
import modals from './modules/modals';
import tabs from './modules/tabs';
import forms from './modules/forms';
import changeModalState from './modules/changeModalState';
import timer from './modules/timer';
import gallery from './modules/gallery';

window.addEventListener('DOMContentLoaded', () => {
    "use strict";

    let modalState = {};
    let deadline = '2021-11-19';

    changeModalState(modalState);
    modals();
    tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active'); // Табы - ОСТЕКЛЕНИЕ БАЛКОНОВ И ЛОДЖИЙ
    tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click'); // Табы - ЗАКАЖИТЕ ОТДЕЛКУ БАЛКОНА ..!
    tabs('.balcon_icons', '.balcon_icons_img', '.big_img > img', '.do_image_more', 'inline-block');
    forms(modalState);
    timer('.container1', deadline);
    gallery();
});