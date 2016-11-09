import Page from "../Page";

export default class Home extends Page
{
    constructor($template, $content)
    {
        super($template, $content);

        this._pageTemplate = "home";
    }

    init()
    {
        super.init();

        Page.header.hide();

        // Some selectors
        // this._$row1 = this._$TEappContainer.find('#row1');
        // this._$row2 = this._$TEappContainer.find('#row2');
        // this._$row3 = this._$TEappContainer.find('#row3');
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
