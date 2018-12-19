/**
 * YtelAPILib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const _request = require('../Http/Client/RequestClient');
const _configuration = require('../configuration');
const _apiHelper = require('../APIHelper');
const _baseController = require('./BaseController');

class SharedShortCodeController {
    /**
     * Retrieve a list of shortcode assignment associated with your Ytel account.
     *
     * @param {string} shortcode (optional) Only list keywords of shortcode
     * @param {int} page (optional) The page count to retrieve from the total results in the
     * collection. Page indexing starts at 1.
     * @param {int} pagesize (optional) Number of individual resources listed in the response per
     * page
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static createListShortcodes(shortcode, page, pagesize, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        const _baseUri = _configuration.BASEURI;

        let _queryBuilder = `${_baseUri}${'/shortcode/listshortcode.json'}`;

        // process query parameters
        _queryBuilder = _apiHelper.appendUrlWithQueryParameters(_queryBuilder, {
            Shortcode: shortcode,
        });

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            'user-agent': 'APIMATIC 2.0',
        };

        // prepare form data
        const _form = {
            page,
            pagesize,
        };

        // remove null values
        _apiHelper.cleanObject(_form);

        // construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'POST',
            headers: _headers,
            form: _form,
            username: _configuration.basicAuthUserName,
            password: _configuration.basicAuthPassword,
        };

        // build the response processing.
        return new Promise((_fulfill, _reject) => {
            _request(_options, (_error, _response, _context) => {
                let errorResponse;
                if (_error) {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                    _callback(null, _response.body, _context);
                    _fulfill(_response.body);
                } else {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                }
            });
        });
    }
    /**
     * Update Assignment
     *
     * @param {string} shortcode List of valid shortcode to your Ytel account
     * @param {string} friendlyName (optional) User generated name of the shortcode
     * @param {string} callbackUrl (optional) URL that can be requested to receive notification
     * when call has ended. A set of default parameters will be sent
     * here once the call is finished.
     * @param {string} callbackMethod (optional) Specifies the HTTP method used to request the
     * required StatusCallBackUrl once call connects.
     * @param {string} fallbackUrl (optional) URL used if any errors occur during execution of
     * InboundXML or at initial request of the required Url provided
     * with the POST.
     * @param {string} fallbackUrlMethod (optional) Specifies the HTTP method used to request the
     * required FallbackUrl once call connects.
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static updateShortcode(shortcode,
        friendlyName,
        callbackUrl,
        callbackMethod,
        fallbackUrl,
        fallbackUrlMethod,
        callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        const _baseUri = _configuration.BASEURI;

        const _queryBuilder = `${_baseUri}${'/shortcode/updateshortcode.json'}`;

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            'user-agent': 'APIMATIC 2.0',
        };

        // prepare form data
        const _form = {
            Shortcode: shortcode,
            FriendlyName: friendlyName,
            CallbackUrl: callbackUrl,
            CallbackMethod: callbackMethod,
            FallbackUrl: fallbackUrl,
            FallbackUrlMethod: fallbackUrlMethod,
        };

        // remove null values
        _apiHelper.cleanObject(_form);

        // construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'POST',
            headers: _headers,
            form: _form,
            username: _configuration.basicAuthUserName,
            password: _configuration.basicAuthPassword,
        };

        // build the response processing.
        return new Promise((_fulfill, _reject) => {
            _request(_options, (_error, _response, _context) => {
                let errorResponse;
                if (_error) {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                    _callback(null, _response.body, _context);
                    _fulfill(_response.body);
                } else {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                }
            });
        });
    }
    /**
     * Retrieve a list of keywords associated with your Ytel account.
     *
     * @param {int} page (optional) The page count to retrieve from the total results in the
     * collection. Page indexing starts at 1.
     * @param {int} pagesize (optional) Number of individual resources listed in the response per
     * page
     * @param {string} keyword (optional) Only list keywords of keyword
     * @param {int} shortcode (optional) Only list keywords of shortcode
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static createListKeywords(page, pagesize, keyword, shortcode, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        const _baseUri = _configuration.BASEURI;

        const _queryBuilder = `${_baseUri}${'/keyword/lists.json'}`;

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            'user-agent': 'APIMATIC 2.0',
        };

        // prepare form data
        const _form = {
            page,
            pagesize,
            Keyword: keyword,
            Shortcode: shortcode,
        };

        // remove null values
        _apiHelper.cleanObject(_form);

        // construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'POST',
            headers: _headers,
            form: _form,
            username: _configuration.basicAuthUserName,
            password: _configuration.basicAuthPassword,
        };

        // build the response processing.
        return new Promise((_fulfill, _reject) => {
            _request(_options, (_error, _response, _context) => {
                let errorResponse;
                if (_error) {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                    _callback(null, _response.body, _context);
                    _fulfill(_response.body);
                } else {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                }
            });
        });
    }
    /**
     * The response returned here contains all resource properties associated with the given
     * Shortcode.
     *
     * @param {string} shortcode List of valid Shortcode to your Ytel account
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static createViewShortcode(shortcode, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        const _baseUri = _configuration.BASEURI;

        const _queryBuilder = `${_baseUri}${'/shortcode/viewshortcode.json'}`;

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            'user-agent': 'APIMATIC 2.0',
        };

        // prepare form data
        const _form = {
            Shortcode: shortcode,
        };

        // remove null values
        _apiHelper.cleanObject(_form);

        // construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'POST',
            headers: _headers,
            form: _form,
            username: _configuration.basicAuthUserName,
            password: _configuration.basicAuthPassword,
        };

        // build the response processing.
        return new Promise((_fulfill, _reject) => {
            _request(_options, (_error, _response, _context) => {
                let errorResponse;
                if (_error) {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                    _callback(null, _response.body, _context);
                    _fulfill(_response.body);
                } else {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                }
            });
        });
    }
    /**
     * Send an SMS from a Ytel ShortCode
     *
     * @param {string} shortcode The Short Code number that is the sender of this message
     * @param {string} to A valid 10-digit number that should receive the message
     * @param {uuid|string} templateid The unique identifier for the template used for the message
     * @param {string} data format of your data, example: {companyname}:test,{otpcode}:1234
     * @param {string} method (optional) Specifies the HTTP method used to request the required URL
     * once the Short Code message is sent.
     * @param {string} messageStatusCallback (optional) URL that can be requested to receive
     * notification when Short Code message was sent.
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static createSendSMS(shortcode,
        to,
        templateid,
        data,
        method,
        messageStatusCallback,
        callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        const _baseUri = _configuration.BASEURI;

        const _queryBuilder = `${_baseUri}${'/shortcode/sendsms.json'}`;

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            'user-agent': 'APIMATIC 2.0',
        };

        // prepare form data
        const _form = {
            shortcode,
            to,
            templateid,
            data,
            Method: method,
            MessageStatusCallback: messageStatusCallback,
        };

        // remove null values
        _apiHelper.cleanObject(_form);

        // construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'POST',
            headers: _headers,
            form: _form,
            username: _configuration.basicAuthUserName,
            password: _configuration.basicAuthPassword,
        };

        // build the response processing.
        return new Promise((_fulfill, _reject) => {
            _request(_options, (_error, _response, _context) => {
                let errorResponse;
                if (_error) {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                    _callback(null, _response.body, _context);
                    _fulfill(_response.body);
                } else {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                }
            });
        });
    }
    /**
     * List Shortcode Templates by Type
     *
     * @param {string} type (optional) The type (category) of template Valid values: marketing,
     * authorization
     * @param {int} page (optional) The page count to retrieve from the total results in the
     * collection. Page indexing starts at 1.
     * @param {int} pagesize (optional) The count of objects to return per page.
     * @param {string} shortcode (optional) Only list templates of type
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static createListTemplates(type, page, pagesize, shortcode, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        const _baseUri = _configuration.BASEURI;

        const _queryBuilder = `${_baseUri}${'/template/lists.json'}`;

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            'user-agent': 'APIMATIC 2.0',
        };

        // prepare form data
        const _form = {
            type,
            page,
            pagesize,
            Shortcode: shortcode,
        };

        // remove null values
        _apiHelper.cleanObject(_form);

        // construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'POST',
            headers: _headers,
            form: _form,
            username: _configuration.basicAuthUserName,
            password: _configuration.basicAuthPassword,
        };

        // build the response processing.
        return new Promise((_fulfill, _reject) => {
            _request(_options, (_error, _response, _context) => {
                let errorResponse;
                if (_error) {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                    _callback(null, _response.body, _context);
                    _fulfill(_response.body);
                } else {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                }
            });
        });
    }
    /**
     * View a Shared ShortCode Template
     *
     * @param {uuid|string} templateId The unique identifier for a template object
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static createViewTemplate(templateId, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        const _baseUri = _configuration.BASEURI;

        const _queryBuilder = `${_baseUri}${'/template/view.json'}`;

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            'user-agent': 'APIMATIC 2.0',
        };

        // prepare form data
        const _form = {
            TemplateId: templateId,
        };

        // remove null values
        _apiHelper.cleanObject(_form);

        // construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'POST',
            headers: _headers,
            form: _form,
            username: _configuration.basicAuthUserName,
            password: _configuration.basicAuthPassword,
        };

        // build the response processing.
        return new Promise((_fulfill, _reject) => {
            _request(_options, (_error, _response, _context) => {
                let errorResponse;
                if (_error) {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                    _callback(null, _response.body, _context);
                    _fulfill(_response.body);
                } else {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                }
            });
        });
    }
    /**
     * List All Inbound ShortCode
     *
     * @param {string} datecreated (optional) Only list messages sent with the specified date
     * @param {int} page (optional) The page count to retrieve from the total results in the
     * collection. Page indexing starts at 1.
     * @param {int} pagesize (optional) Number of individual resources listed in the response per
     * page
     * @param {string} from (optional) From Number to Inbound ShortCode
     * @param {string} shortcode (optional) Only list messages sent to this Short Code
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static createListInboundSMS(datecreated, page, pagesize, from, shortcode, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        const _baseUri = _configuration.BASEURI;

        let _queryBuilder = `${_baseUri}${'/shortcode/getinboundsms.json'}`;

        // process query parameters
        _queryBuilder = _apiHelper.appendUrlWithQueryParameters(_queryBuilder, {
            Datecreated: datecreated,
        });

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            'user-agent': 'APIMATIC 2.0',
        };

        // prepare form data
        const _form = {
            page,
            pagesize,
            from,
            Shortcode: shortcode,
        };

        // remove null values
        _apiHelper.cleanObject(_form);

        // construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'POST',
            headers: _headers,
            form: _form,
            username: _configuration.basicAuthUserName,
            password: _configuration.basicAuthPassword,
        };

        // build the response processing.
        return new Promise((_fulfill, _reject) => {
            _request(_options, (_error, _response, _context) => {
                let errorResponse;
                if (_error) {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                    _callback(null, _response.body, _context);
                    _fulfill(_response.body);
                } else {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                }
            });
        });
    }
    /**
     * View a set of properties for a single keyword.
     *
     * @param {string} keywordid The unique identifier of each keyword
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static createViewKeyword(keywordid, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        const _baseUri = _configuration.BASEURI;

        const _queryBuilder = `${_baseUri}${'/keyword/view.json'}`;

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            'user-agent': 'APIMATIC 2.0',
        };

        // prepare form data
        const _form = {
            Keywordid: keywordid,
        };

        // remove null values
        _apiHelper.cleanObject(_form);

        // construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'POST',
            headers: _headers,
            form: _form,
            username: _configuration.basicAuthUserName,
            password: _configuration.basicAuthPassword,
        };

        // build the response processing.
        return new Promise((_fulfill, _reject) => {
            _request(_options, (_error, _response, _context) => {
                let errorResponse;
                if (_error) {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                    _callback(null, _response.body, _context);
                    _fulfill(_response.body);
                } else {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                }
            });
        });
    }
}
module.exports = SharedShortCodeController;