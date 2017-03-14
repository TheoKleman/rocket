import Page from "../Page";

export default class ExamplePage extends Page
{
  constructor($template, $content, location)
  {
    super($template, $content, location);

    this._pageTemplate = "example-page";
  }

  init()
  {
    super.init();

    // Some selectors
    // this._$profilePicture = this._$TEappContainer.find('#profilePicture');
  }

  // Methods
  //-----------------------------------------------------o

  _showAnimations()
  {
    super._showAnimations();

    // Your custom animations
  }

  _hideAnimations(callback)
  {
    super._hideAnimations(callback);

    // Your custom animations
  }
}
