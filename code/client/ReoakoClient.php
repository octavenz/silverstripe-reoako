<?php

namespace Octavenz\Reoako\Client;

use Silverstripe\SiteConfig\SiteConfig;
use SilverStripe\Core\Config\Config;
use SilverStripe\Core\Environment;
use GuzzleHttp\Client;
use GuzzleHttp\Exception\ServerException;
use GuzzleHttp\Exception\ClientException;
use SilverStripe\Control\Director;
use SilverStripe\View\ArrayData;

class ReoakoClient
{
    /**
     * API Domain
     *
     * @var string
     * @config
     */
    private static $default_api_domain = 'https://api.reoako.nz';

    public function getDefaultApiDomain()
    {
        return self::$default_api_domain;
    }

    /**
     *  API base path
     *
     * @var string
     * @config
     */
    private static $default_api_base_path = 'api/v1';
    public function getDefaultApiBasePath()
    {
        return self::$default_api_base_path;
    }


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

        // Check environment as override
        if ($envApiKey = Environment::getEnv('SS_REOAKO_API_KEY')) {
            return $envApiKey;
        }

        // Check config for a value defined in YAML
        $key = Config::inst()->get(ReokakoClient::class, 'api_key');
        if (!empty($key)) {
            return $key;
        }

        // Check in the site config for the ReoakoAPI key
        $key = SiteConfig::current_site_config()->ReoakoAPI;
        if (!empty($key)) {
            return $key;
        }

        return '';
    }

    private string $endpoint;
    private string $origin;

    public function __construct()
    {
        $this->apiKey = $this->getApiKey();
        $this->origin = Director::protocolAndHost();
        $this->endpoint = $this->getDefaultApiDomain() . '/' . $this->getDefaultApiBasePath();
    }

    function search($term)
    {
        $client = new Client();

        if (empty($this->apiKey)) {
            throw new \Exception("API key not set");
        }

        $headers = array(
            'Content-Type' => 'application/json',
            'Authorization' =>  'Token ' . $this->apiKey,
            'Origin' => $this->origin,
            'Accept' => 'application/json',
        );

        try {
            $response = $client->get(
                $this->endpoint . '/entries/?search=' . $term,
                ['headers' => $headers]
            );

            $json = json_decode($response->getBody(), true);
            return $json;
        } catch (ClientException $error) {
            // Get the original response
            $response = $error->getResponse();
            // Get the info returned from the remote server.
            $response_info = $response->getBody();

            try {
                $json = json_decode($response_info, true);
                if (isset($json['message'])) {
                    return $json;
                }
            } catch (\Exception $e) {
            }

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
