/**
 * YtelAPILib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of Body47
 */
class Body47 extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.phoneNumber = this.constructor.getValue(obj.phoneNumber || obj.PhoneNumber);
        this.voiceUrl = this.constructor.getValue(obj.voiceUrl || obj.VoiceUrl);
        this.friendlyName = this.constructor.getValue(obj.friendlyName || obj.FriendlyName);
        this.voiceMethod = this.constructor.getValue(obj.voiceMethod || obj.VoiceMethod);
        this.voiceFallbackUrl =
          this.constructor.getValue(obj.voiceFallbackUrl
     || obj.VoiceFallbackUrl);
        this.voiceFallbackMethod =
          this.constructor.getValue(obj.voiceFallbackMethod
     || obj.VoiceFallbackMethod);
        this.hangupCallback = this.constructor.getValue(obj.hangupCallback || obj.HangupCallback);
        this.hangupCallbackMethod =
          this.constructor.getValue(obj.hangupCallbackMethod
     || obj.HangupCallbackMethod);
        this.heartbeatUrl = this.constructor.getValue(obj.heartbeatUrl || obj.HeartbeatUrl);
        this.heartbeatMethod =
          this.constructor.getValue(obj.heartbeatMethod
     || obj.HeartbeatMethod);
        this.smsUrl = this.constructor.getValue(obj.smsUrl || obj.SmsUrl);
        this.smsMethod = this.constructor.getValue(obj.smsMethod || obj.SmsMethod);
        this.smsFallbackUrl = this.constructor.getValue(obj.smsFallbackUrl || obj.SmsFallbackUrl);
        this.smsFallbackMethod =
          this.constructor.getValue(obj.smsFallbackMethod
     || obj.SmsFallbackMethod);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'phoneNumber', realName: 'PhoneNumber' },
            { name: 'voiceUrl', realName: 'VoiceUrl' },
            { name: 'friendlyName', realName: 'FriendlyName' },
            { name: 'voiceMethod', realName: 'VoiceMethod' },
            { name: 'voiceFallbackUrl', realName: 'VoiceFallbackUrl' },
            { name: 'voiceFallbackMethod', realName: 'VoiceFallbackMethod' },
            { name: 'hangupCallback', realName: 'HangupCallback' },
            { name: 'hangupCallbackMethod', realName: 'HangupCallbackMethod' },
            { name: 'heartbeatUrl', realName: 'HeartbeatUrl' },
            { name: 'heartbeatMethod', realName: 'HeartbeatMethod' },
            { name: 'smsUrl', realName: 'SmsUrl' },
            { name: 'smsMethod', realName: 'SmsMethod' },
            { name: 'smsFallbackUrl', realName: 'SmsFallbackUrl' },
            { name: 'smsFallbackMethod', realName: 'SmsFallbackMethod' },
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

module.exports = Body47;
