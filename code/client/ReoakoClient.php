<?php

namespace Octavenz\Reoako\Client;

use Silverstripe\SiteConfig\SiteConfig;
use SilverStripe\Core\Config\Config;
use SilverStripe\Core\Environment;
use GuzzleHttp\Client;
use GuzzleHttp\Exception\ServerException;
use GuzzleHttp\Exception\ClientException;
use SilverStripe\Control\Director;

class ReoakoClient
{
    /**
     * API Domain
     *
     * @var string
     * @config
     */
    private static $default_api_domain = 'https://api.reoako.nz';
    /**
     *  API base path
     *
     * @var string
     * @config
     */
    private static $default_api_base_path = 'api/v1';

    /**
     *  API key
     *
     * @var string
     * @config
     */
    private static $api_key = '';

    /**
     * The API key that will be used for the service. Can be set on the singleton to take priority over configuration.
     *
     * @var string
     */
    protected $apiKey = '';

    /**
     * Get the API key. Priority is given first to explicitly set values on a singleton, then to configuration values
     * and finally to environment values.
     *
     * @return string
     */
    public function getApiKey()
    {
        // Priority given to explicitly set API keys on the singleton object
        if ($this->apiKey) {
            return $this->apiKey;
        }

        // Check config for a value defined in YAML or _config.php
        $key = Config::inst()->get(ReokakoClient::class, 'api_key');
        if (!empty($key)) {
            return $key;
        }

        // Check in the site config for the ReoakoAPI key
        $key = SiteConfig::current_site_config()->ReoakoAPI;
        if (!empty($key)) {
            return $key;
        }

        // Check environment as last resort
        if ($envApiKey = Environment::getEnv('SS_REOAKO_API_KEY')) {
            return $envApiKey;
        }

        return '';
    }


    public function __construct()
    {
        $this->apiKey = $this->getApiKey();
        $this->domain = self::$default_api_domain;
        $this->origin = Director::baseURL();
        $this->endpoint = $this->domain . '/' . self::$default_api_base_path;
    }


    function search($term)
    {
        $client = new Client();

        $headers = array(
            'Content-Type' => 'application/json',
            'Authorization' =>  'Token ' . $this->apiKey,
            'Origin' => 'http://localhost',
            'Accept' => 'application/json',
        );

        // TODO: setup exception handling
        $client = new Client();

        try {
            $response = $client->get(
                'https://api.reoako.nz/api/v1/entries/?search=' . $term,
                ['headers' => $headers]
            );

            // setup exception handling
            $json = json_decode($response->getBody(), true);
            return $json;
        } catch (ClientException $error) {
            // Get the original response
            $response = $error->getResponse();
            // Get the info returned from the remote server.
            $response_info = $response->getBody();
            return $response_info;
        } catch (ServerException $error) {
            // Get the original response
            $response = $error->getResponse();
            // Get the info returned from the remote server.
            $response_info = $response->getBody()->getContents();
            return $response_info;
        }
    }
}
