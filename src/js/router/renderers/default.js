import Highway from '@dogstudio/highway';
import {loadContent} from '../../common/loadContent.js';
import {initAccordion, initAccordionCore} from '../../modules/accordion/initAccordion.js'
import {initHeroCarousel} from '../../modules/carousels/heroCarousel.js';
import {scrollTo} from '../../common/scrollTo.js';
import {initModal, initModalSearch} from '../../modules/modal/initModal.js';

class DefaultRenderer extends Highway.Renderer {
	onEnter() {
		initAccordion();
		initAccordionCore();
		initHeroCarousel();
		console.log('Entering on page');
	}
	onEnterCompleted() {
		scrollTo();
		loadContent();
		initModal();
		initModalSearch();
		document.querySelector('.clock') ? initClock(true) : null;
		console.log('Completed Enter on page');
	}
}

export default DefaultRenderer;