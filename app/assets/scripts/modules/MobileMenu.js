import $ from 'jquery';

class MobileMenu {
	constructor() {
		this.menuIcon = $(".site-header__menu-icon");
		this.menuContent = $(".site-header__menu-content");
		// need to call as soon as object is created for it to work
		this.events();
	}

	events() {
		// bind menu icon to menu content toggle class
		this.menuIcon.click(this.toggleTheMenu.bind(this));
	}

	toggleTheMenu() {
		// change class name to this when the menu icon is clicked because it's binded
		this.menuContent.toggleClass("site-header__menu-content--is-visible");
	}
}

export default MobileMenu;