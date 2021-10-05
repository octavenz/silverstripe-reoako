<?php

use SilverStripe\Core\Manifest\ModuleLoader;
use SilverStripe\Forms\HTMLEditor\HTMLEditorConfig;
use SilverStripe\Forms\HTMLEditor\TinyMCEConfig;
use SilverStripe\View\Parsers\ShortcodeParser;

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
$editor->sanitise_server_side = false;

// Enable reoako plugin  
if ($editor) {
    $editor->sanitise_server_side = false;

    $editor
        ->enablePlugins([
            'reoakotranslationdialog' => $reoakoModule
                ->getResource('/dist/js/reoako_tinymce_plugin.js')
        ]);
    $editor->addButtonsToLine(
        2,
        'reoakotranslationdialog'
    );
}

$valid_options = $editor->getOption('extended_valid_elements');
$editor->setOption('extended_valid_elements', $valid_options . 'span[data*]');
$valid_options = $editor->getOption('extended_valid_elements');
error_log("test");

ShortcodeParser::get('default')->register('reoako', ['Octavenz\Reoako\Extensions\ReoakoShortCodeExtension', 'ReoakoShortCode']);
