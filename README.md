# Wijit-Brand Web Component

A web component that displays icons of various brand logos.

Demo: [https://holmesbryant.github.io/wijit-brand/](https://holmesbryant.github.io/wijit-brand/)

##Features
- Uses svg icons from Font Awesome [Font Awesome](https://fontawesome.com/).
- Color the icon however you want.
- Allows you to set a stroke width and stroke color around the icon.
- Allows you to set a css-style filter on the icon. You can use any filter supported by css.
- Allows you to wrap the icon in a link.
- Allows you to add caption text under the icon.
- Allows you to change the viewBox of the svg element holding the icon.

## Usage

Include the script tag in your HTTML page.

    <script type="module" src="wijit-brand.js"></script>

Include a wijit-brand tag in the body

    <wijit-brand brand="html5"></wijit-brand>

## Attributes
- **brand** REQUIRED
    - The brand whose logo you wish to display. For a list of acceptable values, see the list at the bottom.
    - Acceptable values: Any string that matches one of the supported brands.
- **link** default: none
    - This attribute allows you to wrap the icon in a link.
    - Acceptable values: Any valid URL

- **viewbox** default: Automatically set depending on the brand.
    - This attribute sets the value of the viewBox of the svg element holding the icon. It affects the placement and clipping of the icon within the SVG viewport. You most likely won't have to set this unless you add a filter (such as a drop shadow) that causes an effect that spreads beyond the viewable area. For more info, see [SVG viewBox](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/viewBox)
    - Acceptable values: A string representing four numbers. These numbers, which are separated by whitespace or a comma, specify a rectangle which is mapped to the bounds of the icon's SVG viewport (not the browser viewport).

## CSS Custom Properties

This component exposes several custom css properties which affect the appearance of the icon. You must set these properties on the wijit-brand element.

    /* Example */
    <style>
      wijit-brand {
        --color: lime;
        --stroke-color: orange;
        --stroke-width: 20;
        --filter: blur(5px);;
      }
    </style>

- **--color:** default: "rgb(40, 40, 40)". If the operating system is in "dark mode", the default color is "gainsboro", which is a very light gray.
    - Determines the color of the icon.
    - Acceptable values: any valid css color value
- **--stroke-color:** default: none
    - If you want a stroke around the icon, this determines the color of the stroke. You must also set --stroke-width to something other than "0".
    - Acceptable values: Any valid css color value
- **--stroke-width:** default: 0
    - This is used in conjunction with --stroke-color. It determines the width of the stroke. Small values may not show up; a good starting point might be "10".
    - Acceptable values: Integer or any valid css length value.
- **--filter**: default: none
    - This allows you to add one or more css filter effect(s) to the icon, for more info see [CSS Filters](https://developer.mozilla.org/en-US/docs/Web/CSS/filter)
    - Acceptable values: Any valid css filter effect.
    - **Note:** A special value of "url(#inset)" is exposed in order to to add an "inset" effect.

## Examples

### Adding a link

    <wijit-brand brand="facebook" link="https://www.facebook.com/profile.php?id=your_id">
    </wijit-brand>

### Adding a caption

    <wijit-brand brand="html5">
      Built with HTML 5
    </wijit-brand>

### Changing the viewbox

    <wijit-brand brand="HTML5" viewbox="-60 0 512 512"></wijit-brand>

### Changing the color

    <style>
    	wijit-brand {
			--color: orange;
		}
	</style>

### Adding a stroke
	<style>
		wijit-brand {
			--stroke-color: lime;
			--stroke-width: 1rem;
		}
	</style>

### Adding a filter
	// basic example
	<style>
		wijit-brand {
			--filter: drop-shadow(10px 10px 10px dimgray);
		}
	</style>

	// multiple filters
	<style>
		wijit-brand {
			--filter: contrast(10%) blur(10px);
		}
	</style>

	// inset effect
	<style>
		wijit-brand {
			--filter: url(#inset) blur(1px);
		}
	</style>

## Supported Brands

"42-group",
"500px",
"accessible-icon",
"accusoft",
"adn",
"adversal",
"affiliatetheme",
"airbnb",
"algolia",
"alipay",
"amazon",
"amazon-pay",
"amilia",
"android",
"angellist",
"angrycreative",
"angular",
"app-store",
"app-store-ios",
"apper",
"apple",
"apple-pay",
"artstation",
"asymmetrik",
"atlassian",
"audible",
"autoprefixer",
"avianex",
"aviato",
"aws",
"bandcamp",
"battle-net",
"behance",
"bilibili",
"bimobject",
"bitbucket",
"bitcoin",
"bity",
"black-tie",
"blackberry",
"blogger",
"blogger-b",
"bluetooth",
"bluetooth-b",
"bootstrap",
"bots",
"brave",
"brave-reverse",
"btc",
"buffer",
"buromobelexperte",
"buy-n-large",
"buysellads",
"canadian-maple-leaf",
"cc-amazon-pay",
"cc-amex",
"cc-apple-pay",
"cc-diners-club",
"cc-discover",
"cc-jcb",
"cc-mastercard",
"cc-paypal",
"cc-stripe",
"cc-visa",
"centercode",
"centos",
"chrome",
"chromecast",
"cloudflare",
"cloudscale",
"cloudsmith",
"cloudversify",
"cmplid",
"codepen",
"codiepie",
"confluence",
"connectdevelop",
"contao",
"cotton-bureau",
"cpanel",
"creative-commons",
"creative-commons-by",
"creative-commons-nc",
"creative-commons-nc-eu",
"creative-commons-nc-jp",
"creative-commons-nd",
"creative-commons-pd",
"creative-commons-pd-alt",
"creative-commons-remix",
"creative-commons-sa",
"creative-commons-sampling",
"creative-commons-sampling-plus",
"creative-commons-share",
"creative-commons-zero",
"critical-role",
"css3",
"css3-alt",
"cuttlefish",
"d-and-d",
"d-and-d-beyond",
"dailymotion",
"dashcube",
"debian",
"deezer",
"delicious",
"deploydog",
"deskpro",
"dev",
"deviantart",
"dhl",
"diaspora",
"digg",
"digital-ocean",
"discord",
"discourse",
"dochub",
"docker",
"draft2digital",
"dribbble",
"dropbox",
"drupal",
"dyalog",
"earlybirds",
"ebay",
"edge",
"edge-legacy",
"elementor",
"ello",
"ember",
"empire",
"envira",
"erlang",
"ethereum",
"etsy",
"evernote",
"expeditedssl",
"facebook",
"facebook-f",
"facebook-messenger",
"fantasy-flight-games",
"fedex",
"fedora",
"figma",
"firefox",
"firefox-browser",
"first-order",
"first-order-alt",
"firstdraft",
"flickr",
"flipboard",
"fly",
"font-awesome",
"fonticons",
"fonticons-fi",
"fort-awesome",
"fort-awesome-alt",
"forumbee",
"foursquare",
"free-code-camp",
"freebsd",
"fulcrum",
"galactic-republic",
"galactic-senate",
"get-pocket",
"gg",
"gg-circle",
"git",
"git-alt",
"github",
"github-alt",
"gitkraken",
"gitlab",
"gitter",
"glide",
"glide-g",
"gofore",
"golang",
"goodreads",
"goodreads-g",
"google",
"google-drive",
"google-pay",
"google-play",
"google-plus",
"google-plus-g",
"google-scholar",
"google-wallet",
"gratipay",
"grav",
"gripfire",
"grunt",
"guilded",
"gulp",
"hacker-news",
"hackerrank",
"hashnode",
"hips",
"hire-a-helper",
"hive",
"hooli",
"hornbill",
"hotjar",
"houzz",
"html5",
"hubspot",
"ideal",
"imdb",
"instagram",
"instalod",
"intercom",
"internet-explorer",
"invision",
"ioxhost",
"itch-io",
"itunes",
"itunes-note",
"java",
"jedi-order",
"jenkins",
"jira",
"joget",
"joomla",
"js",
"jsfiddle",
"kaggle",
"keybase",
"keycdn",
"kickstarter",
"kickstarter-k",
"korvue",
"laravel",
"lastfm",
"leanpub",
"less",
"letterboxd",
"line",
"linkedin",
"linkedin-in",
"linode",
"linux",
"lyft",
"magento",
"mailchimp",
"mandalorian",
"markdown",
"mastodon",
"maxcdn",
"mdb",
"medapps",
"medium",
"medrt",
"meetup",
"megaport",
"mendeley",
"meta",
"microblog",
"microsoft",
"mintbit",
"mix",
"mixcloud",
"mixer",
"mizuni",
"modx",
"monero",
"napster",
"neos",
"nfc-directional",
"nfc-symbol",
"nimblr",
"node",
"node-js",
"npm",
"ns8",
"nutritionix",
"octopus-deploy",
"odnoklassniki",
"odysee",
"old-republic",
"opencart",
"openid",
"opensuse",
"opera",
"optin-monster",
"orcid",
"osi",
"padlet",
"page4",
"pagelines",
"palfed",
"patreon",
"paypal",
"perbyte",
"periscope",
"phabricator",
"phoenix-framework",
"phoenix-squadron",
"php",
"pied-piper",
"pied-piper-alt",
"pied-piper-hat",
"pied-piper-pp",
"pinterest",
"pinterest-p",
"pix",
"pixiv",
"playstation",
"product-hunt",
"pushed",
"python",
"qq",
"quinscape",
"quora",
"r-project",
"raspberry-pi",
"ravelry",
"react",
"reacteurope",
"readme",
"rebel",
"red-river",
"reddit",
"reddit-alien",
"redhat",
"renren",
"replyd",
"researchgate",
"resolving",
"rev",
"rocketchat",
"rockrms",
"rust",
"safari",
"salesforce",
"sass",
"schlix",
"screenpal",
"scribd",
"searchengin",
"sellcast",
"sellsy",
"servicestack",
"shirtsinbulk",
"shoelace",
"shopify",
"shopware",
"signal-messenger",
"simplybuilt",
"sistrix",
"sith",
"sitrox",
"sketch",
"skyatlas",
"skype",
"slack",
"slideshare",
"snapchat",
"soundcloud",
"sourcetree",
"space-awesome",
"speakap",
"speaker-deck",
"spotify",
"square-behance",
"square-dribbble",
"square-facebook",
"square-font-awesome",
"square-font-awesome-stroke",
"square-git",
"square-github",
"square-gitlab",
"square-google-plus",
"square-hacker-news",
"square-instagram",
"square-js",
"square-lastfm",
"square-letterboxd",
"square-odnoklassniki",
"square-pied-piper",
"square-pinterest",
"square-reddit",
"square-snapchat",
"square-steam",
"square-threads",
"square-tumblr",
"square-twitter",
"square-viadeo",
"square-vimeo",
"square-whatsapp",
"square-x-twitter",
"square-xing",
"square-youtube",
"squarespace",
"stack-exchange",
"stack-overflow",
"stackpath",
"staylinked",
"steam",
"steam-symbol",
"sticker-mule",
"strava",
"stripe",
"stripe-s",
"stubber",
"studiovinari",
"stumbleupon",
"stumbleupon-circle",
"superpowers",
"supple",
"suse",
"swift",
"symfony",
"teamspeak",
"telegram",
"tencent-weibo",
"the-red-yeti",
"themeco",
"themeisle",
"think-peaks",
"threads",
"tiktok",
"trade-federation",
"trello",
"tumblr",
"twitch",
"twitter",
"typo3",
"uber",
"ubuntu",
"uikit",
"umbraco",
"uncharted",
"uniregistry",
"unity",
"unsplash",
"untappd",
"ups",
"upwork",
"usb",
"usps",
"ussunnah",
"vaadin",
"viacoin",
"viadeo",
"viber",
"vimeo",
"vimeo-v",
"vine",
"vk",
"vnv",
"vuejs",
"watchman-monitoring",
"waze",
"webflow",
"weebly",
"weibo",
"weixin",
"whatsapp",
"whmcs",
"wikipedia-w",
"windows",
"wirsindhandwerk",
"wix",
"wizards-of-the-coast",
"wodu",
"wolf-pack-battalion",
"wordpress",
"wordpress-simple",
"wpbeginner",
"wpexplorer",
"wpforms",
"wpressr",
"x-twitter",
"xbox",
"xing",
"y-combinator",
"yahoo",
"yammer",
"yandex",
"yandex-international",
"yarn",
"yelp",
"yoast",
"youtube",
"zhihu"

## Special Note

Thank you to the folks at Font Awesome for making these svg icons available to the public! Check out Font Awesome for tons of high quality icons. [Font Awesome](https://fontawesome.com/)
