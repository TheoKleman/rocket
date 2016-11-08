module.exports =
{
	"pages":
	{
		"default": {
			"class": require("pages/Page")
		},
        "home": {
            "route": "/",
            "class": require("pages/views/Home")
        },
		"about": {
			"route": "/about",
			"class": require("pages/views/About")
		}
	}
};
