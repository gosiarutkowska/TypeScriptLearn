"use strict";
// we have only two situations with type never:
// - throw error
// - never ending loop, without any return
var showError = function (msg) {
    throw new Error(msg);
};
var showErrors = function () {
    while (1 == 1) {
        console.log('error');
    }
};
// even if function is type of void, returns 'undifined' not never
var showLog = function () {
    console.log('text');
};
