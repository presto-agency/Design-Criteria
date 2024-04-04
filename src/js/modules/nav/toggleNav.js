import Tween from 'gsap';
export const initMobileNavigation = () => {
	const burger = document.querySelector('.burger');
	const header = document.querySelector('.header');
	if (burger) {
        burger.addEventListener('click', () => {
            burger.classList.toggle('active');
            header.classList.toggle('active');
        });
	}
};
