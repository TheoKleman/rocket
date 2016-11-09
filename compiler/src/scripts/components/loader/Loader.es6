import $ from "zepto-modules";

import gsap from "gsap/src/minified/TweenMax.min";

export default class Loader
{
    constructor($dom)
    {
        this._$dom = $dom;
        this._$content = this._$dom.find('.c-loader__content');
        this._$after = this._$dom.find('.c-loader__after');

        this._init();
    }

    _init()
    {
        this._wWidth = $(window).width();
    }

    // Methods
    //-----------------------------------------------------o

    hide(callback)
    {
        let timelime = new TimelineMax();
        timelime.add(
            TweenMax.to(this._$after, .7, {
                width: this._wWidth,
                ease: Power4.easeIn,
            }),
            "start"
        )
        timelime.add(
            TweenMax.to(this._$content, .7, {
                x: - this._wWidth/4,
                ease: Power4.easeIn
            }),
            "start"
        )
        timelime.add(
            TweenMax.to(this._$dom, .25, {
                x: - this._wWidth,
                ease: Power1.easeInOut,
                onComplete: () => {
                    if (callback) {
                        callback();
                    }
                }
            }),
            "start+=0.65"
        )
    }
}
