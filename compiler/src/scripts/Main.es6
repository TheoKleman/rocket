import $ from "zepto-modules";

import * as THREE from "three/build/three.min";

import Loader from "components/loader/Loader";
import SmokeGL from "components/smokeGL/SmokeGL";
import Page from "pages/Page";
import Router from "router/Router";

class Main
{
  constructor()
  {
    // sitemap
    window.sitemap = this._sitemap = require("./router/sitemap");
    window.THREE = THREE;
    window.$ = $;

    this._assetsLoaded = false;
    this._firstViewLoaded = false;

    this._init();
  }

  // Init
  //-----------------------------------------------------o

  _init()
  {
    // Init loader
    this._loader = new Loader($('body .c-loader'));

    // Init page manager
    this._router = new Router($('html'), $('body .application-container'));

    // Init SmokeGL
    this._smokeGL = new SmokeGL($('body .c-glsmoke'));

    this._initEvents();
  }

  _initEvents()
  {
    $(window).on('resize', this._onResize.bind(this));

    // assetsLoaded
    this._loader.on('assetsLoaded', () => {
      this._assetsLoaded = true;
      this._hideLoader();

    });

    // First view loaded
    this._router.on('firstViewLoaded', () => {
      this._firstViewLoaded = true;
      this._hideLoader();
    });
  }

  // Methods
  //-----------------------------------------------------o

  _hideLoader()
  {
    if (this._assetsLoaded && this._firstViewLoaded) {
      this._loader.hide(() => {
        this._router.currentPage.show();
        Page.header.show();
        this._smokeGL.show();
      });
    }
  }

  // Redraw
  //-----------------------------------------------------o

  /**
  * Drawing on requestAnimationFrame
  */
  update()
  {
    this._router.update();
    this._smokeGL.update();
  }

  // Handlers
  //-----------------------------------------------------o

  /**
  * Triggered on window resize
  */
  _onResize()
  {
    this._router.resize();
    this._smokeGL.resize();
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
