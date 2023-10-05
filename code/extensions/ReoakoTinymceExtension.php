<?php

namespace Octavenz\Reoako\Extensions;

use SilverStripe\Admin\LeftAndMainExtension;
use SilverStripe\Core\Manifest\ModuleLoader;
use SilverStripe\Forms\HTMLEditor\HTMLEditorConfig;
use SilverStripe\Forms\HTMLEditor\TinyMCEConfig;


class ReoakoTinymceExtension extends LeftAndMainExtension
{

    function init()
    {
        parent::init();

        // Get the reoako module
        $reoakoModule = ModuleLoader::inst()->getManifest()->getModule('octavenz/reoako');

        // TinyMCE configuration
        // Get config
        /** @var TinyMCEConfig $editor */
        $editor = HTMLEditorConfig::get_active();

        // Enable reoako plugin
        if ($editor) {

            $editor
                ->enablePlugins([
                    'reoako' => $reoakoModule
                        ->getResource('/dist/js/reoako-tinymce-plugin.js')
                ]);
            $editor->addButtonsToLine(
                2,
                'reoako-button'
            );
        }

        $valid_options = $editor->getOption('valid_elements');
        $editor->setOption('valid_elements',  $valid_options . ',reoako[*]');
    }
}
