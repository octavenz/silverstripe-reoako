<?php

namespace Octavenz\Reoako\Extensions;

use SilverStripe\ORM\DataExtension;



class ReoakoShortCodeExtension extends DataExtension
{

    private static $casting = [
        'ReoakoShortCode' => 'HTMLText'
    ];

    public static function ReoakoShortCode($arguments, $content = null, $parser = null, $tagName = null)
    {

        $headword = $arguments["headword"];
        $id = $arguments["id"];
        $translation = $arguments["translation"];


        $constructed_shortcode = '<span ' .
            'data-reoako-headword="' . $headword . '"' .
            'data-reoako-id="' . $id . '"' .
            'data-reoako-translation="' . $translation . '"' .
            'class="reoako-trigger">' . $translation . '</span>';

        return $constructed_shortcode; // [reoako headword="media" mi="hunga-pāpāho"]
    }
}
