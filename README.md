# Getting started

Ytel API version 3.1.2

## How to Build

The generated SDK relies on [Node Package Manager](https://www.npmjs.com/) (NPM) being available to resolve dependencies. If you don't already have NPM installed, please go ahead and follow instructions to install NPM from [here](https://nodejs.org/en/download/).
The SDK also requires Node to be installed. If Node isn't already installed, please install it from [here](https://nodejs.org/en/download/)
> NPM is installed by default when Node is installed

To check if node and npm have been successfully installed, write the following commands in command prompt:

* `node --version`
* `npm -version`

![Version Check](https://apidocs.io/illustration/nodejs?step=versionCheck&workspaceFolder=Ytel%20API-Node)

Now use npm to resolve all dependencies by running the following command in the root directory (of the SDK folder):

```bash
npm install
```

![Resolve Dependencies](https://apidocs.io/illustration/nodejs?step=resolveDependency1&workspaceFolder=Ytel%20API-Node)

![Resolve Dependencies](https://apidocs.io/illustration/nodejs?step=resolveDependency2)

This will install all dependencies in the `node_modules` folder.

Once dependencies are resolved, you will need to move the folder `YtelAPILib ` in to your `node_modules` folder.

## How to Use

The following section explains how to use the library in a new project.

### 1. Open Project Folder
Open an IDE/Text Editor for JavaScript like Sublime Text. The basic workflow presented here is also applicable if you prefer using a different editor or IDE.

Click on `File` and select `Open Folder`.

![Open Folder](https://apidocs.io/illustration/nodejs?step=openFolder)

Select the folder of your SDK and click on `Select Folder` to open it up in Sublime Text. The folder will become visible in the bar on the left.

![Open Project](https://apidocs.io/illustration/nodejs?step=openProject&workspaceFolder=Ytel%20API-Node)

### 2. Creating a Test File

Now right click on the folder name and select the `New File` option to create a new test file. Save it as `index.js` Now import the generated NodeJS library using the following lines of code:

```js
var lib = require('lib');
```

Save changes.

![Create new file](https://apidocs.io/illustration/nodejs?step=createNewFile&workspaceFolder=Ytel%20API-Node)

![Save new file](https://apidocs.io/illustration/nodejs?step=saveNewFile&workspaceFolder=Ytel%20API-Node)

### 3. Running The Test File

To run the `index.js` file, open up the command prompt and navigate to the Path where the SDK folder resides. Type the following command to run the file:

```
node index.js
```

![Run file](https://apidocs.io/illustration/nodejs?step=runProject&workspaceFolder=Ytel%20API-Node)


## How to Test

These tests use Mocha framework for testing, coupled with Chai for assertions. These dependencies need to be installed for tests to run.
Tests can be run in a number of ways:

### Method 1 (Run all tests)

1. Navigate to the root directory of the SDK folder from command prompt.
2. Type `mocha --recursive` to run all the tests.

### Method 2 (Run all tests)

1. Navigate to the `../test/Controllers/` directory from command prompt.
2. Type `mocha *` to run all the tests.

### Method 3 (Run specific controller's tests)

1. Navigate to the `../test/Controllers/` directory from command prompt.
2. Type `mocha  Ytel APIController`  to run all the tests in that controller file.

> To increase mocha's default timeout, you can change the `TEST_TIMEOUT` parameter's value in `TestBootstrap.js`.

![Run Tests](https://apidocs.io/illustration/nodejs?step=runTests&controllerName=Ytel%20APIController)

## Initialization

### Authentication
In order to setup authentication in the API client, you need the following information.

| Parameter | Description |
|-----------|-------------|
| basicAuthUserName | The username to use with basic authentication |
| basicAuthPassword | The password to use with basic authentication |



API client can be initialized as following:

```JavaScript
const lib = require('lib');

// Configuration parameters and credentials
lib.Configuration.basicAuthUserName = "basicAuthUserName"; // The username to use with basic authentication
lib.Configuration.basicAuthPassword = "basicAuthPassword"; // The password to use with basic authentication

```



# Class Reference

## <a name="list_of_controllers"></a>List of Controllers

* [UsageController](#usage_controller)
* [SubAccountController](#sub_account_controller)
* [AccountController](#account_controller)
* [EmailController](#email_controller)
* [RecordingController](#recording_controller)
* [TranscriptionController](#transcription_controller)
* [ConferenceController](#conference_controller)
* [PhoneNumberController](#phone_number_controller)
* [CarrierController](#carrier_controller)
* [DedicatedShortCodeController](#dedicated_short_code_controller)
* [SharedShortCodeController](#shared_short_code_controller)
* [SMSController](#sms_controller)
* [VoiceController](#voice_controller)

## <a name="usage_controller"></a>![Class: ](https://apidocs.io/img/class.png ".UsageController") UsageController

### Get singleton instance

The singleton instance of the ``` UsageController ``` class can be accessed from the API Client.

```javascript
var controller = lib.UsageController;
```

### <a name="create_list_usage"></a>![Method: ](https://apidocs.io/img/method.png ".UsageController.createListUsage") createListUsage

> Retrieve usage metrics regarding your Ytel account. The results includes inbound/outbound voice calls and inbound/outbound SMS messages as well as carrier lookup requests.


```javascript
function createListUsage(productCode, startDate, endDate, includeSubAccounts, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| productCode |  ``` Optional ```  | Filter usage results by product type. |
| startDate |  ``` Optional ```  | Filter usage objects by start date. |
| endDate |  ``` Optional ```  | Filter usage objects by end date. |
| includeSubAccounts |  ``` Optional ```  | Will include all subaccount usage data |



#### Example Usage

```javascript

    var productCode = Object.keys(ProductCode)[0];
    var startDate = 'startDate';
    var endDate = 'endDate';
    var includeSubAccounts = 'IncludeSubAccounts';

    controller.createListUsage(productCode, startDate, endDate, includeSubAccounts, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="sub_account_controller"></a>![Class: ](https://apidocs.io/img/class.png ".SubAccountController") SubAccountController

### Get singleton instance

The singleton instance of the ``` SubAccountController ``` class can be accessed from the API Client.

```javascript
var controller = lib.SubAccountController;
```

### <a name="create_subaccount"></a>![Method: ](https://apidocs.io/img/method.png ".SubAccountController.createSubaccount") createSubaccount

> Create a sub user account under the parent account


```javascript
function createSubaccount(firstName, lastName, email, friendlyName, password, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| firstName |  ``` Required ```  | Sub account user first name |
| lastName |  ``` Required ```  | sub account user last name |
| email |  ``` Required ```  | Sub account email address |
| friendlyName |  ``` Required ```  | Descriptive name of the sub account |
| password |  ``` Required ```  | The password of the sub account.  Please make sure to make as password that is at least 8 characters long, contain a symbol, uppercase and a number. |



#### Example Usage

```javascript

    var firstName = 'FirstName';
    var lastName = 'LastName';
    var email = 'Email';
    var friendlyName = 'FriendlyName';
    var password = 'Password';

    controller.createSubaccount(firstName, lastName, email, friendlyName, password, function(error, response, context) {

    
    });
```



### <a name="create_delete_subaccount"></a>![Method: ](https://apidocs.io/img/method.png ".SubAccountController.createDeleteSubaccount") createDeleteSubaccount

> Delete sub account or merge numbers into parent


```javascript
function createDeleteSubaccount(subAccountSID, mergeNumber, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| subAccountSID |  ``` Required ```  | The SubaccountSid to be deleted |
| mergeNumber |  ``` Required ```  | 0 to delete or 1 to merge numbers to parent account. |



#### Example Usage

```javascript

    var subAccountSID = 'SubAccountSID';
    var mergeNumber = Object.keys(MergeNumber)[0];

    controller.createDeleteSubaccount(subAccountSID, mergeNumber, function(error, response, context) {

    
    });
```



### <a name="create_toggle_subaccount_status"></a>![Method: ](https://apidocs.io/img/method.png ".SubAccountController.createToggleSubaccountStatus") createToggleSubaccountStatus

> Suspend or unsuspend


```javascript
function createToggleSubaccountStatus(subAccountSID, activate, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| subAccountSID |  ``` Required ```  | The SubaccountSid to be activated or suspended |
| activate |  ``` Required ```  | 0 to suspend or 1 to activate |



#### Example Usage

```javascript

    var subAccountSID = 'SubAccountSID';
    var activate = Object.keys(Activate)[0];

    controller.createToggleSubaccountStatus(subAccountSID, activate, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="account_controller"></a>![Class: ](https://apidocs.io/img/class.png ".AccountController") AccountController

### Get singleton instance

The singleton instance of the ``` AccountController ``` class can be accessed from the API Client.

```javascript
var controller = lib.AccountController;
```

### <a name="create_view_account"></a>![Method: ](https://apidocs.io/img/method.png ".AccountController.createViewAccount") createViewAccount

> Retrieve information regarding your Ytel account by a specific date. The response object will contain data such as account status, balance, and account usage totals.


```javascript
function createViewAccount(date, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| date |  ``` Required ```  | Filter account information based on date. |



#### Example Usage

```javascript

    var date = 'Date';

    controller.createViewAccount(date, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="email_controller"></a>![Class: ](https://apidocs.io/img/class.png ".EmailController") EmailController

### Get singleton instance

The singleton instance of the ``` EmailController ``` class can be accessed from the API Client.

```javascript
var controller = lib.EmailController;
```

### <a name="create_blocked_emails"></a>![Method: ](https://apidocs.io/img/method.png ".EmailController.createBlockedEmails") createBlockedEmails

> Retrieve a list of emails that have been blocked.


```javascript
function createBlockedEmails(offset, limit, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| offset |  ``` Optional ```  | The starting point of the list of blocked emails that should be returned. |
| limit |  ``` Optional ```  | The count of results that should be returned. |



#### Example Usage

```javascript

    var offset = 'Offset';
    var limit = 'Limit';

    controller.createBlockedEmails(offset, limit, function(error, response, context) {

    
    });
```



### <a name="create_remove_invalid_email"></a>![Method: ](https://apidocs.io/img/method.png ".EmailController.createRemoveInvalidEmail") createRemoveInvalidEmail

> Remove an email from the invalid email list.


```javascript
function createRemoveInvalidEmail(email, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| email |  ``` Required ```  | A valid email address that is to be remove from the invalid email list. |



#### Example Usage

```javascript

    var email = 'Email';

    controller.createRemoveInvalidEmail(email, function(error, response, context) {

    
    });
```



### <a name="create_invalid_emails"></a>![Method: ](https://apidocs.io/img/method.png ".EmailController.createInvalidEmails") createInvalidEmails

> Retrieve a list of invalid email addresses.


```javascript
function createInvalidEmails(offset, limit, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| offset |  ``` Optional ```  | The starting point of the list of invalid emails that should be returned. |
| limit |  ``` Optional ```  | The count of results that should be returned. |



#### Example Usage

```javascript

    var offset = 'Offset';
    var limit = 'Limit';

    controller.createInvalidEmails(offset, limit, function(error, response, context) {

    
    });
```



### <a name="create_remove_bounced_email"></a>![Method: ](https://apidocs.io/img/method.png ".EmailController.createRemoveBouncedEmail") createRemoveBouncedEmail

> Remove an email address from the bounced list.


```javascript
function createRemoveBouncedEmail(email, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| email |  ``` Required ```  | The email address to be remove from the bounced email list. |



#### Example Usage

```javascript

    var email = 'Email';

    controller.createRemoveBouncedEmail(email, function(error, response, context) {

    
    });
```



### <a name="create_bounced_emails"></a>![Method: ](https://apidocs.io/img/method.png ".EmailController.createBouncedEmails") createBouncedEmails

> Retrieve a list of emails that have bounced.


```javascript
function createBouncedEmails(offset, limit, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| offset |  ``` Optional ```  | The starting point of the list of bounced emails that should be returned. |
| limit |  ``` Optional ```  | The count of results that should be returned. |



#### Example Usage

```javascript

    var offset = 'Offset';
    var limit = 'Limit';

    controller.createBouncedEmails(offset, limit, function(error, response, context) {

    
    });
```



### <a name="create_spam_emails"></a>![Method: ](https://apidocs.io/img/method.png ".EmailController.createSpamEmails") createSpamEmails

> Retrieve a list of emails that are on the spam list.


```javascript
function createSpamEmails(offset, limit, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| offset |  ``` Optional ```  | The starting point of the list of spam emails that should be returned. |
| limit |  ``` Optional ```  | The count of results that should be returned. |



#### Example Usage

```javascript

    var offset = 'Offset';
    var limit = 'Limit';

    controller.createSpamEmails(offset, limit, function(error, response, context) {

    
    });
```



### <a name="create_send_email"></a>![Method: ](https://apidocs.io/img/method.png ".EmailController.createSendEmail") createSendEmail

> Create and submit an email message to one or more email addresses.


```javascript
function createSendEmail(to, type, subject, message, from, cc, bcc, attachment, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| to |  ``` Required ```  | A valid address that will receive the email. Multiple addresses can be separated by using commas. |
| type |  ``` Required ```  | Specifies the type of email to be sent |
| subject |  ``` Required ```  | The subject of the mail. Must be a valid string. |
| message |  ``` Required ```  | The email message that is to be sent in the text. |
| from |  ``` Optional ```  | A valid address that will send the email. |
| cc |  ``` Optional ```  | Carbon copy. A valid address that will receive the email. Multiple addresses can be separated by using commas. |
| bcc |  ``` Optional ```  | Blind carbon copy. A valid address that will receive the email. Multiple addresses can be separated by using commas. |
| attachment |  ``` Optional ```  | A file that is attached to the email. Must be less than 7 MB in size. |



#### Example Usage

```javascript

    var to = 'To';
    var type = Object.keys(Type)[0];
    var subject = 'Subject';
    var message = 'Message';
    var from = 'From';
    var cc = 'Cc';
    var bcc = 'Bcc';
    var attachment = 'Attachment';

    controller.createSendEmail(to, type, subject, message, from, cc, bcc, attachment, function(error, response, context) {

    
    });
```



### <a name="create_remove_blocked_address"></a>![Method: ](https://apidocs.io/img/method.png ".EmailController.createRemoveBlockedAddress") createRemoveBlockedAddress

> Remove an email from blocked emails list.


```javascript
function createRemoveBlockedAddress(email, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| email |  ``` Required ```  | The email address to be remove from the blocked list. |



#### Example Usage

```javascript

    var email = 'Email';

    controller.createRemoveBlockedAddress(email, function(error, response, context) {

    
    });
```



### <a name="add_email_unsubscribe"></a>![Method: ](https://apidocs.io/img/method.png ".EmailController.addEmailUnsubscribe") addEmailUnsubscribe

> Add an email to the unsubscribe list


```javascript
function addEmailUnsubscribe(email, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| email |  ``` Required ```  | A valid email address that is to be added to the unsubscribe list |



#### Example Usage

```javascript

    var email = 'email';

    controller.addEmailUnsubscribe(email, function(error, response, context) {

    
    });
```



### <a name="create_remove_unsubscribed_email"></a>![Method: ](https://apidocs.io/img/method.png ".EmailController.createRemoveUnsubscribedEmail") createRemoveUnsubscribedEmail

> Remove an email address from the list of unsubscribed emails.


```javascript
function createRemoveUnsubscribedEmail(email, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| email |  ``` Required ```  | A valid email address that is to be remove from the unsubscribe list. |



#### Example Usage

```javascript

    var email = 'email';

    controller.createRemoveUnsubscribedEmail(email, function(error, response, context) {

    
    });
```



### <a name="create_list_unsubscribed_emails"></a>![Method: ](https://apidocs.io/img/method.png ".EmailController.createListUnsubscribedEmails") createListUnsubscribedEmails

> Retrieve a list of email addresses from the unsubscribe list.


```javascript
function createListUnsubscribedEmails(offset, limit, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| offset |  ``` Optional ```  | The starting point of the list of unsubscribed emails that should be returned. |
| limit |  ``` Optional ```  | The count of results that should be returned. |



#### Example Usage

```javascript

    var offset = 'Offset';
    var limit = 'Limit';

    controller.createListUnsubscribedEmails(offset, limit, function(error, response, context) {

    
    });
```



### <a name="create_remove_spam_address"></a>![Method: ](https://apidocs.io/img/method.png ".EmailController.createRemoveSpamAddress") createRemoveSpamAddress

> Remove an email from the spam email list.


```javascript
function createRemoveSpamAddress(email, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| email |  ``` Required ```  | A valid email address that is to be remove from the spam list. |



#### Example Usage

```javascript

    var email = 'Email';

    controller.createRemoveSpamAddress(email, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="recording_controller"></a>![Class: ](https://apidocs.io/img/class.png ".RecordingController") RecordingController

### Get singleton instance

The singleton instance of the ``` RecordingController ``` class can be accessed from the API Client.

```javascript
var controller = lib.RecordingController;
```

### <a name="create_delete_recording"></a>![Method: ](https://apidocs.io/img/method.png ".RecordingController.createDeleteRecording") createDeleteRecording

> Remove a recording from your Ytel account.


```javascript
function createDeleteRecording(recordingsid, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| recordingsid |  ``` Required ```  | The unique identifier for a recording. |



#### Example Usage

```javascript

    var recordingsid = 'recordingsid';

    controller.createDeleteRecording(recordingsid, function(error, response, context) {

    
    });
```



### <a name="create_list_recordings"></a>![Method: ](https://apidocs.io/img/method.png ".RecordingController.createListRecordings") createListRecordings

> Retrieve a list of recording objects.


```javascript
function createListRecordings(page, pagesize, datecreated, callsid, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| page |  ``` Optional ```  | The page count to retrieve from the total results in the collection. Page indexing starts at 1. |
| pagesize |  ``` Optional ```  | The count of objects to return per page. |
| datecreated |  ``` Optional ```  | Filter results by creation date |
| callsid |  ``` Optional ```  | The unique identifier for a call. |



#### Example Usage

```javascript

    var page = 87;
    var pagesize = 87;
    var datecreated = 'Datecreated';
    var callsid = 'callsid';

    controller.createListRecordings(page, pagesize, datecreated, callsid, function(error, response, context) {

    
    });
```



### <a name="create_view_recording"></a>![Method: ](https://apidocs.io/img/method.png ".RecordingController.createViewRecording") createViewRecording

> Retrieve the recording of a call by its RecordingSid. This resource will return information regarding the call such as start time, end time, duration, and so forth.


```javascript
function createViewRecording(recordingsid, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| recordingsid |  ``` Required ```  | The unique identifier for the recording. |



#### Example Usage

```javascript

    var recordingsid = 'recordingsid';

    controller.createViewRecording(recordingsid, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="transcription_controller"></a>![Class: ](https://apidocs.io/img/class.png ".TranscriptionController") TranscriptionController

### Get singleton instance

The singleton instance of the ``` TranscriptionController ``` class can be accessed from the API Client.

```javascript
var controller = lib.TranscriptionController;
```

### <a name="create_transcribe_audio_url"></a>![Method: ](https://apidocs.io/img/method.png ".TranscriptionController.createTranscribeAudioURL") createTranscribeAudioURL

> Transcribe an audio recording from a file.


```javascript
function createTranscribeAudioURL(audiourl, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| audiourl |  ``` Required ```  | URL pointing to the location of the audio file that is to be transcribed. |



#### Example Usage

```javascript

    var audiourl = 'audiourl';

    controller.createTranscribeAudioURL(audiourl, function(error, response, context) {

    
    });
```



### <a name="create_list_transcriptions"></a>![Method: ](https://apidocs.io/img/method.png ".TranscriptionController.createListTranscriptions") createListTranscriptions

> Retrieve a list of transcription objects for your Ytel account.


```javascript
function createListTranscriptions(page, pagesize, status, dateTranscribed, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| page |  ``` Optional ```  | The page count to retrieve from the total results in the collection. Page indexing starts at 1. |
| pagesize |  ``` Optional ```  | The count of objects to return per page. |
| status |  ``` Optional ```  | The state of the transcription. |
| dateTranscribed |  ``` Optional ```  | The date the transcription took place. |



#### Example Usage

```javascript

    var page = 87;
    var pagesize = 87;
    var status = Object.keys(Status)[0];
    var dateTranscribed = 'dateTranscribed';

    controller.createListTranscriptions(page, pagesize, status, dateTranscribed, function(error, response, context) {

    
    });
```



### <a name="create_view_transcription"></a>![Method: ](https://apidocs.io/img/method.png ".TranscriptionController.createViewTranscription") createViewTranscription

> Retrieve information about a transaction by its TranscriptionSid.


```javascript
function createViewTranscription(transcriptionsid, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| transcriptionsid |  ``` Required ```  | The unique identifier for a transcription object. |



#### Example Usage

```javascript

    var transcriptionsid = 'transcriptionsid';

    controller.createViewTranscription(transcriptionsid, function(error, response, context) {

    
    });
```



### <a name="create_transcribe_recording"></a>![Method: ](https://apidocs.io/img/method.png ".TranscriptionController.createTranscribeRecording") createTranscribeRecording

> Transcribe a recording by its RecordingSid.


```javascript
function createTranscribeRecording(recordingSid, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| recordingSid |  ``` Required ```  | The unique identifier for a recording object. |



#### Example Usage

```javascript

    var recordingSid = 'recordingSid';

    controller.createTranscribeRecording(recordingSid, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="conference_controller"></a>![Class: ](https://apidocs.io/img/class.png ".ConferenceController") ConferenceController

### Get singleton instance

The singleton instance of the ``` ConferenceController ``` class can be accessed from the API Client.

```javascript
var controller = lib.ConferenceController;
```

### <a name="create_list_conferences"></a>![Method: ](https://apidocs.io/img/method.png ".ConferenceController.createListConferences") createListConferences

> Retrieve a list of conference objects.


```javascript
function createListConferences(page, pagesize, friendlyName, dateCreated, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| page |  ``` Optional ```  | The page count to retrieve from the total results in the collection. Page indexing starts at 1. |
| pagesize |  ``` Optional ```  | Number of individual resources listed in the response per page |
| friendlyName |  ``` Optional ```  | Only return conferences with the specified FriendlyName |
| dateCreated |  ``` Optional ```  | Conference created date |



#### Example Usage

```javascript

    var page = 87;
    var pagesize = 87;
    var friendlyName = 'FriendlyName';
    var dateCreated = 'DateCreated';

    controller.createListConferences(page, pagesize, friendlyName, dateCreated, function(error, response, context) {

    
    });
```



### <a name="create_hangup_participant"></a>![Method: ](https://apidocs.io/img/method.png ".ConferenceController.createHangupParticipant") createHangupParticipant

> Remove a participant from a conference.


```javascript
function createHangupParticipant(participantSid, conferenceSid, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| participantSid |  ``` Required ```  | The unique identifier for a participant object. |
| conferenceSid |  ``` Required ```  | The unique identifier for a conference object. |



#### Example Usage

```javascript

    var participantSid = 'ParticipantSid';
    var conferenceSid = 'ConferenceSid';

    controller.createHangupParticipant(participantSid, conferenceSid, function(error, response, context) {

    
    });
```



### <a name="create_play_audio"></a>![Method: ](https://apidocs.io/img/method.png ".ConferenceController.createPlayAudio") createPlayAudio

> Play an audio file during a conference.


```javascript
function createPlayAudio(conferenceSid, participantSid, audioUrl, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| conferenceSid |  ``` Required ```  | The unique identifier for a conference object. |
| participantSid |  ``` Required ```  | The unique identifier for a participant object. |
| audioUrl |  ``` Required ```  | The URL for the audio file that is to be played during the conference. Multiple audio files can be chained by using a semicolon. |



#### Example Usage

```javascript

    var conferenceSid = 'ConferenceSid';
    var participantSid = 'ParticipantSid';
    var audioUrl = Object.keys(AudioUrl)[0];

    controller.createPlayAudio(conferenceSid, participantSid, audioUrl, function(error, response, context) {

    
    });
```



### <a name="create_list_participants"></a>![Method: ](https://apidocs.io/img/method.png ".ConferenceController.createListParticipants") createListParticipants

> Retrieve a list of participants for an in-progress conference.


```javascript
function createListParticipants(conferenceSid, page, pagesize, muted, deaf, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| conferenceSid |  ``` Required ```  | The unique identifier for a conference. |
| page |  ``` Optional ```  | The page count to retrieve from the total results in the collection. Page indexing starts at 1. |
| pagesize |  ``` Optional ```  | The count of objects to return per page. |
| muted |  ``` Optional ```  | Specifies if participant should be muted. |
| deaf |  ``` Optional ```  | Specifies if the participant should hear audio in the conference. |



#### Example Usage

```javascript

    var conferenceSid = 'ConferenceSid';
    var page = 178;
    var pagesize = 178;
    var muted = true;
    var deaf = true;

    controller.createListParticipants(conferenceSid, page, pagesize, muted, deaf, function(error, response, context) {

    
    });
```



### <a name="create_conference"></a>![Method: ](https://apidocs.io/img/method.png ".ConferenceController.createConference") createConference

> Here you can experiment with initiating a conference call through Ytel and view the request response generated when doing so.


```javascript
function createConference(url, from, to, method, statusCallBackUrl, statusCallBackMethod, fallbackUrl, fallbackMethod, record, recordCallBackUrl, recordCallBackMethod, scheduleTime, timeout, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| url |  ``` Required ```  | URL requested once the conference connects |
| from |  ``` Required ```  | A valid 10-digit number (E.164 format) that will be initiating the conference call. |
| to |  ``` Required ```  | A valid 10-digit number (E.164 format) that is to receive the conference call. |
| method |  ``` Optional ```  | Specifies the HTTP method used to request the required URL once call connects. |
| statusCallBackUrl |  ``` Optional ```  | URL that can be requested to receive notification when call has ended. A set of default parameters will be sent here once the conference is finished. |
| statusCallBackMethod |  ``` Optional ```  | Specifies the HTTP methodlinkclass used to request StatusCallbackUrl. |
| fallbackUrl |  ``` Optional ```  | URL requested if the initial Url parameter fails or encounters an error |
| fallbackMethod |  ``` Optional ```  | Specifies the HTTP method used to request the required FallbackUrl once call connects. |
| record |  ``` Optional ```  | Specifies if the conference should be recorded. |
| recordCallBackUrl |  ``` Optional ```  | Recording parameters will be sent here upon completion. |
| recordCallBackMethod |  ``` Optional ```  | Specifies the HTTP method used to request the required URL once conference connects. |
| scheduleTime |  ``` Optional ```  | Schedule conference in future. Schedule time must be greater than current time |
| timeout |  ``` Optional ```  | The number of seconds the call stays on the line while waiting for an answer. The max time limit is 999 and the default limit is 60 seconds but lower times can be set. |



#### Example Usage

```javascript

    var url = 'Url';
    var from = 'From';
    var to = 'To';
    var method = 'Method';
    var statusCallBackUrl = 'StatusCallBackUrl';
    var statusCallBackMethod = 'StatusCallBackMethod';
    var fallbackUrl = 'FallbackUrl';
    var fallbackMethod = 'FallbackMethod';
    var record = true;
    var recordCallBackUrl = 'RecordCallBackUrl';
    var recordCallBackMethod = 'RecordCallBackMethod';
    var scheduleTime = 'ScheduleTime';
    var timeout = 178;

    controller.createConference(url, from, to, method, statusCallBackUrl, statusCallBackMethod, fallbackUrl, fallbackMethod, record, recordCallBackUrl, recordCallBackMethod, scheduleTime, timeout, function(error, response, context) {

    
    });
```



### <a name="create_view_participant"></a>![Method: ](https://apidocs.io/img/method.png ".ConferenceController.createViewParticipant") createViewParticipant

> Retrieve information about a participant by its ParticipantSid.


```javascript
function createViewParticipant(conferenceSid, participantSid, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| conferenceSid |  ``` Required ```  | The unique identifier for a conference object. |
| participantSid |  ``` Required ```  | The unique identifier for a participant object. |



#### Example Usage

```javascript

    var conferenceSid = 'ConferenceSid';
    var participantSid = 'ParticipantSid';

    controller.createViewParticipant(conferenceSid, participantSid, function(error, response, context) {

    
    });
```



### <a name="create_view_conference"></a>![Method: ](https://apidocs.io/img/method.png ".ConferenceController.createViewConference") createViewConference

> Retrieve information about a conference by its ConferenceSid.


```javascript
function createViewConference(conferenceSid, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| conferenceSid |  ``` Required ```  | The unique identifier of each conference resource |



#### Example Usage

```javascript

    var conferenceSid = 'ConferenceSid';

    controller.createViewConference(conferenceSid, function(error, response, context) {

    
    });
```



### <a name="add_participant"></a>![Method: ](https://apidocs.io/img/method.png ".ConferenceController.addParticipant") addParticipant

> Add Participant in conference 


```javascript
function addParticipant(conferenceSid, participantNumber, muted, deaf, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| conferenceSid |  ``` Required ```  | The unique identifier for a conference object. |
| participantNumber |  ``` Required ```  | The phone number of the participant to be added. |
| muted |  ``` Optional ```  | Specifies if participant should be muted. |
| deaf |  ``` Optional ```  | Specifies if the participant should hear audio in the conference. |



#### Example Usage

```javascript

    var conferenceSid = 'ConferenceSid';
    var participantNumber = 'ParticipantNumber';
    var muted = true;
    var deaf = true;

    controller.addParticipant(conferenceSid, participantNumber, muted, deaf, function(error, response, context) {

    
    });
```



### <a name="create_silence_participant"></a>![Method: ](https://apidocs.io/img/method.png ".ConferenceController.createSilenceParticipant") createSilenceParticipant

> Deaf Mute Participant


```javascript
function createSilenceParticipant(conferenceSid, participantSid, muted, deaf, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| conferenceSid |  ``` Required ```  | ID of the active conference |
| participantSid |  ``` Required ```  | ID of an active participant |
| muted |  ``` Optional ```  | Mute a participant |
| deaf |  ``` Optional ```  | Make it so a participant cant hear |



#### Example Usage

```javascript

    var conferenceSid = 'conferenceSid';
    var participantSid = 'ParticipantSid';
    var muted = true;
    var deaf = true;

    controller.createSilenceParticipant(conferenceSid, participantSid, muted, deaf, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="phone_number_controller"></a>![Class: ](https://apidocs.io/img/class.png ".PhoneNumberController") PhoneNumberController

### Get singleton instance

The singleton instance of the ``` PhoneNumberController ``` class can be accessed from the API Client.

```javascript
var controller = lib.PhoneNumberController;
```

### <a name="create_bulk_buy_numbers"></a>![Method: ](https://apidocs.io/img/method.png ".PhoneNumberController.createBulkBuyNumbers") createBulkBuyNumbers

> Purchase a selected number of DID's from specific area codes to be used with your Ytel account.


```javascript
function createBulkBuyNumbers(numberType, areaCode, quantity, leftover, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| numberType |  ``` Required ```  | The capability the number supports. |
| areaCode |  ``` Required ```  | Specifies the area code for the returned list of available numbers. Only available for North American numbers. |
| quantity |  ``` Required ```  | A positive integer that tells how many number you want to buy at a time. |
| leftover |  ``` Optional ```  | If desired quantity is unavailable purchase what is available . |



#### Example Usage

```javascript

    var numberType = Object.keys(NumberType2)[0];
    var areaCode = 'AreaCode';
    var quantity = 'Quantity';
    var leftover = 'Leftover';

    controller.createBulkBuyNumbers(numberType, areaCode, quantity, leftover, function(error, response, context) {

    
    });
```



### <a name="create_bulk_update_numbers"></a>![Method: ](https://apidocs.io/img/method.png ".PhoneNumberController.createBulkUpdateNumbers") createBulkUpdateNumbers

> Update properties for a Ytel numbers that has been purchased for your account. Refer to the parameters list for the list of properties that can be updated.


```javascript
function createBulkUpdateNumbers(phoneNumber, voiceUrl, friendlyName, voiceMethod, voiceFallbackUrl, voiceFallbackMethod, hangupCallback, hangupCallbackMethod, heartbeatUrl, heartbeatMethod, smsUrl, smsMethod, smsFallbackUrl, smsFallbackMethod, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| phoneNumber |  ``` Required ```  | A valid comma(,) separated Ytel numbers. (E.164 format). |
| voiceUrl |  ``` Required ```  | The URL returning InboundXML incoming calls should execute when connected. |
| friendlyName |  ``` Optional ```  | A human-readable value for labeling the number. |
| voiceMethod |  ``` Optional ```  | Specifies the HTTP method used to request the VoiceUrl once incoming call connects. |
| voiceFallbackUrl |  ``` Optional ```  | URL used if any errors occur during execution of InboundXML on a call or at initial request of the voice url |
| voiceFallbackMethod |  ``` Optional ```  | Specifies the HTTP method used to request the VoiceFallbackUrl once incoming call connects. |
| hangupCallback |  ``` Optional ```  | URL that can be requested to receive notification when and how incoming call has ended. |
| hangupCallbackMethod |  ``` Optional ```  | The HTTP method Ytel will use when requesting the HangupCallback URL. |
| heartbeatUrl |  ``` Optional ```  | URL that can be used to monitor the phone number. |
| heartbeatMethod |  ``` Optional ```  | The HTTP method Ytel will use when requesting the HeartbeatUrl. |
| smsUrl |  ``` Optional ```  | URL requested when an SMS is received. |
| smsMethod |  ``` Optional ```  | The HTTP method Ytel will use when requesting the SmsUrl. |
| smsFallbackUrl |  ``` Optional ```  | URL used if any errors occur during execution of InboundXML from an SMS or at initial request of the SmsUrl. |
| smsFallbackMethod |  ``` Optional ```  | The HTTP method Ytel will use when URL requested if the SmsUrl is not available. |



#### Example Usage

```javascript

    var phoneNumber = 'PhoneNumber';
    var voiceUrl = 'VoiceUrl';
    var friendlyName = 'FriendlyName';
    var voiceMethod = 'VoiceMethod';
    var voiceFallbackUrl = 'VoiceFallbackUrl';
    var voiceFallbackMethod = 'VoiceFallbackMethod';
    var hangupCallback = 'HangupCallback';
    var hangupCallbackMethod = 'HangupCallbackMethod';
    var heartbeatUrl = 'HeartbeatUrl';
    var heartbeatMethod = 'HeartbeatMethod';
    var smsUrl = 'SmsUrl';
    var smsMethod = 'SmsMethod';
    var smsFallbackUrl = 'SmsFallbackUrl';
    var smsFallbackMethod = 'SmsFallbackMethod';

    controller.createBulkUpdateNumbers(phoneNumber, voiceUrl, friendlyName, voiceMethod, voiceFallbackUrl, voiceFallbackMethod, hangupCallback, hangupCallbackMethod, heartbeatUrl, heartbeatMethod, smsUrl, smsMethod, smsFallbackUrl, smsFallbackMethod, function(error, response, context) {

    
    });
```



### <a name="create_move_number"></a>![Method: ](https://apidocs.io/img/method.png ".PhoneNumberController.createMoveNumber") createMoveNumber

> Transfer phone number that has been purchased for from one account to another account.


```javascript
function createMoveNumber(phonenumber, fromaccountsid, toaccountsid, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| phonenumber |  ``` Required ```  | A valid 10-digit Ytel number (E.164 format). |
| fromaccountsid |  ``` Required ```  | A specific Accountsid from where Number is getting transfer. |
| toaccountsid |  ``` Required ```  | A specific Accountsid to which Number is getting transfer. |



#### Example Usage

```javascript

    var phonenumber = 'phonenumber';
    var fromaccountsid = 'fromaccountsid';
    var toaccountsid = 'toaccountsid';

    controller.createMoveNumber(phonenumber, fromaccountsid, toaccountsid, function(error, response, context) {

    
    });
```



### <a name="create_list_numbers"></a>![Method: ](https://apidocs.io/img/method.png ".PhoneNumberController.createListNumbers") createListNumbers

> Retrieve a list of purchased phones numbers associated with your Ytel account.


```javascript
function createListNumbers(page, pageSize, numberType, friendlyName, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| page |  ``` Optional ```  | Which page of the overall response will be returned. Page indexing starts at 1. |
| pageSize |  ``` Optional ```  | The page count to retrieve from the total results in the collection. Page indexing starts at 1. |
| numberType |  ``` Optional ```  | The capability supported by the number.Number type either SMS,Voice or all |
| friendlyName |  ``` Optional ```  | A human-readable label added to the number object. |



#### Example Usage

```javascript

    var page = 178;
    var pageSize = 178;
    var numberType = Object.keys(NumberType)[0];
    var friendlyName = 'FriendlyName';

    controller.createListNumbers(page, pageSize, numberType, friendlyName, function(error, response, context) {

    
    });
```



### <a name="update_number"></a>![Method: ](https://apidocs.io/img/method.png ".PhoneNumberController.updateNumber") updateNumber

> Update properties for a Ytel number that has been purchased for your account. Refer to the parameters list for the list of properties that can be updated.


```javascript
function updateNumber(phoneNumber, voiceUrl, friendlyName, voiceMethod, voiceFallbackUrl, voiceFallbackMethod, hangupCallback, hangupCallbackMethod, heartbeatUrl, heartbeatMethod, smsUrl, smsMethod, smsFallbackUrl, smsFallbackMethod, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| phoneNumber |  ``` Required ```  | A valid Ytel number (E.164 format). |
| voiceUrl |  ``` Required ```  | URL requested once the call connects |
| friendlyName |  ``` Optional ```  | Phone number friendly name description |
| voiceMethod |  ``` Optional ```  | Post or Get |
| voiceFallbackUrl |  ``` Optional ```  | URL requested if the voice URL is not available |
| voiceFallbackMethod |  ``` Optional ```  | Post or Get |
| hangupCallback |  ``` Optional ```  | callback url after a hangup occurs |
| hangupCallbackMethod |  ``` Optional ```  | Post or Get |
| heartbeatUrl |  ``` Optional ```  | URL requested once the call connects |
| heartbeatMethod |  ``` Optional ```  | URL that can be requested every 60 seconds during the call to notify of elapsed time |
| smsUrl |  ``` Optional ```  | URL requested when an SMS is received |
| smsMethod |  ``` Optional ```  | Post or Get |
| smsFallbackUrl |  ``` Optional ```  | URL used if any errors occur during execution of InboundXML from an SMS or at initial request of the SmsUrl. |
| smsFallbackMethod |  ``` Optional ```  | The HTTP method Ytel will use when URL requested if the SmsUrl is not available. |



#### Example Usage

```javascript

    var phoneNumber = 'PhoneNumber';
    var voiceUrl = 'VoiceUrl';
    var friendlyName = 'FriendlyName';
    var voiceMethod = 'VoiceMethod';
    var voiceFallbackUrl = 'VoiceFallbackUrl';
    var voiceFallbackMethod = 'VoiceFallbackMethod';
    var hangupCallback = 'HangupCallback';
    var hangupCallbackMethod = 'HangupCallbackMethod';
    var heartbeatUrl = 'HeartbeatUrl';
    var heartbeatMethod = 'HeartbeatMethod';
    var smsUrl = 'SmsUrl';
    var smsMethod = 'SmsMethod';
    var smsFallbackUrl = 'SmsFallbackUrl';
    var smsFallbackMethod = 'SmsFallbackMethod';

    controller.updateNumber(phoneNumber, voiceUrl, friendlyName, voiceMethod, voiceFallbackUrl, voiceFallbackMethod, hangupCallback, hangupCallbackMethod, heartbeatUrl, heartbeatMethod, smsUrl, smsMethod, smsFallbackUrl, smsFallbackMethod, function(error, response, context) {

    
    });
```



### <a name="create_view_details"></a>![Method: ](https://apidocs.io/img/method.png ".PhoneNumberController.createViewDetails") createViewDetails

> Retrieve the details for a phone number by its number.


```javascript
function createViewDetails(phoneNumber, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| phoneNumber |  ``` Required ```  | A valid 10-digit Ytel number (E.164 format). |



#### Example Usage

```javascript

    var phoneNumber = 'PhoneNumber';

    controller.createViewDetails(phoneNumber, function(error, response, context) {

    
    });
```



### <a name="create_release_number"></a>![Method: ](https://apidocs.io/img/method.png ".PhoneNumberController.createReleaseNumber") createReleaseNumber

> Remove a purchased Ytel number from your account.


```javascript
function createReleaseNumber(phoneNumber, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| phoneNumber |  ``` Required ```  | A valid Ytel 10-digit phone number (E.164 format). |



#### Example Usage

```javascript

    var phoneNumber = 'PhoneNumber';

    controller.createReleaseNumber(phoneNumber, function(error, response, context) {

    
    });
```



### <a name="create_purchase_number"></a>![Method: ](https://apidocs.io/img/method.png ".PhoneNumberController.createPurchaseNumber") createPurchaseNumber

> Purchase a phone number to be used with your Ytel account


```javascript
function createPurchaseNumber(phoneNumber, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| phoneNumber |  ``` Required ```  | A valid Ytel 10-digit phone number (E.164 format). |



#### Example Usage

```javascript

    var phoneNumber = 'PhoneNumber';

    controller.createPurchaseNumber(phoneNumber, function(error, response, context) {

    
    });
```



### <a name="create_get_did_score"></a>![Method: ](https://apidocs.io/img/method.png ".PhoneNumberController.createGetDIDScore") createGetDIDScore

> Get DID Score Number


```javascript
function createGetDIDScore(phonenumber, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| phonenumber |  ``` Required ```  | Specifies the multiple phone numbers for check updated spamscore . |



#### Example Usage

```javascript

    var phonenumber = 'Phonenumber';

    controller.createGetDIDScore(phonenumber, function(error, response, context) {

    
    });
```



### <a name="create_available_numbers"></a>![Method: ](https://apidocs.io/img/method.png ".PhoneNumberController.createAvailableNumbers") createAvailableNumbers

> Retrieve a list of available phone numbers that can be purchased and used for your Ytel account.


```javascript
function createAvailableNumbers(numbertype, areacode, pagesize, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| numbertype |  ``` Required ```  | Number type either SMS,Voice or all |
| areacode |  ``` Required ```  | Specifies the area code for the returned list of available numbers. Only available for North American numbers. |
| pagesize |  ``` Optional ```  | The count of objects to return. |



#### Example Usage

```javascript

    var numbertype = Object.keys(Numbertype1)[0];
    var areacode = 'areacode';
    var pagesize = 178;

    controller.createAvailableNumbers(numbertype, areacode, pagesize, function(error, response, context) {

    
    });
```



### <a name="create_bulk_release"></a>![Method: ](https://apidocs.io/img/method.png ".PhoneNumberController.createBulkRelease") createBulkRelease

> Remove a purchased Ytel number from your account.


```javascript
function createBulkRelease(phoneNumber, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| phoneNumber |  ``` Required ```  | A valid Ytel comma separated numbers (E.164 format). |



#### Example Usage

```javascript

    var phoneNumber = 'PhoneNumber';

    controller.createBulkRelease(phoneNumber, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="carrier_controller"></a>![Class: ](https://apidocs.io/img/class.png ".CarrierController") CarrierController

### Get singleton instance

The singleton instance of the ``` CarrierController ``` class can be accessed from the API Client.

```javascript
var controller = lib.CarrierController;
```

### <a name="create_lookup_carrier"></a>![Method: ](https://apidocs.io/img/method.png ".CarrierController.createLookupCarrier") createLookupCarrier

> Get the Carrier Lookup


```javascript
function createLookupCarrier(phoneNumber, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| phoneNumber |  ``` Required ```  | A valid 10-digit number (E.164 format). |



#### Example Usage

```javascript

    var phoneNumber = 'PhoneNumber';

    controller.createLookupCarrier(phoneNumber, function(error, response, context) {

    
    });
```



### <a name="create_carrier_results"></a>![Method: ](https://apidocs.io/img/method.png ".CarrierController.createCarrierResults") createCarrierResults

> Retrieve a list of carrier lookup objects.


```javascript
function createCarrierResults(page, pageSize, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| page |  ``` Optional ```  | The page count to retrieve from the total results in the collection. Page indexing starts at 1. |
| pageSize |  ``` Optional ```  | The count of objects to return per page. |



#### Example Usage

```javascript

    var page = 178;
    var pageSize = 178;

    controller.createCarrierResults(page, pageSize, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="dedicated_short_code_controller"></a>![Class: ](https://apidocs.io/img/class.png ".DedicatedShortCodeController") DedicatedShortCodeController

### Get singleton instance

The singleton instance of the ``` DedicatedShortCodeController ``` class can be accessed from the API Client.

```javascript
var controller = lib.DedicatedShortCodeController;
```

### <a name="update_shortcode"></a>![Method: ](https://apidocs.io/img/method.png ".DedicatedShortCodeController.updateShortcode") updateShortcode

> Update a dedicated shortcode.


```javascript
function updateShortcode(shortcode, friendlyName, callbackMethod, callbackUrl, fallbackMethod, fallbackUrl, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| shortcode |  ``` Required ```  | List of valid dedicated shortcode to your Ytel account. |
| friendlyName |  ``` Optional ```  | User generated name of the dedicated shortcode. |
| callbackMethod |  ``` Optional ```  | Specifies the HTTP method used to request the required StatusCallBackUrl once call connects. |
| callbackUrl |  ``` Optional ```  | URL that can be requested to receive notification when call has ended. A set of default parameters will be sent here once the call is finished. |
| fallbackMethod |  ``` Optional ```  | Specifies the HTTP method used to request the required FallbackUrl once call connects. |
| fallbackUrl |  ``` Optional ```  | URL used if any errors occur during execution of InboundXML or at initial request of the required Url provided with the POST. |



#### Example Usage

```javascript

    var shortcode = 'Shortcode';
    var friendlyName = 'FriendlyName';
    var callbackMethod = 'CallbackMethod';
    var callbackUrl = 'CallbackUrl';
    var fallbackMethod = 'FallbackMethod';
    var fallbackUrl = 'FallbackUrl';

    controller.updateShortcode(shortcode, friendlyName, callbackMethod, callbackUrl, fallbackMethod, fallbackUrl, function(error, response, context) {

    
    });
```



### <a name="create_list_shortcodes"></a>![Method: ](https://apidocs.io/img/method.png ".DedicatedShortCodeController.createListShortcodes") createListShortcodes

> Retrieve a list of Short Code assignment associated with your Ytel account.


```javascript
function createListShortcodes(shortcode, page, pagesize, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| shortcode |  ``` Optional ```  | Only list Short Code Assignment sent from this Short Code |
| page |  ``` Optional ```  | The page count to retrieve from the total results in the collection. Page indexing starts at 1. |
| pagesize |  ``` Optional ```  | The count of objects to return per page. |



#### Example Usage

```javascript

    var shortcode = 'Shortcode';
    var page = 'page';
    var pagesize = 'pagesize';

    controller.createListShortcodes(shortcode, page, pagesize, function(error, response, context) {

    
    });
```



### <a name="create_list_inbound_sms"></a>![Method: ](https://apidocs.io/img/method.png ".DedicatedShortCodeController.createListInboundSMS") createListInboundSMS

> Retrive a list of inbound Sms Short Code messages associated with your Ytel account.


```javascript
function createListInboundSMS(page, pagesize, from, shortcode, datecreated, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| page |  ``` Optional ```  | The page count to retrieve from the total results in the collection. Page indexing starts at 1. |
| pagesize |  ``` Optional ```  | Number of individual resources listed in the response per page |
| from |  ``` Optional ```  | Only list SMS messages sent from this number |
| shortcode |  ``` Optional ```  | Only list SMS messages sent to Shortcode |
| datecreated |  ``` Optional ```  | Only list SMS messages sent in the specified date MAKE REQUEST |



#### Example Usage

```javascript

    var page = 178;
    var pagesize = 178;
    var from = 'From';
    var shortcode = 'Shortcode';
    var datecreated = 'Datecreated';

    controller.createListInboundSMS(page, pagesize, from, shortcode, datecreated, function(error, response, context) {

    
    });
```



### <a name="create_view_sms"></a>![Method: ](https://apidocs.io/img/method.png ".DedicatedShortCodeController.createViewSMS") createViewSMS

> Retrieve a single Short Code object by its shortcode assignment.


```javascript
function createViewSMS(shortcode, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| shortcode |  ``` Required ```  | List of valid Dedicated Short Code to your Ytel account |



#### Example Usage

```javascript

    var shortcode = 'Shortcode';

    controller.createViewSMS(shortcode, function(error, response, context) {

    
    });
```



### <a name="create_list_sms"></a>![Method: ](https://apidocs.io/img/method.png ".DedicatedShortCodeController.createListSMS") createListSMS

> Retrieve a list of Short Code messages.


```javascript
function createListSMS(shortcode, to, dateSent, page, pageSize, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| shortcode |  ``` Optional ```  | Only list messages sent from this Short Code |
| to |  ``` Optional ```  | Only list messages sent to this number |
| dateSent |  ``` Optional ```  | Only list messages sent with the specified date |
| page |  ``` Optional ```  | The page count to retrieve from the total results in the collection. Page indexing starts at 1. |
| pageSize |  ``` Optional ```  | The count of objects to return per page. |



#### Example Usage

```javascript

    var shortcode = 'Shortcode';
    var to = 'To';
    var dateSent = 'DateSent';
    var page = 178;
    var pageSize = 178;

    controller.createListSMS(shortcode, to, dateSent, page, pageSize, function(error, response, context) {

    
    });
```



### <a name="create_send_sms"></a>![Method: ](https://apidocs.io/img/method.png ".DedicatedShortCodeController.createSendSMS") createSendSMS

> Send Dedicated Shortcode


```javascript
function createSendSMS(shortcode, to, body, method, messagestatuscallback, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| shortcode |  ``` Required ```  | Your dedicated shortcode |
| to |  ``` Required ```  | The number to send your SMS to |
| body |  ``` Required ```  | The body of your message |
| method |  ``` Optional ```  | Specifies the HTTP method used to request the required URL once the Short Code message is sent.GET or POST |
| messagestatuscallback |  ``` Optional ```  | URL that can be requested to receive notification when Short Code message was sent. |



#### Example Usage

```javascript

    var shortcode = 178;
    var to = 178.677623618244;
    var body = 'body';
    var method = 'method';
    var messagestatuscallback = 'messagestatuscallback';

    controller.createSendSMS(shortcode, to, body, method, messagestatuscallback, function(error, response, context) {

    
    });
```



### <a name="create_view_sms1"></a>![Method: ](https://apidocs.io/img/method.png ".DedicatedShortCodeController.createViewSMS1") createViewSMS1

> View a single Sms Short Code message.


```javascript
function createViewSMS1(messageSid, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| messageSid |  ``` Required ```  | The unique identifier for the sms resource |



#### Example Usage

```javascript

    var messageSid = 'MessageSid';

    controller.createViewSMS1(messageSid, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="shared_short_code_controller"></a>![Class: ](https://apidocs.io/img/class.png ".SharedShortCodeController") SharedShortCodeController

### Get singleton instance

The singleton instance of the ``` SharedShortCodeController ``` class can be accessed from the API Client.

```javascript
var controller = lib.SharedShortCodeController;
```

### <a name="create_list_shortcodes"></a>![Method: ](https://apidocs.io/img/method.png ".SharedShortCodeController.createListShortcodes") createListShortcodes

> Retrieve a list of shortcode assignment associated with your Ytel account.


```javascript
function createListShortcodes(shortcode, page, pagesize, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| shortcode |  ``` Optional ```  | Only list keywords of shortcode |
| page |  ``` Optional ```  | The page count to retrieve from the total results in the collection. Page indexing starts at 1. |
| pagesize |  ``` Optional ```  | Number of individual resources listed in the response per page |



#### Example Usage

```javascript

    var shortcode = 'Shortcode';
    var page = 178;
    var pagesize = 178;

    controller.createListShortcodes(shortcode, page, pagesize, function(error, response, context) {

    
    });
```



### <a name="update_shortcode"></a>![Method: ](https://apidocs.io/img/method.png ".SharedShortCodeController.updateShortcode") updateShortcode

> Update Assignment


```javascript
function updateShortcode(shortcode, friendlyName, callbackUrl, callbackMethod, fallbackUrl, fallbackUrlMethod, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| shortcode |  ``` Required ```  | List of valid shortcode to your Ytel account |
| friendlyName |  ``` Optional ```  | User generated name of the shortcode |
| callbackUrl |  ``` Optional ```  | URL that can be requested to receive notification when call has ended. A set of default parameters will be sent here once the call is finished. |
| callbackMethod |  ``` Optional ```  | Specifies the HTTP method used to request the required StatusCallBackUrl once call connects. |
| fallbackUrl |  ``` Optional ```  | URL used if any errors occur during execution of InboundXML or at initial request of the required Url provided with the POST. |
| fallbackUrlMethod |  ``` Optional ```  | Specifies the HTTP method used to request the required FallbackUrl once call connects. |



#### Example Usage

```javascript

    var shortcode = 'Shortcode';
    var friendlyName = 'FriendlyName';
    var callbackUrl = 'CallbackUrl';
    var callbackMethod = 'CallbackMethod';
    var fallbackUrl = 'FallbackUrl';
    var fallbackUrlMethod = 'FallbackUrlMethod';

    controller.updateShortcode(shortcode, friendlyName, callbackUrl, callbackMethod, fallbackUrl, fallbackUrlMethod, function(error, response, context) {

    
    });
```



### <a name="create_list_keywords"></a>![Method: ](https://apidocs.io/img/method.png ".SharedShortCodeController.createListKeywords") createListKeywords

> Retrieve a list of keywords associated with your Ytel account.


```javascript
function createListKeywords(page, pagesize, keyword, shortcode, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| page |  ``` Optional ```  | The page count to retrieve from the total results in the collection. Page indexing starts at 1. |
| pagesize |  ``` Optional ```  | Number of individual resources listed in the response per page |
| keyword |  ``` Optional ```  | Only list keywords of keyword |
| shortcode |  ``` Optional ```  | Only list keywords of shortcode |



#### Example Usage

```javascript

    var page = 178;
    var pagesize = 178;
    var keyword = 'Keyword';
    var shortcode = 178;

    controller.createListKeywords(page, pagesize, keyword, shortcode, function(error, response, context) {

    
    });
```



### <a name="create_view_shortcode"></a>![Method: ](https://apidocs.io/img/method.png ".SharedShortCodeController.createViewShortcode") createViewShortcode

> The response returned here contains all resource properties associated with the given Shortcode.


```javascript
function createViewShortcode(shortcode, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| shortcode |  ``` Required ```  | List of valid Shortcode to your Ytel account |



#### Example Usage

```javascript

    var shortcode = 'Shortcode';

    controller.createViewShortcode(shortcode, function(error, response, context) {

    
    });
```



### <a name="create_send_sms"></a>![Method: ](https://apidocs.io/img/method.png ".SharedShortCodeController.createSendSMS") createSendSMS

> Send an SMS from a Ytel ShortCode


```javascript
function createSendSMS(shortcode, to, templateid, data, method, messageStatusCallback, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| shortcode |  ``` Required ```  | The Short Code number that is the sender of this message |
| to |  ``` Required ```  | A valid 10-digit number that should receive the message |
| templateid |  ``` Required ```  | The unique identifier for the template used for the message |
| data |  ``` Required ```  | format of your data, example: {companyname}:test,{otpcode}:1234 |
| method |  ``` Optional ```  | Specifies the HTTP method used to request the required URL once the Short Code message is sent. |
| messageStatusCallback |  ``` Optional ```  | URL that can be requested to receive notification when Short Code message was sent. |



#### Example Usage

```javascript

    var shortcode = 'shortcode';
    var to = 'to';
    var templateid = uniqid();
    var data = 'data';
    var method = 'Method';
    var messageStatusCallback = 'MessageStatusCallback';

    controller.createSendSMS(shortcode, to, templateid, data, method, messageStatusCallback, function(error, response, context) {

    
    });
```



### <a name="create_list_templates"></a>![Method: ](https://apidocs.io/img/method.png ".SharedShortCodeController.createListTemplates") createListTemplates

> List Shortcode Templates by Type


```javascript
function createListTemplates(type, page, pagesize, shortcode, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| type |  ``` Optional ```  | The type (category) of template Valid values: marketing, authorization |
| page |  ``` Optional ```  | The page count to retrieve from the total results in the collection. Page indexing starts at 1. |
| pagesize |  ``` Optional ```  | The count of objects to return per page. |
| shortcode |  ``` Optional ```  | Only list templates of type |



#### Example Usage

```javascript

    var type = 'type';
    var page = 178;
    var pagesize = 178;
    var shortcode = 'Shortcode';

    controller.createListTemplates(type, page, pagesize, shortcode, function(error, response, context) {

    
    });
```



### <a name="create_view_template"></a>![Method: ](https://apidocs.io/img/method.png ".SharedShortCodeController.createViewTemplate") createViewTemplate

> View a Shared ShortCode Template


```javascript
function createViewTemplate(templateId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| templateId |  ``` Required ```  | The unique identifier for a template object |



#### Example Usage

```javascript

    var templateId = uniqid();

    controller.createViewTemplate(templateId, function(error, response, context) {

    
    });
```



### <a name="create_list_inbound_sms"></a>![Method: ](https://apidocs.io/img/method.png ".SharedShortCodeController.createListInboundSMS") createListInboundSMS

> List All Inbound ShortCode


```javascript
function createListInboundSMS(datecreated, page, pagesize, from, shortcode, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| datecreated |  ``` Optional ```  | Only list messages sent with the specified date |
| page |  ``` Optional ```  | The page count to retrieve from the total results in the collection. Page indexing starts at 1. |
| pagesize |  ``` Optional ```  | Number of individual resources listed in the response per page |
| from |  ``` Optional ```  | From Number to Inbound ShortCode |
| shortcode |  ``` Optional ```  | Only list messages sent to this Short Code |



#### Example Usage

```javascript

    var datecreated = 'Datecreated';
    var page = 178;
    var pagesize = 178;
    var from = 'from';
    var shortcode = 'Shortcode';

    controller.createListInboundSMS(datecreated, page, pagesize, from, shortcode, function(error, response, context) {

    
    });
```



### <a name="create_view_keyword"></a>![Method: ](https://apidocs.io/img/method.png ".SharedShortCodeController.createViewKeyword") createViewKeyword

> View a set of properties for a single keyword.


```javascript
function createViewKeyword(keywordid, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| keywordid |  ``` Required ```  | The unique identifier of each keyword |



#### Example Usage

```javascript

    var keywordid = 'Keywordid';

    controller.createViewKeyword(keywordid, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="sms_controller"></a>![Class: ](https://apidocs.io/img/class.png ".SMSController") SMSController

### Get singleton instance

The singleton instance of the ``` SMSController ``` class can be accessed from the API Client.

```javascript
var controller = lib.SMSController;
```

### <a name="create_list_sms"></a>![Method: ](https://apidocs.io/img/method.png ".SMSController.createListSMS") createListSMS

> Retrieve a list of Outbound SMS message objects.


```javascript
function createListSMS(page, pageSize, from, to, dateSent, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| page |  ``` Optional ```  | The page count to retrieve from the total results in the collection. Page indexing starts at 1. |
| pageSize |  ``` Optional ```  | Number of individual resources listed in the response per page |
| from |  ``` Optional ```  | Filter SMS message objects from this valid 10-digit phone number (E.164 format). |
| to |  ``` Optional ```  | Filter SMS message objects to this valid 10-digit phone number (E.164 format). |
| dateSent |  ``` Optional ```  | Only list SMS messages sent in the specified date range |



#### Example Usage

```javascript

    var page = 178;
    var pageSize = 178;
    var from = 'From';
    var to = 'To';
    var dateSent = 'DateSent';

    controller.createListSMS(page, pageSize, from, to, dateSent, function(error, response, context) {

    
    });
```



### <a name="create_list_inbound_sms"></a>![Method: ](https://apidocs.io/img/method.png ".SMSController.createListInboundSMS") createListInboundSMS

> Retrieve a list of Inbound SMS message objects.


```javascript
function createListInboundSMS(page, pageSize, from, to, dateSent, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| page |  ``` Optional ```  | The page count to retrieve from the total results in the collection. Page indexing starts at 1. |
| pageSize |  ``` Optional ```  | The count of objects to return per page. |
| from |  ``` Optional ```  | Filter SMS message objects from this valid 10-digit phone number (E.164 format). |
| to |  ``` Optional ```  | Filter SMS message objects to this valid 10-digit phone number (E.164 format). |
| dateSent |  ``` Optional ```  | Filter sms message objects by this date. |



#### Example Usage

```javascript

    var page = 178;
    var pageSize = 178;
    var from = 'From';
    var to = 'To';
    var dateSent = 'DateSent';

    controller.createListInboundSMS(page, pageSize, from, to, dateSent, function(error, response, context) {

    
    });
```



### <a name="create_send_sms"></a>![Method: ](https://apidocs.io/img/method.png ".SMSController.createSendSMS") createSendSMS

> Send an SMS from a Ytel number


```javascript
function createSendSMS(from, to, body, method, messageStatusCallback, smartsms, deliveryStatus, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| from |  ``` Required ```  | The 10-digit SMS-enabled Ytel number (E.164 format) in which the message is sent. |
| to |  ``` Required ```  | The 10-digit phone number (E.164 format) that will receive the message. |
| body |  ``` Required ```  | The body message that is to be sent in the text. |
| method |  ``` Optional ```  | Specifies the HTTP method used to request the required URL once SMS sent. |
| messageStatusCallback |  ``` Optional ```  | URL that can be requested to receive notification when SMS has Sent. A set of default parameters will be sent here once the SMS is finished. |
| smartsms |  ``` Optional ```  | Check's 'to' number can receive sms or not using Carrier API, if wireless = true then text sms is sent, else wireless = false then call is recieved to end user with audible message. |
| deliveryStatus |  ``` Optional ```  | Delivery reports are a method to tell your system if the message has arrived on the destination phone. |



#### Example Usage

```javascript

    var from = 'From';
    var to = 'To';
    var body = 'Body';
    var method = 'Method';
    var messageStatusCallback = 'MessageStatusCallback';
    var smartsms = true;
    var deliveryStatus = true;

    controller.createSendSMS(from, to, body, method, messageStatusCallback, smartsms, deliveryStatus, function(error, response, context) {

    
    });
```



### <a name="create_view_sms"></a>![Method: ](https://apidocs.io/img/method.png ".SMSController.createViewSMS") createViewSMS

> Retrieve a single SMS message object by its SmsSid.


```javascript
function createViewSMS(messageSid, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| messageSid |  ``` Required ```  | The unique identifier for a sms message. |



#### Example Usage

```javascript

    var messageSid = 'MessageSid';

    controller.createViewSMS(messageSid, function(error, response, context) {

    
    });
```



### <a name="create_view_sms_details"></a>![Method: ](https://apidocs.io/img/method.png ".SMSController.createViewSMSDetails") createViewSMSDetails

> Retrieve a single SMS message object with details by its SmsSid.


```javascript
function createViewSMSDetails(messageSid, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| messageSid |  ``` Required ```  | The unique identifier for a sms message. |



#### Example Usage

```javascript

    var messageSid = 'MessageSid';

    controller.createViewSMSDetails(messageSid, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="voice_controller"></a>![Class: ](https://apidocs.io/img/class.png ".VoiceController") VoiceController

### Get singleton instance

The singleton instance of the ``` VoiceController ``` class can be accessed from the API Client.

```javascript
var controller = lib.VoiceController;
```

### <a name="create_send_rvm"></a>![Method: ](https://apidocs.io/img/method.png ".VoiceController.createSendRVM") createSendRVM

> Initiate an outbound Ringless Voicemail through Ytel.


```javascript
function createSendRVM(from, rVMCallerId, to, voiceMailURL, method, statusCallBackUrl, statsCallBackMethod, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| from |  ``` Required ```  | A valid Ytel Voice enabled number (E.164 format) that will be initiating the phone call. |
| rVMCallerId |  ``` Required ```  | A required secondary Caller ID for RVM to work. |
| to |  ``` Required ```  | A valid number (E.164 format) that will receive the phone call. |
| voiceMailURL |  ``` Required ```  | The URL requested once the RVM connects. A set of default parameters will be sent here. |
| method |  ``` Optional ```  | Specifies the HTTP method used to request the required URL once call connects. |
| statusCallBackUrl |  ``` Optional ```  | URL that can be requested to receive notification when call has ended. A set of default parameters will be sent here once the call is finished. |
| statsCallBackMethod |  ``` Optional ```  | Specifies the HTTP method used to request the required StatusCallBackUrl once call connects. |



#### Example Usage

```javascript

    var from = 'From';
    var rVMCallerId = 'RVMCallerId';
    var to = 'To';
    var voiceMailURL = 'VoiceMailURL';
    var method = 'Method';
    var statusCallBackUrl = 'StatusCallBackUrl';
    var statsCallBackMethod = 'StatsCallBackMethod';

    controller.createSendRVM(from, rVMCallerId, to, voiceMailURL, method, statusCallBackUrl, statsCallBackMethod, function(error, response, context) {

    
    });
```



### <a name="create_view_call"></a>![Method: ](https://apidocs.io/img/method.png ".VoiceController.createViewCall") createViewCall

> Retrieve a single voice call’s information by its CallSid.


```javascript
function createViewCall(callsid, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| callsid |  ``` Required ```  | The unique identifier for the voice call. |



#### Example Usage

```javascript

    var callsid = 'callsid';

    controller.createViewCall(callsid, function(error, response, context) {

    
    });
```



### <a name="create_view_call_details"></a>![Method: ](https://apidocs.io/img/method.png ".VoiceController.createViewCallDetails") createViewCallDetails

> Retrieve a single voice call’s information by its CallSid.


```javascript
function createViewCallDetails(callSid, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| callSid |  ``` Required ```  | The unique identifier for the voice call. |



#### Example Usage

```javascript

    var callSid = 'callSid';

    controller.createViewCallDetails(callSid, function(error, response, context) {

    
    });
```



### <a name="create_interrupt_call"></a>![Method: ](https://apidocs.io/img/method.png ".VoiceController.createInterruptCall") createInterruptCall

> Interrupt the Call by Call Sid


```javascript
function createInterruptCall(callSid, url, method, status, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| callSid |  ``` Required ```  | The unique identifier for voice call that is in progress. |
| url |  ``` Optional ```  | URL the in-progress call will be redirected to |
| method |  ``` Optional ```  | The method used to request the above Url parameter |
| status |  ``` Optional ```  | Status to set the in-progress call to |



#### Example Usage

```javascript

    var callSid = 'CallSid';
    var url = 'Url';
    var method = 'Method';
    var status = Object.keys(Status1)[0];

    controller.createInterruptCall(callSid, url, method, status, function(error, response, context) {

    
    });
```



### <a name="create_list_calls"></a>![Method: ](https://apidocs.io/img/method.png ".VoiceController.createListCalls") createListCalls

> A list of calls associated with your Ytel account


```javascript
function createListCalls(page, pageSize, to, from, dateCreated, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| page |  ``` Optional ```  | The page count to retrieve from the total results in the collection. Page indexing starts at 1. |
| pageSize |  ``` Optional ```  | Number of individual resources listed in the response per page |
| to |  ``` Optional ```  | Filter calls that were sent to this 10-digit number (E.164 format). |
| from |  ``` Optional ```  | Filter calls that were sent from this 10-digit number (E.164 format). |
| dateCreated |  ``` Optional ```  | Return calls that are from a specified date. |



#### Example Usage

```javascript

    var page = 178;
    var pageSize = 178;
    var to = 'To';
    var from = 'From';
    var dateCreated = 'DateCreated';

    controller.createListCalls(page, pageSize, to, from, dateCreated, function(error, response, context) {

    
    });
```



### <a name="create_voice_effect"></a>![Method: ](https://apidocs.io/img/method.png ".VoiceController.createVoiceEffect") createVoiceEffect

> Add audio voice effects to the an in-progress voice call.


```javascript
function createVoiceEffect(callSid, audioDirection, pitchSemiTones, pitchOctaves, pitch, rate, tempo, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| callSid |  ``` Required ```  | The unique identifier for the in-progress voice call. |
| audioDirection |  ``` Optional ```  | The direction the audio effect should be placed on. If IN, the effects will occur on the incoming audio stream. If OUT, the effects will occur on the outgoing audio stream. |
| pitchSemiTones |  ``` Optional ```  | Set the pitch in semitone (half-step) intervals. Value between -14 and 14 |
| pitchOctaves |  ``` Optional ```  | Set the pitch in octave intervals.. Value between -1 and 1 |
| pitch |  ``` Optional ```  | Set the pitch (lowness/highness) of the audio. The higher the value, the higher the pitch. Value greater than 0 |
| rate |  ``` Optional ```  | Set the rate for audio. The lower the value, the lower the rate. value greater than 0 |
| tempo |  ``` Optional ```  | Set the tempo (speed) of the audio. A higher value denotes a faster tempo. Value greater than 0 |



#### Example Usage

```javascript

    var callSid = 'CallSid';
    var audioDirection = Object.keys(AudioDirection)[0];
    var pitchSemiTones = 178.677623618244;
    var pitchOctaves = 178.677623618244;
    var pitch = 178.677623618244;
    var rate = 178.677623618244;
    var tempo = 178.677623618244;

    controller.createVoiceEffect(callSid, audioDirection, pitchSemiTones, pitchOctaves, pitch, rate, tempo, function(error, response, context) {

    
    });
```



### <a name="create_play_audio"></a>![Method: ](https://apidocs.io/img/method.png ".VoiceController.createPlayAudio") createPlayAudio

> Play Audio from a url


```javascript
function createPlayAudio(callSid, audioUrl, sayText, length, direction, mix, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| callSid |  ``` Required ```  | The unique identifier of each call resource |
| audioUrl |  ``` Required ```  | URL to sound that should be played. You also can add more than one audio file using semicolons e.g. http://example.com/audio1.mp3;http://example.com/audio2.wav |
| sayText |  ``` Required ```  | Valid alphanumeric string that should be played to the In-progress call. |
| length |  ``` Optional ```  | Time limit in seconds for audio play back |
| direction |  ``` Optional ```  | The leg of the call audio will be played to |
| mix |  ``` Optional ```  | If false, all other audio will be muted |



#### Example Usage

```javascript

    var callSid = 'CallSid';
    var audioUrl = 'AudioUrl';
    var sayText = 'SayText';
    var length = 178;
    var direction = Object.keys(Direction1)[0];
    var mix = true;

    controller.createPlayAudio(callSid, audioUrl, sayText, length, direction, mix, function(error, response, context) {

    
    });
```



### <a name="create_record_call"></a>![Method: ](https://apidocs.io/img/method.png ".VoiceController.createRecordCall") createRecordCall

> Start or stop recording of an in-progress voice call.


```javascript
function createRecordCall(callSid, record, direction, timeLimit, callBackUrl, fileformat, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| callSid |  ``` Required ```  | The unique identifier of each call resource |
| record |  ``` Required ```  | Set true to initiate recording or false to terminate recording |
| direction |  ``` Optional ```  | The leg of the call to record |
| timeLimit |  ``` Optional ```  | Time in seconds the recording duration should not exceed |
| callBackUrl |  ``` Optional ```  | URL consulted after the recording completes |
| fileformat |  ``` Optional ```  | Format of the recording file. Can be .mp3 or .wav |



#### Example Usage

```javascript

    var callSid = 'CallSid';
    var record = true;
    var direction = Object.keys(Direction)[0];
    var timeLimit = 178;
    var callBackUrl = 'CallBackUrl';
    var fileformat = Object.keys(Fileformat)[0];

    controller.createRecordCall(callSid, record, direction, timeLimit, callBackUrl, fileformat, function(error, response, context) {

    
    });
```



### <a name="create_play_dtmf"></a>![Method: ](https://apidocs.io/img/method.png ".VoiceController.createPlayDTMF") createPlayDTMF

> Play Dtmf and send the Digit


```javascript
function createPlayDTMF(callSid, playDtmf, playDtmfDirection, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| callSid |  ``` Required ```  | The unique identifier of each call resource |
| playDtmf |  ``` Required ```  | DTMF digits to play to the call. 0-9, #, *, W, or w |
| playDtmfDirection |  ``` Optional ```  | The leg of the call DTMF digits should be sent to |



#### Example Usage

```javascript

    var callSid = 'CallSid';
    var playDtmf = 'PlayDtmf';
    var playDtmfDirection = Object.keys(PlayDtmfDirection)[0];

    controller.createPlayDTMF(callSid, playDtmf, playDtmfDirection, function(error, response, context) {

    
    });
```



### <a name="create_group_call"></a>![Method: ](https://apidocs.io/img/method.png ".VoiceController.createGroupCall") createGroupCall

> You can experiment with initiating a call through Ytel and view the request response generated when doing so and get the response in json


```javascript
function createGroupCall(from, to, url, groupConfirmKey, groupConfirmFile, method, statusCallBackUrl, statusCallBackMethod, fallBackUrl, fallBackMethod, heartBeatUrl, heartBeatMethod, timeout, playDtmf, hideCallerId, record, recordCallBackUrl, recordCallBackMethod, transcribe, transcribeCallBackUrl, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| from |  ``` Required ```  | A valid Ytel Voice enabled number (E.164 format) that will be initiating the phone call. |
| to |  ``` Required ```  | Please enter multiple E164 number. You can add max 10 numbers. Add numbers separated with comma. e.g : +12223334444,+15556667777 |
| url |  ``` Required ```  | URL requested once the call connects |
| groupConfirmKey |  ``` Required ```  | Define the DTMF that the called party should send to bridge the call. Allowed Values : 0-9, #, * |
| groupConfirmFile |  ``` Required ```  | Specify the audio file you want to play when the called party picks up the call |
| method |  ``` Optional ```  | Specifies the HTTP method used to request the required URL once call connects. |
| statusCallBackUrl |  ``` Optional ```  | URL that can be requested to receive notification when call has ended. A set of default parameters will be sent here once the call is finished. |
| statusCallBackMethod |  ``` Optional ```  | Specifies the HTTP methodlinkclass used to request StatusCallbackUrl. |
| fallBackUrl |  ``` Optional ```  | URL requested if the initial Url parameter fails or encounters an error |
| fallBackMethod |  ``` Optional ```  | Specifies the HTTP method used to request the required FallbackUrl once call connects. |
| heartBeatUrl |  ``` Optional ```  | URL that can be requested every 60 seconds during the call to notify of elapsed time and pass other general information. |
| heartBeatMethod |  ``` Optional ```  | Specifies the HTTP method used to request HeartbeatUrl. |
| timeout |  ``` Optional ```  | Time (in seconds) we should wait while the call is ringing before canceling the call |
| playDtmf |  ``` Optional ```  | DTMF Digits to play to the call once it connects. 0-9, #, or * |
| hideCallerId |  ``` Optional ```  | Specifies if the caller id will be hidden |
| record |  ``` Optional ```  | Specifies if the call should be recorded |
| recordCallBackUrl |  ``` Optional ```  | Recording parameters will be sent here upon completion |
| recordCallBackMethod |  ``` Optional ```  | Method used to request the RecordCallback URL. |
| transcribe |  ``` Optional ```  | Specifies if the call recording should be transcribed |
| transcribeCallBackUrl |  ``` Optional ```  | Transcription parameters will be sent here upon completion |



#### Example Usage

```javascript

    var from = 'From';
    var to = 'To';
    var url = 'Url';
    var groupConfirmKey = 'GroupConfirmKey';
    var groupConfirmFile = Object.keys(GroupConfirmFile)[0];
    var method = 'Method';
    var statusCallBackUrl = 'StatusCallBackUrl';
    var statusCallBackMethod = 'StatusCallBackMethod';
    var fallBackUrl = 'FallBackUrl';
    var fallBackMethod = 'FallBackMethod';
    var heartBeatUrl = 'HeartBeatUrl';
    var heartBeatMethod = 'HeartBeatMethod';
    var timeout = 178;
    var playDtmf = 'PlayDtmf';
    var hideCallerId = 'HideCallerId';
    var record = true;
    var recordCallBackUrl = 'RecordCallBackUrl';
    var recordCallBackMethod = 'RecordCallBackMethod';
    var transcribe = true;
    var transcribeCallBackUrl = 'TranscribeCallBackUrl';

    controller.createGroupCall(from, to, url, groupConfirmKey, groupConfirmFile, method, statusCallBackUrl, statusCallBackMethod, fallBackUrl, fallBackMethod, heartBeatUrl, heartBeatMethod, timeout, playDtmf, hideCallerId, record, recordCallBackUrl, recordCallBackMethod, transcribe, transcribeCallBackUrl, function(error, response, context) {

    
    });
```



### <a name="create_make_call"></a>![Method: ](https://apidocs.io/img/method.png ".VoiceController.createMakeCall") createMakeCall

> You can experiment with initiating a call through Ytel and view the request response generated when doing so and get the response in json


```javascript
function createMakeCall(from, to, url, method, statusCallBackUrl, statusCallBackMethod, fallBackUrl, fallBackMethod, heartBeatUrl, heartBeatMethod, timeout, playDtmf, hideCallerId, record, recordCallBackUrl, recordCallBackMethod, transcribe, transcribeCallBackUrl, ifMachine, ifMachineUrl, ifMachineMethod, feedback, surveyId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| from |  ``` Required ```  | A valid Ytel Voice enabled number (E.164 format) that will be initiating the phone call. |
| to |  ``` Required ```  | To number |
| url |  ``` Required ```  | URL requested once the call connects |
| method |  ``` Optional ```  | Specifies the HTTP method used to request the required URL once call connects. |
| statusCallBackUrl |  ``` Optional ```  | URL that can be requested to receive notification when call has ended. A set of default parameters will be sent here once the call is finished. |
| statusCallBackMethod |  ``` Optional ```  | Specifies the HTTP methodlinkclass used to request StatusCallbackUrl. |
| fallBackUrl |  ``` Optional ```  | URL requested if the initial Url parameter fails or encounters an error |
| fallBackMethod |  ``` Optional ```  | Specifies the HTTP method used to request the required FallbackUrl once call connects. |
| heartBeatUrl |  ``` Optional ```  | URL that can be requested every 60 seconds during the call to notify of elapsed tim |
| heartBeatMethod |  ``` Optional ```  | Specifies the HTTP method used to request HeartbeatUrl. |
| timeout |  ``` Optional ```  | Time (in seconds) Ytel should wait while the call is ringing before canceling the call |
| playDtmf |  ``` Optional ```  | DTMF Digits to play to the call once it connects. 0-9, #, or * |
| hideCallerId |  ``` Optional ```  | Specifies if the caller id will be hidden |
| record |  ``` Optional ```  | Specifies if the call should be recorded |
| recordCallBackUrl |  ``` Optional ```  | Recording parameters will be sent here upon completion |
| recordCallBackMethod |  ``` Optional ```  | Method used to request the RecordCallback URL. |
| transcribe |  ``` Optional ```  | Specifies if the call recording should be transcribed |
| transcribeCallBackUrl |  ``` Optional ```  | Transcription parameters will be sent here upon completion |
| ifMachine |  ``` Optional ```  | How Ytel should handle the receiving numbers voicemail machine |
| ifMachineUrl |  ``` Optional ```  | URL requested when IfMachine=continue |
| ifMachineMethod |  ``` Optional ```  | Method used to request the IfMachineUrl. |
| feedback |  ``` Optional ```  | Specify if survey should be enable or not |
| surveyId |  ``` Optional ```  | The unique identifier for the survey. |



#### Example Usage

```javascript

    var from = 'From';
    var to = 'To';
    var url = 'Url';
    var method = 'Method';
    var statusCallBackUrl = 'StatusCallBackUrl';
    var statusCallBackMethod = 'StatusCallBackMethod';
    var fallBackUrl = 'FallBackUrl';
    var fallBackMethod = 'FallBackMethod';
    var heartBeatUrl = 'HeartBeatUrl';
    var heartBeatMethod = 'HeartBeatMethod';
    var timeout = 136;
    var playDtmf = 'PlayDtmf';
    var hideCallerId = true;
    var record = true;
    var recordCallBackUrl = 'RecordCallBackUrl';
    var recordCallBackMethod = 'RecordCallBackMethod';
    var transcribe = true;
    var transcribeCallBackUrl = 'TranscribeCallBackUrl';
    var ifMachine = Object.keys(IfMachine)[0];
    var ifMachineUrl = 'IfMachineUrl';
    var ifMachineMethod = 'IfMachineMethod';
    var feedback = true;
    var surveyId = 'SurveyId';

    controller.createMakeCall(from, to, url, method, statusCallBackUrl, statusCallBackMethod, fallBackUrl, fallBackMethod, heartBeatUrl, heartBeatMethod, timeout, playDtmf, hideCallerId, record, recordCallBackUrl, recordCallBackMethod, transcribe, transcribeCallBackUrl, ifMachine, ifMachineUrl, ifMachineMethod, feedback, surveyId, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)



