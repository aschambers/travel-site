import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class StickyHeader {
	constructor() {
		this.siteHeader = $(".site-header");
		this.headerTriggerElement = $(".large-hero__title");
		this.createHeaderWaypoint();
	}

	createHeaderWaypoint() {
		// in this context, it's pointing towards the instance of our class
		var that = this;
		new Waypoint({
			// expects native DOM elemnt, not jquery object, so includ [0].
			// first item in jquery array is a pointer in the native DOM element.
			element: this.headerTriggerElement[0],
			handler: function(direction) {
				if(direction == "down") {
					that.siteHeader.addClass("site-header--dark");
				} else {
					that.siteHeader.removeClass("site-header--dark");
				}
			}
		});
	}
}

export default StickyHeader;