import gsap from "gsap/src/minified/TweenMax.min";

export default class Loader
{
    constructor($dom)
    {
        this._$dom = $dom;
        this._$rocket = this._$dom.find('.c-loader__content__logo');
        this._$text = this._$dom.find('.c-loader__content__text');
        this._$after = this._$dom.find('.c-loader__after');

        this._init();
    }

    _init()
    {
        this._wHeight = $(window).height();

        TweenMax.set(this._$text, {
            x: -70,
        })
    }


    // Methods
    //-----------------------------------------------------o

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
        )
        // Rocket fade in
        timelime.add(
            TweenMax.to(this._$rocket, .25, {
                autoAlpha: 1,
                ease: Power2.easeInOut
            }),
            "start+=0.5"
        )

        // Rocket launch
        timelime.add(
            TweenMax.to(this._$rocket, .6, {
                y: - (this._wHeight/2 + 100),
                ease: Power4.easeIn
            }),
            "start+=0.85"
        )

        // Text translate up
        timelime.add(
            TweenMax.to(this._$text, .6, {
                y: - this._wHeight/2.5,
                ease: Power4.easeIn
            }),
            "start+=0.85"
        )

        // After height
        timelime.add(
            TweenMax.to(this._$after, .6, {
                height: this._wHeight,
                ease: Power4.easeIn,
            }),
            "start+=0.85"
        )

        // Loader wrapper translate up
        timelime.add(
            TweenMax.to(this._$dom, .3, {
                y: - this._wHeight,
                ease: Power1.easeInOut,
                onComplete: () => {
                    if (callback) {
                        this.destroy();
                        callback();
                    }
                }
            }),
            "start+=1.3"
        )
    }

    // Redraw
    //-----------------------------------------------------o

    destroy()
    {
        this._$dom.remove();
    }
}
