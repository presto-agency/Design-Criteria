import Highway from '@dogstudio/highway';
import {loadContent} from '../../common/loadContent.js';
import {initAccordion, initAccordionCore} from '../../modules/accordion/initAccordion.js'
import {initHeroCarousel} from '../../modules/carousels/heroCarousel.js';
import {initBlogNav} from '../../modules/blog/initBlogNav.js';
import {scrollTo} from '../../common/scrollTo.js';
import {initModal, initModalSearch} from '../../modules/modal/initModal.js';


class DefaultRenderer extends Highway.Renderer {
	onEnter() {
		initAccordion();
		initBlogNav();
		initAccordionCore();
		initHeroCarousel();
		console.log('Entering on page');
	}
	onEnterCompleted() {
		scrollTo();
		loadContent();
		initModal();
		initModalSearch();
		console.log('Completed Enter on page');
	}
}

export default DefaultRenderer;