# [<a src="https://www.reoako.nz/">Reoako</a>]

![Reoako Preview](docs/img/screen5.png)

## Requirements

-   Silverstripe 4.X
-   Composer
-   Reoako API key


## Components

The Reoako silverstripe intergration consists of 5 components.

#### Reoako PHP client

Used to authenticate and request translations from the Reoako API.

#### TinyMCE plugin

Allows content editors to search and insert translations into richfields via TinyMCE.

#### Reoako Silverstripe settings tab (optional)

Allows a site admin to set the api key via the settings tab.

If this extension is not enabled you will need to set the API key via yml or .env


#### Reoako frontend extension (optional)

Enabled by applying an extension to sitetree which will inject the Reoako javascript+css to all frontend views.

If this extension is not enabled you will need to include the Reaoko frontend package via your own build process

https://www.npmjs.com/package/@octavenz/reoako


## Installation

(While in Beta - please use the private bitbucket link)

- `$ composer config repositories.repo-name vcs https://bitbucket.org/kernldigital/silverstripe-reoako`

- `$ composer require octavenz/reoako:0.1.0`




## Configuration

Depending on your setup you will need to apply some extensions


## Required extensions and config

#### Shortcode extension

Adds the shortcode extension to allow the Reoako Shortcode in be used in content fields


```
SilverStripe\CMS\Model\SiteTree:
  extensions:
    - Octavenz\Reoako\Extensions\ReoakoShortCodeExtension
```

#### Tinymce

Adds the Reoako Tinymce plugin to richfields via in the CMS


```
SilverStripe\Admin\LeftAndMain:
  extra_requirements_javascript: 
    - octavenz/reoako:/dist/js/reoako-tinymce-plugin.js
```


#### Tinymce CSS 

Adds css to the tinyMCE editor window to highlight reoako tags


```
SilverStripe\Forms\HTMLEditor\TinyMCEConfig:
  editor_css: 
    - "octavenz/reoako:dist/css/editor.css"
```



## Optional extensions and config

#### Site config

Apply the site config extension to add a reoako api key field in the site settings

Add the following to your config/site.yml


```
SilverStripe\SiteConfig\SiteConfig:
  extensions:
    - Octavenz\Reoako\Extensions\ReoakoSiteConfig
```


#### Reoako frontend extension 

Injects the required Reoako frontend javascript and css to all frontend pages

Add the following to your config/site.yml


```
SilverStripe\CMS\Model\SiteTree:
  extensions:
    - Octavenz\Reoako\Extensions\ReoakoFrontendExtension
```
 
 


## Setting your API key

A Reoako API key is required 

Set it via one of the following methods:

### .env

Set your api key in your .env file or via your environment variable


```
SS_REOAKO_API_KEY = <KEY>

```


### Settings panel

Navigate to: /admin/settings/#Root_Reoako

set your API key in the field.


### YML 

Set you key via yml in your config


```
Octavenz\Reoako\Client\ReokakoClient:
  api_key: <KEY>
```



### TODO:
- Subsite support
- Bitbucket pipeline tests
- SS4/CWP tests

