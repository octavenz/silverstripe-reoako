![Reoako Preview](docs/img/screen5.png)

## Requirements

-   Silverstripe 4.X
-   Composer
-   Reoako API key

## Installation

$ composer require octavenz/reoako

## Components

0. TinyMCE plugin
1. Reoako Client
2. Reoako Modal window

## Cofiguration

Depending on your setup you will need to apply some extensions:

`

# Apply the site config extension to add a reoako api key field in the site settings

SilverStripe\SiteConfig\SiteConfig:
extensions:

-   Octavenz\Reoako\Extensions\ReoakoSiteConfig

`

`

# Adds the shortcode extension to allow the Reoako Shortcode in content fields

SilverStripe\CMS\Model\SiteTree:
extensions:

-   Octavenz\Reoako\Extensions\ReoakoShortCodeExtension
    ` `

# Injects the Reoako javascript and css to the content controller - pulls the api key from the backend

SilverStripe\CMS\Model\SiteTree:
extensions:

-   Octavenz\Reoako\Extensions\ReoakoFrontendExtension
    ` `

# Adds the required Tinymce plugin to admin CMS

SilverStripe\Admin\LeftAndMain:
extra_requirements_javascript: - octavenz/reoako:/dist/js/reoako-tinymce-plugin.js

# Adds the some css to the tinyMCE editor window to highlight reoako tags

SilverStripe\Forms\HTMLEditor\TinyMCEConfig:
editor_css: - "octavenz/reoako:dist/css/editor.css"
`

## Set your API key

Get your api key from ?Octave?

Set you reoako api key via one of the following methods:

0.  SS_REOAKO_API_KEY = <KEY>
    in .env or via envrionment varaibles

1.  Set your Reoako API Key via the settings panel
    navigate to: /admin/settings/#Root_Reoako

2.  Set you key via yml in your config

Octavenz\Reoako\Client\ReokakoClient:
api_key: <KEY>

### Frontend

The reoako javascript and css needs to be included in your frontend.

Add the following to the base templates where you wish the frontend to be enabled
