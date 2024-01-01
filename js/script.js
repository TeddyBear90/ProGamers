document.addEventListener('DOMContentLoaded', function () {
	const navbar = document.querySelector('.navbar')

	function addShadow() {
		if (window.scrollY >= 300) {
			navbar.classList.add('shadow-bg')
		} else {
			navbar.classList.remove('shadow-bg')
		}
	}

    window.addEventListener('scroll', addShadow)
})
