import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
	constructor(element, offset) {
		this.itemsToReveal = element;
		this.offsetPercent = offset;
		this.hideInitially();
		this.createWaypoints();
	}

	hideInitially() {
		this.itemsToReveal.addClass("reveal-item");
	}

	createWaypoints() {
		// get value of this, before it changes later on in this function to use constructor this
		let that = this;
		// run once for each element in the array
		this.itemsToReveal.each(function() {
			let currentItem = this;
			new Waypoint({
				element: currentItem,
				handler: function() {
					$(currentItem).addClass("reveal-item--is-visible");
				},
				offset: that.offsetPercent
			});
		});
	}
}

export default RevealOnScroll;