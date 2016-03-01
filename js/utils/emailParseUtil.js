import * as emailSignatureParser from './emailSignatureParser.js';

export default (function() {

    'use strict';

    let extractSignature = emailSignatureParser.extractSignature;

    /**
    * Emails often come with copies of old emails from earlier in the thread
    * We don't want to process the old emails when we're analysing as we'll have a false positive otherwise
    **/             
    function removeQuotedTextFromEmail (emailContents) {
        let strippedHTML = stripHTML(emailContents);
        let processedEmail = extractSignature(strippedHTML).text || emailContents;

        return processedEmail;
    }

    function stripHTML(message) {
        return message.replace(/<br(.)*>/g, '\n').replace(/<(.)*>/g, '');
    }

    return {
        removeQuotedTextFromEmail
    }

})();

