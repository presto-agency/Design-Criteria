import Highway from '@dogstudio/highway';
import {initAccordion} from '../../modules/accordion/initAccordion.js';

import {scrollTo} from '../../common/scrollTo.js';
import {loadContent} from '../../common/loadContent.js';

class HomeRenderer extends Highway.Renderer {
	onEnter() {
		console.log('Entering on Home page');
	}
	onEnterCompleted() {
		scrollTo();
		loadContent();
		initAccordion();
		console.log('Completed Enter on Home page');
	}
}

export default HomeRenderer;