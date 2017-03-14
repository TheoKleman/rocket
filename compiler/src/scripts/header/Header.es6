import Emitter from "component-emitter/index";
import gsap from "gsap/src/minified/TweenMax.min";

export default class Header extends Emitter
{
  constructor($dom)
  {
    super();

    this._$dom = $dom;
    this._isDisplayed = false;

    this._$logo = this._$dom.find('h1');
    this._$li  = this._$dom.find('ul > li');
    this._$links = this._$li.find('a');

    this._init();
    this._initEvents();
  }

  _init()
  {
    TweenMax.set([this._$logo, this._$li], {
      autoAlpha: 0,
      y: -10
    });
  }

  _initEvents()
  {
    this._$links
    .on('mouseenter', this._onLinksMouseEnter.bind(this))
    .on('mouseleave', this._onLinksMouseLeave.bind(this));
  }

  // Getters & setters
  //-----------------------------------------------------o

  get isDisplayed()
  {
    return this._isDisplayed;
  }

  // Methods
  //-----------------------------------------------------o

  show()
  {
    TweenMax.to(this._$dom, .35, {
      height: 30,
      ease: Power2.easeInOut
    });
    TweenMax.to(this._$dom, .35, {
      autoAlpha: 1,
      y: 0,
      ease: Power2.easeInOut
    });
    TweenMax.to(this._$logo, .35, {
      autoAlpha: 1,
      y: 0,
      ease: Power2.easeInOut
    });
    TweenMax.staggerTo(this._$li, .35, {
      autoAlpha: 1,
      y: 0,
      ease: Power2.easeInOut,
      onComplete: () => {
        this._isDisplayed = true;
      }
    }, .1);
  }

  hide()
  {
    TweenMax.to(this._$dom, .35, {
      autoAlpha: 0,
      y: -30
    });
    TweenMax.to(this._$dom, .35, {
      height: 0,
      onComplete: () => {
        this._isDisplayed = false;
      }
    });
  }

  // Handlers
  //-----------------------------------------------------o

  _onLinksMouseEnter(e)
  {
    let $before = $(e.target).find('span.before');
    let timelime = new TimelineMax();

    timelime.add(
      TweenMax.to($before, .2, {
        scaleX: 1,
        ease: Power2.easeInOut,
        onComplete: () => {
          $before.css('transform-origin', 'right');
        }
      })
    ).add(
      TweenMax.to($before, .2, {
        scaleX: 0,
        ease: Power2.easeInOut,
        onComplete: () => {
          $before.css('transform-origin', 'left');
        }
      })
    );
  }

  _onLinksMouseLeave(e)
  {
    let $before = $(e.target).find('span.before');
    TweenMax.to($before, .1, {
      scaleX: 0,
      ease: Power2.easeInOut,
      onComplete: () => {
        $before.css('transform-origin', 'left');
      }
    });
  }
}
