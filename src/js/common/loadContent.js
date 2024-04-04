import Tween from 'gsap';
import {transition} from '../config/transitions.js';
import {showSplitWords} from '../modules/scroll/showSplitWords.js';

export const loadContent = () => {
	const preloader = document.querySelector('#preloader');
	const heroBanner = document.querySelector('#hero-banner');
	const header = document.querySelector('#header');
	const progress = document.querySelector('#progress');
	const content = document.querySelectorAll('[data-load-order]');

	if (preloader) {
		/* preloader */
		Tween.fromTo(preloader,
			{
				height: '100%',
			},
			{
				height: 0,
				duration: transition.skew.duration,
				ease: transition.skew.ease,
				onComplete: () => {
					preloader.remove();
				}
			});
		
		/* banner */
		if (heroBanner) {
			Tween.fromTo(heroBanner,
				{
					y: 300,
				},
				{
					y: 0,
					duration: transition.skew.duration,
					ease: transition.skew.ease,
				});
		}
		
		/* header */
		if (header) {
			Tween.fromTo(header,
				{
					yPercent: -100,
				},
				{
					yPercent: 0,
					delay: 0.3,
					duration: transition.skew.duration,
					ease: transition.skew.ease,
					onComplete: () => {
						showSplitWords();
					}
				});
		}
	} else {
		showSplitWords();
	}
	
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
	
	/* progress */
	if (progress) {
		Tween.fromTo(progress,
			{
				opacity: 0,
			}, {
				opacity: 1,
				delay: 1,
				duration: transition.skew.duration,
				ease: transition.skew.ease,
			});
	}
}