/**
 * YtelAPILib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of Body63
 */
class Body63 extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.shortcode = this.constructor.getValue(obj.shortcode || obj.Shortcode);
        this.friendlyName = this.constructor.getValue(obj.friendlyName || obj.FriendlyName);
        this.callbackUrl = this.constructor.getValue(obj.callbackUrl || obj.CallbackUrl);
        this.callbackMethod = this.constructor.getValue(obj.callbackMethod || obj.CallbackMethod);
        this.fallbackUrl = this.constructor.getValue(obj.fallbackUrl || obj.FallbackUrl);
        this.fallbackUrlMethod =
          this.constructor.getValue(obj.fallbackUrlMethod
     || obj.FallbackUrlMethod);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'shortcode', realName: 'Shortcode' },
            { name: 'friendlyName', realName: 'FriendlyName' },
            { name: 'callbackUrl', realName: 'CallbackUrl' },
            { name: 'callbackMethod', realName: 'CallbackMethod' },
            { name: 'fallbackUrl', realName: 'FallbackUrl' },
            { name: 'fallbackUrlMethod', realName: 'FallbackUrlMethod' },
        ]);
    }

    /**
     * Function containing information about discriminator values
     * mapped with their corresponding model class names
     *
     * @return   {object}  Object containing Key-Value pairs mapping discriminator
     *                     values with their corresponding model classes
     */
    static discriminatorMap() {
        return {};
    }
}

module.exports = Body63;
