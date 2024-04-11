export const initShare = () => {
	var copyButtons = document.querySelectorAll('.copyButton');
	if (copyButtons.length) {
		copyButtons.forEach(function(button) {
			button.addEventListener('click', function() {
				var tempInput = document.createElement('input');
				tempInput.value = window.location.href;
				document.body.appendChild(tempInput);
				tempInput.select();
				document.execCommand('copy');
				document.body.removeChild(tempInput);
				console.log('URL страницы скопирован: ' + tempInput.value);
			});
		});
	}
};
