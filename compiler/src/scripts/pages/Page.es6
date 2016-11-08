import $ from "zepto-modules";

import Emitter from "component-emitter/index";
import gsap from "gsap/src/minified/TweenMax.min";

import Header from "header/Header";

export default class Page extends Emitter
{
    constructor($template, $content)
    {
        super();

        this._pageTemplate = "default";

        // Response DOM
        this._$template = $template;
        this._$content = $content;
        this._$AJAXheader = this._$template.find('.c-header');

        // PHP execution DOM
        this._$execPHPbody = $('body');
        this._$execPHPappContainer = $('.application-container');
		this._$execPHPheader = $('.c-header');

        this.id = Math.random().toString().slice(2,6);

        // Init header
        if (!Page.header && this._$execPHPheader.length > 0) {
            Page.header = new Header(this._$execPHPheader);
        }
    }

    init(autoInitEvents)
    {
        console.log("%cinit page-"+ this._pageTemplate +"-"+ this.id, 'color: #55c6da; font-size: 13px');

        // Add body attribute
        this._$execPHPbody.attr('id', 'template-'+ this._pageTemplate);

        // Append application content
        this._$execPHPappContainer.append(this._$content);

        // First show
        this._$pageContent = this._$execPHPappContainer.find('.page-content');

        TweenMax.set(this._$pageContent, {
            autoAlpha: 0,
            y: 5,
        })

        if (autoInitEvents)
            this._initEvents();
    }

    _initEvents()
    {

    }

    // Methods
    //-----------------------------------------------------o

    show()
    {
        console.log("%cshow page-"+ this._pageTemplate +"-"+ this.id, 'color: #6cda55; font-size: 13px');

        this._showAnimations();
    }

    _showAnimations()
    {
        TweenMax.to(this._$pageContent, .25, {
            autoAlpha: 1,
            y: 0
        })
    }

    showInstantly()
    {
        console.log("%cshow instantly page-"+ this._pageTemplate +"-"+ this.id, 'color: #6cda55; font-size: 13px');

        this._showInstantlyAnimations();
    }

    _showInstantlyAnimations()
    {
        TweenMax.set(this._$pageContent, {
            autoAlpha: 1,
            y: 0
        })
    }

    hide(callback)
    {
        console.log("%chide page-"+ this._pageTemplate +"-"+ this.id, 'color: #dab555; font-size: 13px');

        this._hideAnimations(callback);
    }

    _hideAnimations(callback)
    {
        TweenMax.to(this._$pageContent, .25, {
            autoAlpha: 0,
            y: 5,
            onComplete: () => {
                this.destroy();
                if (callback) {
                    callback();
                }
            }
        })
    }

    reloadDomAfterFormSubmit($form)
    {
        let payload = $form.serialize();

        $.ajax({
            type: 'POST',
            url: window.location.href,
            data: payload,
            success: (data) => {
                this.emit('reloadDom', data);
            },
            error: () => {
                console.log("error");
            }
        })
    }


    // Redraw
    //-----------------------------------------------------o

    update()
    {

    }

    resize()
    {

    }

    destroy()
    {
        console.log("%cdestroy page-"+ this._pageTemplate +"-"+ this.id, 'color: #da5555; font-size: 13px');

        this._$execPHPappContainer.children().remove();
    }
}
