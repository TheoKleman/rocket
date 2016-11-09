import $ from "zepto-modules";

import gsap from "gsap/src/minified/TweenMax.min";

export default class Loader
{
    constructor($dom)
    {
        this._$dom = $dom;
        this._$content = this._$dom.find('.c-loader__content');

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
            TweenMax.to(this._$content, .85, {
                x: this._wWidth/1.3,
                ease: Power4.easeIn
            }),
            "start"
        )
        timelime.add(
            TweenMax.to(this._$dom, .85, {
                x: - this._wWidth,
                ease: Power4.easeIn,
                onComplete: () => {
                    if (callback) {
                        callback();
                    }
                }
            }),
            "start"
        )

        // TweenMax.to(this._$content, .25, {
        //     scale: 2,
        //     ease: Quart.easeOut
        // })
        // TweenMax.to(this._$dom, .25, {
        //     autoAlpha: 0,
        //     ease: Quart.easeOut,
        //     onComplete: () => {
        //         if (callback) {
        //             callback();
        //         }
        //     }
        // })
    }
}
