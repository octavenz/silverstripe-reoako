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
        // Get CWP config, if not get CMS config
        /** @var TinyMCEConfig $editor */
        $editor = HTMLEditorConfig::get('cwp');

        if (!$editor) {
            /** @var TinyMCEConfig $editor */
            $editor = HTMLEditorConfig::get('cms');
        }

        // Enable reoako plugin  
        if ($editor) {

            $editor
                ->enablePlugins([
                    'reoakotranslationdialog' => $reoakoModule
                        ->getResource('/dist/js/reoako-tinymce-plugin.js')
                ]);
            $editor->addButtonsToLine(
                2,
                'reoakotranslationdialog'
            );
        }

        $valid_options = $editor->getOption('valid_elements');
        $editor->setOption('valid_elements',  $valid_options . ',reoako[*]');
    }
}
