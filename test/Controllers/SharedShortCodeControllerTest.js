/**
 * YtelAPILib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const chai = require('chai');
const assert = chai.assert;
const TestHelper = require("../TestHelper");
const APIHelper = require("../../lib/APIHelper");
const testerlib = require("../../lib");
const testConfiguration = require("../TestBootstrap");

const controller = testerlib.SharedShortCodeController;
const Body38 = testerlib.Body38;
const Body75 = testerlib.Body75;
const Body1 = testerlib.Body1;
const Body64 = testerlib.Body64;
const Body63 = testerlib.Body63;
const Body22 = testerlib.Body22;
const Body21 = testerlib.Body21;
const Body68 = testerlib.Body68;
const Body24 = testerlib.Body24;
const Body23 = testerlib.Body23;
const Body58 = testerlib.Body58;
const Body52 = testerlib.Body52;
const Body54 = testerlib.Body54;
const Body71 = testerlib.Body71;
const Body55 = testerlib.Body55;
const Body47 = testerlib.Body47;
const ProductCodeEnum = testerlib.ProductCodeEnum;
const Body59 = testerlib.Body59;
const Body14 = testerlib.Body14;
const Body17 = testerlib.Body17;
const Body16 = testerlib.Body16;
const Body19 = testerlib.Body19;
const Body18 = testerlib.Body18;
const Body11 = testerlib.Body11;
const Body10 = testerlib.Body10;
const Body13 = testerlib.Body13;
const Body56 = testerlib.Body56;
const Body12 = testerlib.Body12;
const Body39 = testerlib.Body39;
const NumberType2Enum = testerlib.NumberType2Enum;
const Body73 = testerlib.Body73;
const Body6 = testerlib.Body6;
const Numbertype1Enum = testerlib.Numbertype1Enum;
const Body5 = testerlib.Body5;
const Body31 = testerlib.Body31;
const Body7 = testerlib.Body7;
const Body33 = testerlib.Body33;
const Body76 = testerlib.Body76;
const Body32 = testerlib.Body32;
const ActivateEnum = testerlib.ActivateEnum;
const MergeNumberEnum = testerlib.MergeNumberEnum;
const Body4 = testerlib.Body4;
const NumberTypeEnum = testerlib.NumberTypeEnum;
const Body70 = testerlib.Body70;
const Body26 = testerlib.Body26;
const Body28 = testerlib.Body28;
const PlayDtmfDirectionEnum = testerlib.PlayDtmfDirectionEnum;
const Body27 = testerlib.Body27;
const Body29 = testerlib.Body29;
const Body62 = testerlib.Body62;
const Body66 = testerlib.Body66;
const Direction1Enum = testerlib.Direction1Enum;
const Body65 = testerlib.Body65;
const AudioDirectionEnum = testerlib.AudioDirectionEnum;
const DirectionEnum = testerlib.DirectionEnum;
const Body60 = testerlib.Body60;
const Body51 = testerlib.Body51;
const StatusEnum = testerlib.StatusEnum;
const Body50 = testerlib.Body50;
const Body53 = testerlib.Body53;
const AudioUrlEnum = testerlib.AudioUrlEnum;
const Body57 = testerlib.Body57;
const Body48 = testerlib.Body48;
const Body49 = testerlib.Body49;
const Body40 = testerlib.Body40;
const Body42 = testerlib.Body42;
const Body41 = testerlib.Body41;
const Body43 = testerlib.Body43;
const Body44 = testerlib.Body44;
const Body46 = testerlib.Body46;
const Body45 = testerlib.Body45;
const Body36 = testerlib.Body36;
const Body72 = testerlib.Body72;
const Body8 = testerlib.Body8;
const Body74 = testerlib.Body74;
const Body30 = testerlib.Body30;
const GroupConfirmFileEnum = testerlib.GroupConfirmFileEnum;
const Body9 = testerlib.Body9;
const Body35 = testerlib.Body35;
const Body34 = testerlib.Body34;
const Body2 = testerlib.Body2;
const Body3 = testerlib.Body3;
const Body69 = testerlib.Body69;
const Body25 = testerlib.Body25;
const Status1Enum = testerlib.Status1Enum;
const Body61 = testerlib.Body61;
const Body20 = testerlib.Body20;
const TypeEnum = testerlib.TypeEnum;
const Body67 = testerlib.Body67;
const FileformatEnum = testerlib.FileformatEnum;
const Body = testerlib.Body;
const Body77 = testerlib.Body77;
const IfMachineEnum = testerlib.IfMachineEnum;


describe("SharedShortCodeController Tests", function tests() {
    this.timeout(testConfiguration.TEST_TIMEOUT);

    /**
     * Retrieve a list of shortcode assignment associated with your Ytel account.
     */
    it("should testTestListShortcodes response", function testTestListShortcodesTest(done) {
        // parameters for the API call
        let shortcode = null;
        let page = null;
        let pagesize = null;

        controller.createListShortcodes(shortcode, page, pagesize, function callback(error, response, context) {
            // test response code
            assert.equal(200, context.response.statusCode);
            // test headers
            let headers = [];
            headers['Content-Type'] = 'application/json';
            assert.isTrue(TestHelper.areHeadersProperSubsetOf(headers, context.response.headers, true));
            done();
        });
    });

    /**
     * Retrieve a list of keywords associated with your Ytel account.
     */
    it("should testTestListKeywords response", function testTestListKeywordsTest(done) {
        // parameters for the API call
        let page = null;
        let pagesize = null;
        let keyword = null;
        let shortcode = null;

        controller.createListKeywords(page, pagesize, keyword, shortcode, function callback(error, response, context) {
            // test response code
            assert.equal(200, context.response.statusCode);
            // test headers
            let headers = [];
            headers['Content-Type'] = 'application/json';
            assert.isTrue(TestHelper.areHeadersProperSubsetOf(headers, context.response.headers, true));
            done();
        });
    });

    /**
     * List Shortcode Templates by Type
     */
    it("should testTestListTemplates response", function testTestListTemplatesTest(done) {
        // parameters for the API call
        let type = null;
        let page = null;
        let pagesize = null;
        let shortcode = null;

        controller.createListTemplates(type, page, pagesize, shortcode, function callback(error, response, context) {
            // test response code
            assert.equal(200, context.response.statusCode);
            // test headers
            let headers = [];
            headers['Content-Type'] = 'application/json';
            assert.isTrue(TestHelper.areHeadersProperSubsetOf(headers, context.response.headers, true));
            done();
        });
    });

    /**
     * List All Inbound ShortCode
     */
    it("should testTestListInboundSMS response", function testTestListInboundSMSTest(done) {
        // parameters for the API call
        let datecreated = null;
        let page = null;
        let pagesize = null;
        let from = null;
        let shortcode = null;

        controller.createListInboundSMS(datecreated, page, pagesize, from, shortcode, function callback(error, response, context) {
            // test response code
            assert.equal(200, context.response.statusCode);
            // test headers
            let headers = [];
            headers['Content-Type'] = 'application/json';
            assert.isTrue(TestHelper.areHeadersProperSubsetOf(headers, context.response.headers, true));
            done();
        });
    });

});
