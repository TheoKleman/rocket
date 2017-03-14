import Vars from "Vars";

import Emitter from "component-emitter/index";
import gsap from "gsap/src/minified/TweenMax.min";
import AssetsLoader from "assets-loader/src/index";

export default class Loader extends Emitter
{
  constructor($dom)
  {
    super();

    this._$dom = $dom;
    this._$rocket = this._$dom.find('.c-loader__content__logo');
    this._$text = this._$dom.find('.c-loader__content__text');
    this._$after = this._$dom.find('.c-loader__after');

    this._init();
  }

  _init()
  {
    this._wHeight = $(window).height();

    this._loadAssets();
  }


  // Methods
  //-----------------------------------------------------o

  _loadAssets()
  {
    let self = this;
    let dURI = Vars.dURI;

    this._assetsLoader = new AssetsLoader({
      assets: [
        dURI + '/img/smoke.png',
      ]
    })
    .on('progress', function(progress) {
      console.log('%cload assets : ' + (progress * 100).toFixed() + '%', 'color: #7c3fde; font-size: 13px');
    })
    .on('complete', function(map) {
      self.emit('assetsLoaded');
    })
    .start();
  }

  hide(callback)
  {
    let timelime = new TimelineMax();

    // Text translate right
    timelime.add(
      TweenMax.to(this._$text, .5, {
        x: 0,
        ease: Power2.easeInOut
      }),
      "start"
    );
    // Rocket fade in
    timelime.add(
      TweenMax.to(this._$rocket, .25, {
        autoAlpha: 1,
        ease: Power2.easeInOut
      }),
      "start+=0.5"
    );

    // Rocket launch
    timelime.add(
      TweenMax.to(this._$rocket, .6, {
        y: - (this._wHeight/2 + 100),
        ease: Power4.easeIn
      }),
      "start+=0.85"
    );

    // Text translate up
    timelime.add(
      TweenMax.to(this._$text, .6, {
        y: - this._wHeight/2.5,
        ease: Power4.easeIn
      }),
      "start+=0.85"
    );

    // After height
    timelime.add(
      TweenMax.to(this._$after, .6, {
        height: this._wHeight,
        ease: Power4.easeIn,
      }),
      "start+=0.85"
    );

    // Loader wrapper translate up
    timelime.add(
      TweenMax.to(this._$dom, .3, {
        y: - this._wHeight,
        ease: Power1.easeInOut,
        onComplete: () => {
          $('body').addClass('loaded');
          if (callback) {
            this.destroy();
            callback();
          }
        }
      }),
      "start+=1.3"
    );
  }

  // Redraw
  //-----------------------------------------------------o

  destroy()
  {
    this._$dom.remove();
  }
}
