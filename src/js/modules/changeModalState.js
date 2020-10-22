// Calculator servis window multi form

import checkNumInputs from './checkNumInputs';

const changeModalState = (state) => {
    const windowForm = document.querySelectorAll('.balcon_icons_img'),
    windowWidth = document.querySelectorAll('#width'),
    windowHeight = document.querySelectorAll('#height'),
    windowType = document.querySelectorAll('#view_type'),
    windowProfile = document.querySelectorAll('.checkbox');

    // only numbers inputs
    checkNumInputs('#width');
    checkNumInputs('#height');

    function bindActionToEvents (event, elem, prop) {
        elem.forEach((item, i) => {
            item.addEventListener(event, () => {
                switch(item.nodeName) {
                    case 'SPAN' :
                        state[prop] = i;
                        break;
                    case 'INPUT' :
                        if (item.getAttribute('type') === 'checkbox') {
                            i === 0 ? state[prop] = "Холодное" : state[prop] = "Теплое";
                            elem.forEach((box, j) => {
                                box.checked = false;
                                if (i == j) {
                                    box.checked = true;
                                }
                            });
                        } else {
                            state[prop] = item.value;
                        }
                        break;
                    case 'SELECT' :
                        state[prop] = item.value;
                        break;
                }

                console.log(state);
                // if (elem.length > 1) {
                //     state[prop] = i;
                // } else {
                //     state[prop] = item.value;
                // }
                // console.log(state);
            });
        });
    }

    bindActionToEvents('click', windowForm, 'form');
    bindActionToEvents('input', windowWidth, 'width');
    bindActionToEvents('input', windowHeight, 'height');
    bindActionToEvents('change', windowType, 'type');
    bindActionToEvents('change', windowProfile, 'profile');

    // windowForm.forEach((item, i) => {
    //     item.addEventListener('click', () => {
    //         state.form = i;
    //         console.log(state);
    //     });
    // });
};

export default changeModalState;