<?php

namespace Octavenz\Reoako\Extensions;

use SilverStripe\Forms\FieldList;
use SilverStripe\Forms\TextField;

use SilverStripe\ORM\DataExtension;


/**
 * Extends {@see SiteConfig} to allow Reoako key to be set via the CMS
 */
class ReoakoSiteConfig extends DataExtension
{

    private static $db = [
        'ReoakoAPI' => 'Varchar'
    ];

    public function updateCMSFields(FieldList $fields)
    {
        $fields->addFieldToTab(
            "Root.Reoako",
            new TextField("ReoakoAPI", "Reoako API Key")
        );
    }
}
