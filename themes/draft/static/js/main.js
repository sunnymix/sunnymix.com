window.addEventListener('DOMContentLoaded', function () {
	const LIGHT = 'light', DARK = 'dark';
	const themeSwitcher = document.getElementById('theme-switcher');

	themeSwitcher.addEventListener('click', function () {
		changeTheme(true);
	});

	function changeTheme(isToggle) {
		const currentTheme = localStorage.theme,
			{ classList } = document.querySelector('html');
		var newTheme = currentTheme;
		if (isToggle) {
			newTheme = currentTheme === LIGHT ? DARK : LIGHT;
		}
		classList.remove(currentTheme);
		classList.add(newTheme);
		localStorage.theme = newTheme;
	}

	changeTheme();
});