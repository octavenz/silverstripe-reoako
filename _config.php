<?php

use SilverStripe\View\Parsers\ShortcodeParser;

ShortcodeParser::get('default')->register('reoako', ['Octavenz\Reoako\Extensions\ReoakoShortCodeExtension', 'ReoakoShortCode']);
