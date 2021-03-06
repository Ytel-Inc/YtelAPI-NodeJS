/**
 * YtelAPILib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of Body57
 */
class Body57 extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.conferenceSid = this.constructor.getValue(obj.conferenceSid || obj.ConferenceSid);
        this.participantSid = this.constructor.getValue(obj.participantSid || obj.ParticipantSid);
        this.audioUrl = this.constructor.getValue(obj.audioUrl || obj.AudioUrl);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'conferenceSid', realName: 'ConferenceSid' },
            { name: 'participantSid', realName: 'ParticipantSid' },
            { name: 'audioUrl', realName: 'AudioUrl' },
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

module.exports = Body57;
