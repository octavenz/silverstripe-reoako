<?php

namespace Octavenz\Reoako\Extensions;

use SilverStripe\Forms\FieldList;
use SilverStripe\Forms\TextField;

use SilverStripe\ORM\DataExtension;

use Octavenz\Reoako\Client\ReokakoClient;
use SilverStripe\Core\Config\Config;
use SilverStripe\Core\Environment;


/**
 * Extends {@see SiteConfig} to allow Reoako key to be set via the CMS
 * 
 * TODO: add subsite support
 * 
 */
class ReoakoSiteConfig extends DataExtension
{

    private static $db = [
        'ReoakoAPI' => 'Varchar'
    ];

    public function updateCMSFields(FieldList $fields)
    {

        $field = new TextField("ReoakoAPI", "Reoako API Key");
        // Check environment as override
        if ($envApiKey = Environment::getEnv('SS_REOAKO_API_KEY')) {
            $field->setInputType("password");
            $field->setReadonly(true);
            $field->setRightTitle("Reoako API key set via ENV");
            $fields->addFieldToTab(
                "Root.Reoako",
                $field
            );
            return;
        }

        // Key stored in YML
        $key = Config::inst()->get(ReokakoClient::class, 'api_key');
        if (!empty($key)) {
            $field->setInputType("password");
            $field->setReadonly(true);
            $field->setRightTitle("Reoako API key set via YML");
            $fields->addFieldToTab(
                "Root.Reoako",
                $field
            );
            return;
        }

        # Use stored API key from DB
        if (empty($key)) {
            $fields->addFieldToTab(
                "Root.Reoako",
                $field
            );
            return;
        }
    }
}
