export const initShare = () => {
	const copyButtons = document.querySelectorAll('.share-list .copyButton');
	if (copyButtons.length) {
		copyButtons.forEach(function(button) {
			button.addEventListener('click', function(e) {
				e.preventDefault();
				var tempInput = document.createElement('input');
				tempInput.value = window.location.href;
				document.body.appendChild(tempInput);
				tempInput.select();
				document.execCommand('copy');
				document.body.removeChild(tempInput);
				const copyButtonsTooltip =	document.querySelector('.tooltip');
				copyButtonsTooltip.classList.add('is-active');
				setTimeout(function(){
					copyButtonsTooltip.classList.remove('is-active');
				}, 2000);

			});
		});
	}
};
