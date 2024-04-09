import Tween from 'gsap';
import {transition} from '../config/transitions.js';

export const loadContent = () => {

	const content = document.querySelectorAll('[data-load-order]');
	/* content */

	if (content.length) {
		Tween.fromTo(content,
			{
				opacity: 0,
				y: 50,
			}, {
				opacity: 1,
				y: 0,
				delay: 0.8,
				stagger: 0.1,
				duration: transition.skew.duration,
				ease: transition.skew.ease,
			});
	}

}