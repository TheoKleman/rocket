import Page from "../Page";

export default class Step1 extends Page
{
    constructor($template, $content)
    {
        super($template, $content);

        this._pageTemplate = "step1";
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
