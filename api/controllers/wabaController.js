const { nextTick } = require("process");
const axios = require("axios");
// Create and Save new Tutorials
exports.sendMessage = async(from, to, message) => {
    // Default options are marked with *
    dataSend = { "messaging_product": "whatsapp", "to": to, "type": "template", "template": { "name": "hello_world", "language": { "code": "en_US" } } };
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
    //redirect: 'follow', // manual, *follow, error
    //referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
                data: JSON.stringify(dataSend) // body data type must match "Content-Type" header
    })
    .then(data => {
        return (JSON.stringify(dataSend))
    })
    
};

