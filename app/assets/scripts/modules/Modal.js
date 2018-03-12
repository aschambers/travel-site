import $ from 'jquery';

class Modal {
	constructor() {
		this.openModalButton = $(".open-modal");
		this.modal = $(".modal");
		this.closeModalButton = $(".modal__close");
		this.events();
	}

	events() {
		// clicking the open modal button
		this.openModalButton.click(this.openModal.bind(this));
		// clickng the x close modal button
		this.closeModalButton.click(this.closeModal.bind(this));
		// pushes the any key, keyup method in jquery, let this keyword keep value on click
		$(document).keyup(this.keyPressHandler.bind(this));
	}

	// if escape key was pressed, close modal
	keyPressHandler(e) {
		if (e.keyCode == 27) {
			this.closeModal();
		}
	}

	openModal() {
		// this keyword reset to element clicked on by this point, if bind not used
		this.modal.addClass("modal--is-visible");
		return false;
	}

	closeModal() {
		// this keyword reset to element clicked on by this point, if bind not used
		this.modal.removeClass("modal--is-visible");
	}
}

export default Modal;