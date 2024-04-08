import {switchModal} from './switchModal.js';

export const initModal = () => {
	const closeElements = document.querySelectorAll('[data-modal-close]');
	const openElements = document.querySelectorAll('[data-modal-open]');

	/* close */
	if (closeElements.length) {
		for (let closeElement of closeElements) {
			closeElement.addEventListener('click', () => {
				const modalId = closeElement.dataset.modalClose;
				switchModal(modalId, false);
			});
		}
	}

	/* open */
	if (openElements.length) {
		for (let openElement of openElements) {
			openElement.addEventListener('click', () => {
				const modalId = openElement.dataset.modalOpen;
				switchModal(modalId, true);
			})
		}
	}
};

export const initModalSearch = () => {
	const openSearch = document.querySelector('.header-panel-search');
	const headerSearch = document.querySelector('.header-search');
	const headerSearchResult = document.querySelector('.header-search-result');
	const headerItem = document.querySelector('.header');
	const headerBurger = document.querySelector('.burger');
	const searchField = document.querySelector('.search-field');
	openSearch.addEventListener('click', () => {
		headerItem.classList.toggle('active-search');
		headerItem.classList.remove('active');
		headerBurger.classList.remove('active');
		headerSearch.classList.toggle('is-active');
	});
	function handleClick(event) {
		if (headerItem.contains(event.target)) return;
		headerItem.classList.remove('active-search');
		headerSearch.classList.remove('is-active');
	}

	document.addEventListener('click', handleClick);
	searchField.addEventListener("input", () => {
		if(searchField.value.length > 4){
			headerSearchResult.classList.add('is-active');
		}else{
			headerSearchResult.classList.remove('is-active')
		}
	});
	window.addEventListener("scroll", function() {
		if (window.scrollY >= 100) {
			headerItem.classList.remove('active-search');
			headerItem.classList.remove('active');
			headerBurger.classList.remove('active');
			headerSearch.classList.remove('is-active');
		}
	});
};


