module.exports =
{
	"pages":
	{
		"default": {
			"class": require("pages/Page")
		},
        "home": {
            "class": require("pages/templates/Home")
        },
		// "single": {
        //     "class": require("pages/templates/Single")
        // },
		// "page": {
        //     "class": require("pages/templates/Page")
        // },
		"page-step-1": {
			"class": require("pages/templates/Step1")
		}
	}
};
