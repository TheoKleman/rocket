module.exports =
{
	"pages":
	{
		"default": {
			"class": require("pages/Page")
		},
        "home": {
            "route": "/",
            "class": require("pages/templates/Home")
        },
		"about": {
			"route": "/about",
			"class": require("pages/templates/About")
		}
	}
};
