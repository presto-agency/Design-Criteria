export const initBlogNav = () => {
	const blogNav = document.querySelectorAll('.post-desc');
	if (blogNav.length) {
		(function addTitlesToRelativeBlock() {
			let titles = document.querySelectorAll('.post-desc h3, .post-desc h2');

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
		const navLinks = document.querySelectorAll('.post-content-list a');
		window.addEventListener('scroll', () => {
			const scrollY = window.scrollY;
			for (const link of navLinks) {
				const sectionId = link.getAttribute('href').substring(1); // Отримати id розділу
				const section = document.getElementById(sectionId);
				const sectionTop = section.offsetTop;
				const sectionBottom = sectionTop + section.clientHeight;
				if (scrollY >= sectionTop && scrollY < sectionBottom) {
					// link.classList.add('active-color');
				} else {
					// link.classList.remove('active-color');
				}
			}
		});
	}
};
