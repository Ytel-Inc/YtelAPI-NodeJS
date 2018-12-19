/**
  * @module YtelAPILib
  *
  * Ytel API version 3.1.2
  */

'use strict';

const Configuration = require('./configuration');
const UsageController = require('./Controllers/UsageController');
const SubAccountController = require('./Controllers/SubAccountController');
const AccountController = require('./Controllers/AccountController');
const EmailController = require('./Controllers/EmailController');
const RecordingController = require('./Controllers/RecordingController');
const TranscriptionController = require('./Controllers/TranscriptionController');
const ConferenceController = require('./Controllers/ConferenceController');
const PhoneNumberController = require('./Controllers/PhoneNumberController');
const CarrierController = require('./Controllers/CarrierController');
const DedicatedShortCodeController = require('./Controllers/DedicatedShortCodeController');
const SharedShortCodeController = require('./Controllers/SharedShortCodeController');
const SMSController = require('./Controllers/SMSController');
const VoiceController = require('./Controllers/VoiceController');
const Body38 = require('./Models/Body38');
const Body75 = require('./Models/Body75');
const Body1 = require('./Models/Body1');
const Body64 = require('./Models/Body64');
const Body63 = require('./Models/Body63');
const Body22 = require('./Models/Body22');
const Body21 = require('./Models/Body21');
const Body68 = require('./Models/Body68');
const Body24 = require('./Models/Body24');
const Body23 = require('./Models/Body23');
const Body58 = require('./Models/Body58');
const Body52 = require('./Models/Body52');
const Body54 = require('./Models/Body54');
const Body71 = require('./Models/Body71');
const Body55 = require('./Models/Body55');
const Body47 = require('./Models/Body47');
const ProductCodeEnum = require('./Models/ProductCodeEnum');
const Body59 = require('./Models/Body59');
const Body14 = require('./Models/Body14');
const Body17 = require('./Models/Body17');
const Body16 = require('./Models/Body16');
const Body19 = require('./Models/Body19');
const Body18 = require('./Models/Body18');
const Body11 = require('./Models/Body11');
const Body10 = require('./Models/Body10');
const Body13 = require('./Models/Body13');
const Body56 = require('./Models/Body56');
const Body12 = require('./Models/Body12');
const Body39 = require('./Models/Body39');
const NumberType2Enum = require('./Models/NumberType2Enum');
const Body73 = require('./Models/Body73');
const Body6 = require('./Models/Body6');
const Numbertype1Enum = require('./Models/Numbertype1Enum');
const Body5 = require('./Models/Body5');
const Body31 = require('./Models/Body31');
const Body7 = require('./Models/Body7');
const Body33 = require('./Models/Body33');
const Body76 = require('./Models/Body76');
const Body32 = require('./Models/Body32');
const ActivateEnum = require('./Models/ActivateEnum');
const MergeNumberEnum = require('./Models/MergeNumberEnum');
const Body4 = require('./Models/Body4');
const NumberTypeEnum = require('./Models/NumberTypeEnum');
const Body70 = require('./Models/Body70');
const Body26 = require('./Models/Body26');
const Body28 = require('./Models/Body28');
const PlayDtmfDirectionEnum = require('./Models/PlayDtmfDirectionEnum');
const Body27 = require('./Models/Body27');
const Body29 = require('./Models/Body29');
const Body62 = require('./Models/Body62');
const Body66 = require('./Models/Body66');
const Direction1Enum = require('./Models/Direction1Enum');
const Body65 = require('./Models/Body65');
const AudioDirectionEnum = require('./Models/AudioDirectionEnum');
const DirectionEnum = require('./Models/DirectionEnum');
const Body60 = require('./Models/Body60');
const Body51 = require('./Models/Body51');
const StatusEnum = require('./Models/StatusEnum');
const Body50 = require('./Models/Body50');
const Body53 = require('./Models/Body53');
const AudioUrlEnum = require('./Models/AudioUrlEnum');
const Body57 = require('./Models/Body57');
const Body48 = require('./Models/Body48');
const Body49 = require('./Models/Body49');
const Body40 = require('./Models/Body40');
const Body42 = require('./Models/Body42');
const Body41 = require('./Models/Body41');
const Body43 = require('./Models/Body43');
const Body44 = require('./Models/Body44');
const Body46 = require('./Models/Body46');
const Body45 = require('./Models/Body45');
const Body36 = require('./Models/Body36');
const Body72 = require('./Models/Body72');
const Body8 = require('./Models/Body8');
const Body74 = require('./Models/Body74');
const Body30 = require('./Models/Body30');
const GroupConfirmFileEnum = require('./Models/GroupConfirmFileEnum');
const Body9 = require('./Models/Body9');
const Body35 = require('./Models/Body35');
const Body34 = require('./Models/Body34');
const Body2 = require('./Models/Body2');
const Body3 = require('./Models/Body3');
const Body69 = require('./Models/Body69');
const Body25 = require('./Models/Body25');
const Status1Enum = require('./Models/Status1Enum');
const Body61 = require('./Models/Body61');
const Body20 = require('./Models/Body20');
const TypeEnum = require('./Models/TypeEnum');
const Body67 = require('./Models/Body67');
const FileformatEnum = require('./Models/FileformatEnum');
const Body = require('./Models/Body');
const Body77 = require('./Models/Body77');
const IfMachineEnum = require('./Models/IfMachineEnum');
const APIException = require('./Exceptions/APIException');


const initializer = {
    // functional components of YtelAPILib
    Configuration,
    // controllers of YtelAPILib
    UsageController,
    SubAccountController,
    AccountController,
    EmailController,
    RecordingController,
    TranscriptionController,
    ConferenceController,
    PhoneNumberController,
    CarrierController,
    DedicatedShortCodeController,
    SharedShortCodeController,
    SMSController,
    VoiceController,
    // models of YtelAPILib
    Body38,
    Body75,
    Body1,
    Body64,
    Body63,
    Body22,
    Body21,
    Body68,
    Body24,
    Body23,
    Body58,
    Body52,
    Body54,
    Body71,
    Body55,
    Body47,
    ProductCodeEnum,
    Body59,
    Body14,
    Body17,
    Body16,
    Body19,
    Body18,
    Body11,
    Body10,
    Body13,
    Body56,
    Body12,
    Body39,
    NumberType2Enum,
    Body73,
    Body6,
    Numbertype1Enum,
    Body5,
    Body31,
    Body7,
    Body33,
    Body76,
    Body32,
    ActivateEnum,
    MergeNumberEnum,
    Body4,
    NumberTypeEnum,
    Body70,
    Body26,
    Body28,
    PlayDtmfDirectionEnum,
    Body27,
    Body29,
    Body62,
    Body66,
    Direction1Enum,
    Body65,
    AudioDirectionEnum,
    DirectionEnum,
    Body60,
    Body51,
    StatusEnum,
    Body50,
    Body53,
    AudioUrlEnum,
    Body57,
    Body48,
    Body49,
    Body40,
    Body42,
    Body41,
    Body43,
    Body44,
    Body46,
    Body45,
    Body36,
    Body72,
    Body8,
    Body74,
    Body30,
    GroupConfirmFileEnum,
    Body9,
    Body35,
    Body34,
    Body2,
    Body3,
    Body69,
    Body25,
    Status1Enum,
    Body61,
    Body20,
    TypeEnum,
    Body67,
    FileformatEnum,
    Body,
    Body77,
    IfMachineEnum,
    // exceptions of YtelAPILib
    APIException,
};

module.exports = initializer;
