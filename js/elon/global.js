
var WHITE_SPACE = ' ';

var STORE_NAME_OAUTH_CLIENT_OBJECT = '';
var STORE_NAME_OAUTH_CLIENT_NAME = '';
var STORE_NAME_OAUTH_CLIENT_CID = '';
var STORE_NAME_OAUTH_CLIENT_SECRET = '';
var STORE_NAME_OAUTH_CLIENT_GRANT_TYPES = '';
var STORE_NAME_OAUTH_CLIENT_REDIRECT_URLS = '';

var STORE_NAME_API_ACCESS_OBJECT = '';
var STORE_NAME_API_ACCESS_TOKEN = '';
var STORE_NAME_API_ACCESS_REFRESH_TOKEN = '';
var STORE_NAME_API_ACCESS_TOKEN_TYPE = '';
var STORE_NAME_API_ACCESS_EXPIRY = '';
var STORE_NAME_API_ACCESS_SCOPE = '';

var CONTENT_TYPE_APPLICATION_DEFAULT = 'application/x-www-form-urlencoded';
var CONTENT_TYPE_APPLICATION = 'application/json';
var CONTENT_TYPE_TEXT = 'text/json';
var ACCEPT_TYPE_APPLICATION = 'application/json';
var ACCEPT_TYPE_TEXT = 'text/json';
var DATA_TYPE = 'json';

var AUTHORIZATION_BASIC = "Basic";
var AUTHORIZATION_BEARER = "Bearer";

//
// Define your database
//
localforage.config({
    driver      : localforage.WEBSQL, // Force WebSQL; same as using setDriver()
    name        : 'elon',
    version     : 1.0,
    size        : 104857600, // Size of database, in bytes. WebSQL-only for now.
    storeName   : 'storage', // Should be alphanumeric, with underscores.
    description : 'some description'
});
var store = localforage.createInstance({
    name: "storageInstance"
});