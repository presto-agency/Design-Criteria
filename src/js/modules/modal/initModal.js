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
				if (window.innerWidth <= 768){
					const burger = document.querySelector('.burger');
					const header = document.querySelector('.header');
					burger.classList.toggle('active');
					header.classList.toggle('active');
				}
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
		const noResultsText = document.querySelector(".search-not-found");
		if(searchField.value.length > 1){
			headerSearchResult.classList.add('is-active');
			frontSearchFunction();
		}else{
			headerSearchResult.classList.remove('is-active');
			noResultsText.style.display = "none";
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
	function frontSearchFunction() {
		const query = document.querySelector("#searchItem").value.toLowerCase();
		const list = document.querySelector(".header-search-list").getElementsByTagName("li");
		const noResults = document.querySelector(".search-not-found");
		const noResultsTitle = document.querySelector(".search-value");
		let found = false;
		for (let i = 0; i < list.length; i++) {
			const text = list[i].textContent.toLowerCase();
			const spanText = list[i].getElementsByTagName("a")[0].textContent.toLowerCase();
			if (spanText.includes(query)) {
				list[i].style.display = "";
				const highlightedText = spanText.replace(new RegExp(query, "gi"), match => `<span class="highlight">${match}</span>`);
				list[i].getElementsByTagName("a")[0].innerHTML = highlightedText;
				found = true;
			} else {
				list[i].style.display = "none";
			}
		}
		if (!found) {
			noResults.style.display = "";
			noResultsTitle.textContent =  query;
		} else {
			noResults.style.display = "none";
		}
	}
};


