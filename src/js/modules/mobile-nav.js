function mobileNav() {
	const navBtnOpen = document.getElementById('modalOpen');
	const navBtnClose = document.getElementById('modalClose');

	const navOverlay = document.getElementById('mobileNavOverlay');
	const nav = document.getElementById('mobileNav');

	function toggleMobileNav() {
		navOverlay.classList.toggle('mobile-nav-overlay--open');
		nav.classList.toggle('mobile-nav--open');
		document.body.classList.toggle('no-scroll');
	}

	navBtnOpen.onclick = toggleMobileNav;
	navBtnClose.onclick = toggleMobileNav;
	navOverlay.onclick = toggleMobileNav;
}

export default mobileNav ;