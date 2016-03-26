import * as emailSignatureParser from './emailSignatureParser.js';

export default (function() {

    'use strict';

    let extractSignature = emailSignatureParser.extractSignature;

    /**
    * Emails often come with copies of old emails from earlier in the thread
    * We don't want to process the old emails when we're analysing as we'll have a false positive otherwise
    **/
    function removeQuotedTextFromEmail (emailContents, extractTitle) {
        let strippedHTML = stripHTML(emailContents, extractTitle);
        let processedEmail = extractSignature(strippedHTML).text || emailContents;

        return processedEmail;
    }

    function stripHTML(message, extractTitle) {
        let titleMessage = message.replace(/<br(.)*>/g, '\n').replace(/<(.)*>/g, '');
        if(message.match(/(<div dir="ltr">([A-z\s?]+)<\/div>)+/)){
            if(extractTitle){
                titleMessage = message.match(/(<div dir="ltr">([A-z\s?]+)<\/div>)+/)[1].replace(/^<div[^>]*>|<\/div>$/g, '');
            } else {
                let matches = message.match(/((<div dir="ltr">([A-z\s?\.]+)<\/div>))+/g)
                for (let i = 0; i < matches.length; i++){
                    titleMessage += matches[i].replace(/^<div[^>]*>|<\/div>$/g, '') + "\n";
                }
            }
        }

        return titleMessage
    }

    return {
        removeQuotedTextFromEmail
    }

})();
