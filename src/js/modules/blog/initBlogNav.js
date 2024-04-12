export const initBlogNav = () => {
	const blogNav = document.querySelectorAll('.post-desc');
	function anchorAnimation(anchors, yOffset) {
		for (let anchor of anchors) {
			anchor.addEventListener('click', function (e) {
				e.preventDefault();
				const blockID = anchor.getAttribute('href').substr(1);
				const obj = document.getElementById(blockID);
				const y = obj.getBoundingClientRect().top + window.pageYOffset + yOffset;
				window.scrollTo({ top: y, behavior: 'smooth' });
			})
		}
	}
	if (blogNav.length) {

		function showMenu(menu, objects, topValue, bottomValue) {
			window.addEventListener("scroll", scrolling, false);

			function isFullyVisible(el) {
				let elementBoundary = el.getBoundingClientRect();
				let top = elementBoundary.top;
				let bottom = elementBoundary.bottom;
				return ((top <= topValue) && (bottom >= bottomValue));
			}

			function scrolling() {
				if (isFullyVisible(objects)) {
					menu.classList.add('active');
				}
				else {
					menu.classList.remove('active');
				}
			}
			scrolling();
		};


		function scrollName(elementsPage) {
			window.addEventListener("scroll", scrolling, true);
			function scrolling() {
				elementsPage.forEach(el => {
					if (isFullyVisible(el)) {
						let idEl = el.id;
						const changeBtn = document.getElementById('change-btn');
						changeBtn.innerHTML = idEl;
					}
				});
			}
			function isFullyVisible(el) {
				let topOfElements = el.getBoundingClientRect().top;
				let bottomOfElements = el.getBoundingClientRect().bottom;
				return (((topOfElements <= 130) && (bottomOfElements > 0)));
			}
		}


		(function addTitlesToRelativeBlock() {
			let titles = document.querySelectorAll('.post-desc h2, .post-desc h3');

			const relativeBlock = document.querySelector('.post-content-list');
			let first_el = document.createElement('a');
			titles.forEach(function (title, i) {
				title.setAttribute('id', `${i+1}`);
			});
			titles.forEach(title => {
				let titleContent = title.innerHTML;
				let titleId = title.id;
				let new_el = document.createElement('a');
				new_el.setAttribute('href', `#${titleId}`);
				new_el.innerHTML = titleContent;
				relativeBlock.appendChild(new_el);
			});
		}());

		(function anchorsFeature() {
			const anchors = document.querySelectorAll('a[href*="#"]');
			const yOffset = -92;
			anchorAnimation(anchors, yOffset)
		}());
		(function featureRelativeBlock() {
			const menu = document.querySelector('.post-content-list');
			const editor = document.querySelector('.post-desc');
			let topValue = 104;
			let bottomValue = 0;
			showMenu(menu, editor, topValue, bottomValue)
		}());

		(function feauterScrollColor() {

			function scrollerColors(elementsPage, sheet) {
				window.addEventListener("scroll", scrolling, false);
				function scrolling() {
					elementsPage.forEach(el => {
						if (isFullyVisible(el)) {
							let idEl = el.id;
							const activeBtns = document.querySelectorAll('.active-color');
							let btns = document.querySelectorAll(`a[href='#${idEl}']`);
							changeClass(activeBtns, btns)
						}
					});
				}
				function changeClass(activeBtns, els) {
					activeBtns.forEach(aBtn => {
						aBtn.classList.remove('active-color')
					});
					els.forEach(el => {
						el.classList.add('active-color')
					});
				}
				function isFullyVisible(el) {
					let topOfElements = el.getBoundingClientRect().top;
					let bottomOfElements = el.getBoundingClientRect().bottom;
					return (((topOfElements <= 200) && (bottomOfElements > 0)));
				}
				scrolling();
			}

			let elementsPage = document.querySelectorAll('.post-desc h2, .post-desc h3');
			scrollerColors(elementsPage, blogNav)
		}());
	}
};
