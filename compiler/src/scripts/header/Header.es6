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

        this._init();
    }

    _init()
    {
        TweenMax.set([this._$logo, this._$li], {
            autoAlpha: 0,
            y: -10
        })
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
        })
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
        })
        TweenMax.to(this._$dom, .35, {
            height: 0,
            onComplete: () => {
                this._isDisplayed = false;
            }
        })
    }

    // Handlers
    //-----------------------------------------------------o
}
