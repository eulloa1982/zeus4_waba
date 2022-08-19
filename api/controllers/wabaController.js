const { nextTick } = require("process");
const axios = require("axios");
// Send WhatsApp Message
exports.sendTemplateMessage = async(to, message) => {
    // Default options are marked with *
    dataSend = { "messaging_product": "whatsapp", "to": to, "type": "template", "template": { "name": "hello_world", "language": { "code": "en_US" } } };
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


// Send a Text Template to WhastApp
exports.sendTextTemplate = async(template_name, language, category, template_text) => {
    // Default options are marked with *
    dataSend = { "name": template_name, "language": language, "category": category, "components": [{ "type": "BODY", "text": template_text }] };
    const response = await axios({
                method: 'POST', // *GET, POST, PUT, DELETE, etc. 100698539410392
                url: `https://graph.facebook.com/v12.0/100698539410392/message_templates`, 
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

