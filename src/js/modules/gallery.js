// Foto gallery image modal popup
const gallery = () => {
    const imgPopup = document.createElement('div'),
    workSection = document.querySelector('.works'),
    bigImage = document.createElement('img');

    imgPopup.classList.add('popup');
    workSection.appendChild(imgPopup);

    // css image center 
    imgPopup.style.justifyContent = 'center';
    imgPopup.style.alignItems = 'center';
    imgPopup.style.display = 'none';

    imgPopup.appendChild(bigImage);

    workSection.addEventListener('click', (e) => {
        e.preventDefault();

        let target = e.target;
        //  Image open in popup
        if (target && target.classList.contains('preview')) {
            imgPopup.style.display = 'flex';
            const path = target.parentNode.getAttribute('href'); // get img url
            bigImage.setAttribute('src', path); // set img url
        }
        // Popup image close click on empty
        if (target && target.matches('div.popup')) {
            imgPopup.style.display = 'none';
        }
    });
};

export default gallery;