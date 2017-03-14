import Emitter from "component-emitter/index";
import gsap from "gsap/src/minified/TweenMax.min";

import Header from "header/Header";

export default class Page extends Emitter
{
  constructor($template, $content, location)
  {
    super();

    this._pageTemplate = "default";
    this._location = location;
    this._isEntryPage = false;

    // AJAX response DOM
    this._$AJAXLoadedTemplate = $template;
    this._$AJAXLoadedContent = $content;
    this._$AJAXLoadedHeader = this._$AJAXLoadedTemplate.find('.c-header');

    // Initial PHP execution DOM
    this._$execPHPbody = $('body');
    this._$execPHPappContainer = $('.application-container');
    this._$execPHPheader = $('.c-header');

    this.id = Math.random().toString().slice(2,6);

    // Init header
    if (!Page.header && this._$execPHPheader.length > 0) {
      Page.header = new Header(this._$execPHPheader);
    }
  }

  init()
  {
    console.log("%cinit page-"+ this._pageTemplate +"-"+ this.id, 'color: #55c6da; font-size: 13px');

    // Add body attribute
    this._$execPHPbody.attr('id', 'template-'+ this._pageTemplate);

    // Append application content
    this._$execPHPappContainer.append(this._$AJAXLoadedContent);

    // First show
    this._$pageContent = this._$execPHPappContainer.find('.page-content');

    TweenMax.set(this._$pageContent, {
      autoAlpha: 0,
      y: 5,
    });
  }

  // Getters & Setters
  //-----------------------------------------------------o

  get isEntryPage()
  {
    return this._isEntryPage;
  }

  set isEntryPage(bool)
  {
    this._isEntryPage = bool;
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
    // Default show animations
    TweenMax.to(this._$pageContent, .25, {
      autoAlpha: 1,
      y: 0
    });
  }

  hide(callback)
  {
    console.log("%chide page-"+ this._pageTemplate +"-"+ this.id, 'color: #dab555; font-size: 13px');

    this._hideAnimations(callback);
  }

  _hideAnimations(callback)
  {
    // Default hide animations
    TweenMax.to(this._$pageContent, .25, {
      autoAlpha: 0,
      y: 5,
      onComplete: () => {
        this.destroy();
        if (callback) {
          callback();
        }
      }
    });
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
