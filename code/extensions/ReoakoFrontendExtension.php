<?php

namespace Octavenz\Reoako\Extensions;

use SilverStripe\ORM\DataExtension;
use SilverStripe\View\Requirements;
use Octavenz\Reoako\Client\ReoakoClient;

class ReoakoFrontendExtension extends DataExtension
{
    public function contentcontrollerInit()
    {
        // Get the API key and store as javascript variable 
        $rc = new ReoakoClient();
        $apiKey = $rc->getApiKey();
        if ($apiKey) {

            $vars = array(
                "REOAKO_API_KEY" => $apiKey
            );
            Requirements::javascriptTemplate("octavenz/reoako:dist/js/reoako-frontend.js", $vars, 'reoako-fe-js');
        } else {
            Requirements::customScript('console.error("Reoako API key not set see README")');
        }
    }
}
