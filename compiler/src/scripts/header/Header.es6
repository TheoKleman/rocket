import $ from "zepto-modules";

import Emitter from "component-emitter/index";
import gsap from "gsap/src/minified/TweenMax.min";

export default class Header extends Emitter
{
    constructor($dom)
    {
        super();

        this._$dom = $dom;
        this._isDisplayed = false;

        this._initEvents();
    }

    _initEvents()
    {

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
            height: 40
        })
        TweenMax.to(this._$dom, .35, {
            autoAlpha: 1,
            y: 0,
            onComplete: () => {
                this._isDisplayed = true;
            }
        })
    }

    hide()
    {
        TweenMax.to(this._$dom, .35, {
            autoAlpha: 0,
            y: -40
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
