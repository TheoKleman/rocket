import $ from "zepto-modules";

import Router from "router/Router";

class Main
{
	constructor()
	{
		// sitemap
		window.sitemap = this._sitemap = require("./router/sitemap");

		this._init();
	}

    // Init
	//-----------------------------------------------------o

	_init()
	{
		// Init page manager
		this._router = new Router($('html'), $('body .application-container'));

		this._initEvents();
	}

	_initEvents()
	{
		$(window).on('resize', this._onResize.bind(this));
		this._onResize();

		// First view loaded
		this._router.on('firstViewLoaded', () => {
			// END LOADER
		})
	}

    // Redraw
	//-----------------------------------------------------o

	/**
	 * Drawing on requestAnimationFrame
	 */
	update()
	{
		this._router.update();
	}

    // Handlers
	//-----------------------------------------------------o

	/**
	 * Triggered on window resize
	 */
	_onResize()
	{
		this._router.resize();
	}
}

/**
 * Here we go
 */
$(document).ready(function()
{
	var main = new Main();

	(function tick()
	{
		main.update();
		window.requestAnimationFrame(tick);
	})();
});
