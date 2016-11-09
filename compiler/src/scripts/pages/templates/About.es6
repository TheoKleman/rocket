import Page from "../Page";

export default class About extends Page
{
    constructor($template, $content)
    {
        super($template, $content);

        this._pageTemplate = "about";
    }

    init()
    {
        super.init();

        Page.header.show();

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
