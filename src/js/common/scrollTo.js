import {lenis} from './scroll.js';
export const scrollTo = () => {
	const scrollButtons = document.querySelectorAll('.scroll-action');
	const heroMain = document.querySelectorAll('.hero-main');
	if(heroMain.length){
        if (scrollButtons.length) {
            scrollButtons.forEach((button) => {
                button.addEventListener('click', () => {
                    let box = document.querySelector('.hero');
                    let width = box.offsetWidth;
                    let height = box.offsetHeight;
                    console.log(height);
                    window.scrollTo({ top: height, behavior: 'smooth'});
                    // const target = document.querySelector(button.dataset.target);
                    // if (target) {
                    //     lenis.scrollTo(target, { duration: 1.5 });
                    // }
                });
            });
        }
    }

}