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
        $headword = null;
        $id = null;
        $translation = null;

        if (array_key_exists("data-reoako-headword", $arguments)) {
            $headword =  $arguments["data-reoako-headword"];
        }
        if (array_key_exists("data-reoako-id", $arguments)) {
            $id =  $arguments["data-reoako-id"];
        }
        if (array_key_exists("data-reoako-translation", $arguments)) {
            $translation = $arguments["data-reoako-translation"];
        }

        if ($headword && $id && $translation) {
            $constructed_shortcode = '<span ' .
                'data-reoako-headword="' . $headword . '"' .
                'data-reoako-id="' . $id . '"' .
                'data-reoako-translation="' . $translation . '"' .
                '>' . $translation . '</span>';

            return $constructed_shortcode;
        } else {
            return $content;
        }
    }
}
