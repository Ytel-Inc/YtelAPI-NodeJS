/**
 * YtelAPILib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of Body42
 */
class Body42 extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.page = this.constructor.getValue(obj.page || obj.Page);
        this.pageSize = this.constructor.getValue(obj.pageSize || obj.PageSize);
        this.to = this.constructor.getValue(obj.to || obj.To);
        this.from = this.constructor.getValue(obj.from || obj.From);
        this.dateCreated = this.constructor.getValue(obj.dateCreated || obj.DateCreated);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'page', realName: 'Page' },
            { name: 'pageSize', realName: 'PageSize' },
            { name: 'to', realName: 'To' },
            { name: 'from', realName: 'From' },
            { name: 'dateCreated', realName: 'DateCreated' },
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

module.exports = Body42;