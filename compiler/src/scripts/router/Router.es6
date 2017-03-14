import Emitter from "component-emitter/index";

export default class Router extends Emitter
{
  constructor($html, $appContainer)
  {
    super();

    this.history = window.history;
    this.origin = window.location.origin;
    this.couldStateChange = true;

    // Bind link click
    this.bindLinks();

    this._$html = $html;
    this._$appContainer = $appContainer;

    this._init();
  }

  bindLinks()
  {
    $('a:not([target])').on('click', this._onLinkClick.bind(this));
  }

  _init()
  {
    // Instantiate entry point page
    let PageClass;
    let entryPageId = $('.page-content').attr('data-id');

    if (window.sitemap.pages[entryPageId]) {
      PageClass = window.sitemap.pages[entryPageId].class;
    } else {
      PageClass = window.sitemap.pages["default"].class;
    }

    this._page = new PageClass.default(this._$html, this._$appContainer.children(), window.location.href);
    this._page.isEntryPage = true;
    this._page.init();

    setTimeout(() => {
      this._initEvents();
      this._initPageEvents();
      this.emit('firstViewLoaded');
    }, 500);

  }

  _initEvents()
  {
    // Bind StateChange Event
    window.addEventListener('popstate', this._onStateChange.bind(this));
  }

  _initPageEvents()
  {
    this._page
    .on('updateState', this.updateState.bind(this));
  }

  // Methods
  //-----------------------------------------------------o

  loadTemplate(pageSlug)
  {
    var origin = this.origin;

    return new Promise(function (resolve, reject) {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", origin + '/' + pageSlug);
      xhr.onload = function () {
        if (this.status >= 200 && this.status < 300) {
          resolve(xhr.response);
        } else {
          reject({
            status: this.status,
            statusText: xhr.statusText
          });
        }
      };
      xhr.onerror = function () {
        reject({
          status: this.status,
          statusText: xhr.statusText
        });
      };
      xhr.send();
    });
  }

  updateState()
  {
    if (this.couldStateChange) { this._onStateChange(); }
  }

  // Getters & Setters
  //-----------------------------------------------------o

  get currentPage()
  {
    return this._page;
  }

  // Redraw
  //-----------------------------------------------------o

  update()
  {
    this._page.update();
  }

  resize()
  {
    this._page.resize();
  }

  // Handlers
  //-----------------------------------------------------o

  _onLinkClick(e)
  {
    e.preventDefault();

    if (this.couldStateChange) {
      let href = e.currentTarget.getAttribute('href');
      let route = href.split(href.split('/')[2])[1];

      let link = '/';
      if (route) { link = route; }

      let location = window.location.hash != "" ? window.location.href.replace("/" + window.location.hash, "").replace(window.location.hash, "") : window.location.href.split('/')[3];
      location = '/' + location;

      // Push into history new state
      if (('/' + link) != location && link != (location + '/') && link != location) {
        this.history.pushState(null, null, link);
        this._onStateChange();
      }
    }
  }

  _onStateChange()
  {
    this.couldStateChange = false;
    this._previousPage = this._page;

    let url = window.location.href;
    let newPageSlug = url.split(url.split('/')[2])[1];

    // Get new template
    this.loadTemplate(newPageSlug).then((response) => {
      this._$template = $(response.toString());
      // Page content to append
      this._$content = this._$template.find('.application-container').children();

      // Page title
      this._title = this._$template.filter('title')[0].innerHTML;

      // Instantiate new page
      let PageClass;

      let newPageId = this._$template.find('.page-content').attr('data-id');

      if (window.sitemap.pages[newPageId]) {
        PageClass = window.sitemap.pages[newPageId].class;
      } else {
        PageClass = window.sitemap.pages["default"].class;
      }

      this._page = new PageClass.default(this._$template, this._$content, url);
      this.resize();

      // Set document title
      document.title = this._title;

      this._previousPage.hide(() => {
        // Init & show new page
        $(window).scrollTop(0);
        this._page.init();
        this._page.show();
        this.bindLinks();
        this._initPageEvents();
        this.couldStateChange = true;
      });
    }, () => {
      // If page slug not exists redirect to home
      let link = "/";

      this.history.pushState(null, null, this.origin + link);
      this._onStateChange();
    });
  }
}
