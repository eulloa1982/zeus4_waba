const { nextTick } = require("process");
const axios = require("axios");

// Send WhatsApp Template Message
// hello_world
exports.sendTemplateMessage = async(to, template_name, language, from) => {
    // Default options are marked with *
    dataSend = { "messaging_product": "whatsapp", "recipient_type": "individual", 
                "to": to, "type": "template", 
                "template": { "name": `${template_name}`, "language": { "code": `${language}` } },
                "components": [{ "type": "body",
                                "parameters": [
                                    {"type": "text", "text": "text-string"},  
                                    {"type": "currency", "currency": {"fallback_value": "$100.99", "code": "USD", "amount_1000": 100990 }}
                                ]
                            }]
            };
    const response = await axios({
                method: 'POST', // *GET, POST, PUT, DELETE, etc. 100698539410392
                url: `https://graph.facebook.com/v12.0/${from}/messages`, 
                //mode: 'cors', // no-cors, *cors, same-origin
                //cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                credentials: 'same-origin', // include, *same-origin, omit
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer EAAFcYhQbgP8BAPEP24ahzZBZBua3PcVZBlANNEWWvARyuZB6huYnOODNgc3C5H06bMDf5btuZBrQZCzbNrEzgTUGgQZAVicNZAsGEruea2IQi0XNB13QVbGo60srjEkDsJDHJZAQBFs01r1i4iO84ZCfqqSKCZAwQLfP1JaDGEk6zv3CJP7rr5T6fPZCIYw74saYVixeopWwoZC1xF7ri9g89ITR7',
                // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                data: JSON.stringify(dataSend)
    })
    .then(data => {
        return (JSON.stringify(dataSend))
    })
    
};

/**
 * send a normal whatsapp text message 
 * @param {string} to number destination
 * @param {string} message text message
 * @param {string} from WABA Number ID
 * @param {object} context array(message_id: number) - if is a text reply message
 * 
*/
exports.sendTextMessage = async(to, message, from, context = null) => {
    // Default options are marked with *
    dataSend = {}
    dataSend.messaging_product = "whatsapp";
    dataSend.recipient_type = "individual";
    dataSend.to = to;
    dataSend.type = "text";
    dataSend.text = {'preview_url': false, 'body': message ? message : ''};
    if (context)
        dataSend.context = context;
    
    const response = await axios({
                method: 'POST', // *GET, POST, PUT, DELETE, etc. 100698539410392
                url: `https://graph.facebook.com/v12.0/${from}/messages`, 
                //mode: 'cors', // no-cors, *cors, same-origin
                //cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                credentials: 'same-origin', // include, *same-origin, omit
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer EAAFcYhQbgP8BAPEP24ahzZBZBua3PcVZBlANNEWWvARyuZB6huYnOODNgc3C5H06bMDf5btuZBrQZCzbNrEzgTUGgQZAVicNZAsGEruea2IQi0XNB13QVbGo60srjEkDsJDHJZAQBFs01r1i4iO84ZCfqqSKCZAwQLfP1JaDGEk6zv3CJP7rr5T6fPZCIYw74saYVixeopWwoZC1xF7ri9g89ITR7',
                // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                data: JSON.stringify(dataSend)
    })
    .then(data => {
        return (JSON.stringify(dataSend))
    })
    
};

/**
 * Get WhatsApp templates
 * @param {string} from numeric waba id 
 */
exports.getMessagesTemplates = async(from) => {
    const response = await axios({
                method: 'GET', // *GET, POST, PUT, DELETE, etc. 100698539410392
                url: `https://graph.facebook.com/v12.0/${from}/message_templates`, 
                credentials: 'same-origin', // include, *same-origin, omit
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer EAAFcYhQbgP8BAPEP24ahzZBZBua3PcVZBlANNEWWvARyuZB6huYnOODNgc3C5H06bMDf5btuZBrQZCzbNrEzgTUGgQZAVicNZAsGEruea2IQi0XNB13QVbGo60srjEkDsJDHJZAQBFs01r1i4iO84ZCfqqSKCZAwQLfP1JaDGEk6zv3CJP7rr5T6fPZCIYw74saYVixeopWwoZC1xF7ri9g89ITR7',
                },
    })
    .then(data => {
        return (JSON.stringify(data))
    })
    
};


/**
 * Create WhatsApp Text Template
 * @param {string} template_name 
 * @param {string} language 
 * @param {string} category 
 * @param {string} template_text 
 * @param {string} waba_id (numeric)
 */
exports.createTextTemplate = async(template_name, language, category, template_text, waba_id) => {
    // Default options are marked with *
    dataSend = { "name": template_name, "language": language, "category": category, "components": [{ "type": "BODY", "text": template_text }] };
    const response = await axios({
                method: 'POST', // *GET, POST, PUT, DELETE, etc. 100698539410392
                url: `https://graph.facebook.com/v12.0/${waba_id}/message_templates`, 
                credentials: 'same-origin', // include, *same-origin, omit
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer EAAFcYhQbgP8BAPEP24ahzZBZBua3PcVZBlANNEWWvARyuZB6huYnOODNgc3C5H06bMDf5btuZBrQZCzbNrEzgTUGgQZAVicNZAsGEruea2IQi0XNB13QVbGo60srjEkDsJDHJZAQBFs01r1i4iO84ZCfqqSKCZAwQLfP1JaDGEk6zv3CJP7rr5T6fPZCIYw74saYVixeopWwoZC1xF7ri9g89ITR7',
                },
                data: JSON.stringify(dataSend)
    })
    .then(data => {
        return (JSON.stringify(dataSend))
    })
    
};

