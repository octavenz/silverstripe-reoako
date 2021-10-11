<?php

namespace Octavenz\Reoako\Controllers;

use SilverStripe\Control\Controller;
use SilverStripe\View\ArrayData;
use SilverStripe\ORM\ArrayList;
use Octavenz\Reoako\Client\ReoakoClient;
use SilverStripe\View\Requirements;


class ReoakoController extends Controller
{
    private static $allowed_actions = [
        'modal',
        'search'
    ];

    private static $url_handlers = [
        'GET /' => 'modal',
        'POST /' => 'modal',
    ];

    public function modal($params)
    {
    }

    public function search($request)
    {
        Requirements::css("silverstripe/admin:client/dist/styles/bundle.css");
        $rc = new ReoakoClient();
        $vars = $request->getVars();

        //TODO: just get search_term

        foreach ($vars as $key => $val) {
            if ($key == 'search_term') {

                //return blank page
                if (empty($val)) {
                    return $this->customise(new ArrayData([]))->renderWith('reoako');
                }

                $results = $rc->search($val);

                if ($request->isAjax()) {
                    print_r('AJAX');

                    $this->customise(new ArrayData([
                        'results' => $results
                    ]))->renderWith('ajax_results');
                }

                $data = new ArrayList();
                foreach ($results as $rk => $rv) {
                    if ($rk == 'results') {
                        foreach ($rv as $e) {
                            $r = new ArrayData([
                                'headword' => $e['headword'],
                                'function' => $e['function'],
                                'definition' => $e['definition'],
                                'translations' => new ArrayData([
                                    'url' => $e['translations'][0]['url'],
                                    'en' =>  $e['translations'][0]['en'],
                                    'mi' =>  $e['translations'][0]['mi'],
                                    'slug' => $e['translations'][0]['slug'],
                                    'audio_url' => $e['translations'][0]['audio_url'],
                                ])
                            ]);
                            $data->push($r);
                        }
                    }
                }

                return $this->customise(new ArrayData([
                    'search_term' => $val,
                    'results' => $data,
                    'count' => count($data)
                ]))->renderWith('reoako');
            }
        }
    }
}
