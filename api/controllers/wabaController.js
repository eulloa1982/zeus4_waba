const { nextTick } = require("process");
const axios = require("axios");
// Send WhatsApp Template Message
// hello_world
exports.sendTemplateMessage = async(to, template_name, language) => {
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
                url: `https://graph.facebook.com/v12.0/100698539410392/messages`, 
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

/**send a normal whatsapp message */
exports.sendMessage = async(to, message) => {
    // Default options are marked with *
    dataSend = { "messaging_product": "whatsapp", "recipient_type": "individual", 
                "to": to, "type": "text", 
                "text": {
                    "preview_url": false,
                    "body": message
                }} ;
    const response = await axios({
                method: 'POST', // *GET, POST, PUT, DELETE, etc. 100698539410392
                url: `https://graph.facebook.com/v12.0/100698539410392/messages`, 
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


/**get templates in whatsapp */
exports.getMessagesTemplates = async() => {
    const response = await axios({
                method: 'GET', // *GET, POST, PUT, DELETE, etc. 100698539410392
                url: `https://graph.facebook.com/v12.0/100698539410392/message_templates`, 
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




// Create a Text Template to WhastApp
exports.createTextTemplate = async(template_name, language, category, template_text) => {
    // Default options are marked with *
    dataSend = { "name": template_name, "language": language, "category": category, "components": [{ "type": "BODY", "text": template_text }] };
    const response = await axios({
                method: 'POST', // *GET, POST, PUT, DELETE, etc. 100698539410392
                url: `https://graph.facebook.com/v12.0/100698539410392/message_templates`, 
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

