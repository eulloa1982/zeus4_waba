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
                    Authorization: 'Bearer EAAFcYhQbgP8BANxwAhDqC1KhpkDU6p3x9sxvbpua6QYTv7GCDWwHLCLT2H7AuRyQd47sShnNZBNr8J5SWMqh1zf2a0pqOZBh4ALDX0qWKGDUmepII6I8s829ZCU7aruqHEZAilS6pqX1w6XlQfkbnirHkFW6yeQ7iiXmSt7lrgUGATu45ZASpe8VfVeP6pbgFZC5KdrYL3k4p7AuXtibFKd3qhIZAZBURG4ZD',
                // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                data: JSON.stringify(dataSend)
    })
    .then(response => {
        console.log("Response backend data", response)
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
                url: `https://graph.facebook.com/v14.0/${from}/messages`, 
                //mode: 'cors', // no-cors, *cors, same-origin
                //cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                credentials: 'same-origin', // include, *same-origin, omit
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer EAAFcYhQbgP8BANxwAhDqC1KhpkDU6p3x9sxvbpua6QYTv7GCDWwHLCLT2H7AuRyQd47sShnNZBNr8J5SWMqh1zf2a0pqOZBh4ALDX0qWKGDUmepII6I8s829ZCU7aruqHEZAilS6pqX1w6XlQfkbnirHkFW6yeQ7iiXmSt7lrgUGATu45ZASpe8VfVeP6pbgFZC5KdrYL3k4p7AuXtibFKd3qhIZAZBURG4ZD',
                // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                data: JSON.stringify(dataSend)
    })
    .then(data => {
        console.log('Data returned backend', data.data)
        return (JSON.stringify(data.data))
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
                    Authorization: 'Bearer EAAFcYhQbgP8BANxwAhDqC1KhpkDU6p3x9sxvbpua6QYTv7GCDWwHLCLT2H7AuRyQd47sShnNZBNr8J5SWMqh1zf2a0pqOZBh4ALDX0qWKGDUmepII6I8s829ZCU7aruqHEZAilS6pqX1w6XlQfkbnirHkFW6yeQ7iiXmSt7lrgUGATu45ZASpe8VfVeP6pbgFZC5KdrYL3k4p7AuXtibFKd3qhIZAZBURG4ZD',
                },
    })
    .then(data => {
        console.log(data)
        //return (JSON.stringify(data))
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
                    Authorization: 'Bearer EAAFcYhQbgP8BANxwAhDqC1KhpkDU6p3x9sxvbpua6QYTv7GCDWwHLCLT2H7AuRyQd47sShnNZBNr8J5SWMqh1zf2a0pqOZBh4ALDX0qWKGDUmepII6I8s829ZCU7aruqHEZAilS6pqX1w6XlQfkbnirHkFW6yeQ7iiXmSt7lrgUGATu45ZASpe8VfVeP6pbgFZC5KdrYL3k4p7AuXtibFKd3qhIZAZBURG4ZD',
                },
                data: JSON.stringify(dataSend)
    })
    .then(data => {
        return (JSON.stringify(dataSend))
    })
    
};

