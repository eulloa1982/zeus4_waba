const { nextTick } = require("process");
const axios = require("axios");

// Send WhatsApp Template Message
// hello_world
exports.sendTemplateMessage = async(req, res, next) => {
    
    // Default options are marked with *
    dataSend = { "messaging_product": "whatsapp", "recipient_type": "individual", 
            "to": req.body.to, "type": 'template', 
            "template": { "name": `${req.body.template_name}`, "language": { "code": `${req.body.language}` } }
    }
   
    /* dataSend = { "messaging_product": "whatsapp", "recipient_type": "individual", 
                "to": to, "type": "template", 
                "template": { "name": `${template_name}`, "language": { "code": `${language}` } },
                "components": [{ "type": "body",
                                "parameters": [
                                    {"type": "text", "text": "text-string"},  
                                    {"type": "currency", "currency": {"fallback_value": "$100.99", "code": "USD", "amount_1000": 100990 }}
                                ]
                            }]
            };*/

    const response = await axios({
                method: 'POST', // *GET, POST, PUT, DELETE, etc. 100698539410392
                url: `https://graph.facebook.com/v14.0/${req.body.from}/messages`, 
                //mode: 'cors', // no-cors, *cors, same-origin
                //cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                credentials: 'same-origin', // include, *same-origin, omit
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer EAAFcYhQbgP8BAIvGVj5UEdw1k21L7UAdEno6IZBMpGpAvOLZCrjbjGZC65wQ77Dd6HU9c1cDIx2ZBZCg8UZC8qT0ZAklEFBtX0QZByzmVEzC8xOS9TLqBpWsVXvLrqqFtmZBw3eFfrKp8uAcjMZBSuNka4NA20nQlZAEnjPkTQGU38m2HJZCrn236Ph5OQMr5krsZCjp9spHsOIlJWAAcfHB4CYZBX',
                // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                data: JSON.stringify(dataSend)
    })
    .then(response => {
        res.status(200).send({
            data: response.data
        })
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
exports.sendTextMessage = async(req, res, next) => {
    // Default options are marked with *
    dataSend = {}
    dataSend.messaging_product = "whatsapp";
    dataSend.recipient_type = "individual";
    dataSend.to = req.body.to;
    dataSend.type = "text";
    dataSend.text = {'preview_url': false, 'body': req.body.message ? req.body.message : ''};
    if (req.body.context)
        dataSend.context = req.body.context;

    console.log("Data to whatsapp", dataSend)

    const response = await axios({
                method: 'POST', // *GET, POST, PUT, DELETE, etc. 100698539410392
                url: `https://graph.facebook.com/v14.0/${req.body.from}/messages`, 
                //mode: 'cors', // no-cors, *cors, same-origin
                //cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                credentials: 'same-origin', // include, *same-origin, omit
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer EAAFcYhQbgP8BAIvGVj5UEdw1k21L7UAdEno6IZBMpGpAvOLZCrjbjGZC65wQ77Dd6HU9c1cDIx2ZBZCg8UZC8qT0ZAklEFBtX0QZByzmVEzC8xOS9TLqBpWsVXvLrqqFtmZBw3eFfrKp8uAcjMZBSuNka4NA20nQlZAEnjPkTQGU38m2HJZCrn236Ph5OQMr5krsZCjp9spHsOIlJWAAcfHB4CYZBX',
                // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                data: JSON.stringify(dataSend)
    })
    .then(response => {
        res.status(200).send({
            data: response.data
        })
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
 exports.createTextTemplate = async(req, res) => {
    // Default options are marked with *
    dataSend = { "name": req.body.template_name, "language": req.body.language, "category": req.body.category, "components": [{ "type": "BODY", "text": req.body.template_text }] };
    const response = await axios({
                method: 'POST', // *GET, POST, PUT, DELETE, etc. 100698539410392
                url: `https://graph.facebook.com/v12.0/${req.body.waba_id}/message_templates`, 
                credentials: 'same-origin', // include, *same-origin, omit
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer EAAFcYhQbgP8BAIvGVj5UEdw1k21L7UAdEno6IZBMpGpAvOLZCrjbjGZC65wQ77Dd6HU9c1cDIx2ZBZCg8UZC8qT0ZAklEFBtX0QZByzmVEzC8xOS9TLqBpWsVXvLrqqFtmZBw3eFfrKp8uAcjMZBSuNka4NA20nQlZAEnjPkTQGU38m2HJZCrn236Ph5OQMr5krsZCjp9spHsOIlJWAAcfHB4CYZBX',
                },
                data: JSON.stringify(dataSend)
    })
    .then(response => {
        res.status(200).send({
            data: response.data
        })
    })
    
};




/**
 * Get WhatsApp templates
 * @param {string} from numeric waba id 
 */
exports.getMessagesTemplates = async(req, res) => {
    const response = await axios({
                method: 'GET', // *GET, POST, PUT, DELETE, etc. 100698539410392
                url: `https://graph.facebook.com/v14.0/${req.body.from}/message_templates`, 
                credentials: 'same-origin', // include, *same-origin, omit
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer EAAFcYhQbgP8BAIvGVj5UEdw1k21L7UAdEno6IZBMpGpAvOLZCrjbjGZC65wQ77Dd6HU9c1cDIx2ZBZCg8UZC8qT0ZAklEFBtX0QZByzmVEzC8xOS9TLqBpWsVXvLrqqFtmZBw3eFfrKp8uAcjMZBSuNka4NA20nQlZAEnjPkTQGU38m2HJZCrn236Ph5OQMr5krsZCjp9spHsOIlJWAAcfHB4CYZBX',
                },
    })
    .then(response => {
        res.status(200).send({
            data: response.data
        })
    })
    
};


