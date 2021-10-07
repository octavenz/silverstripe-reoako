# Note: vendor expose is not working in dev!

## Installation

$ composer require octavenz/reoako

to set you reoako api key
set it via one of the following methods:

0.  SS_REOAKO_API_KEY = <KEY>
    in .env or via envrionment varaibles

1.  Reoako API Key in /admin/settings/#Root_Reoako

2.  Octavenz\Reoako\Client\ReokakoClient:
    api_key: <KEY>

### Add reoako to the frontend

Add the following to the base templates where you wish the frontend to be enabled

` <% require javascript('octavenz/reoako:dist/js/reoako-frontend.js') %>`
