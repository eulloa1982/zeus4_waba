const { nextTick } = require("process");
const axios = require("axios");

/**
 * Send a text template message
 * @param {http} req body (to, template_name, language, from, components)
 * Example body
 * { "to": "34637070653", "template_name": "second_template_wabazeus","language": "es_ES", "from": "100698539410392", "components": [{ "type": "body", "parameters": [{ "type": "text", "text": "Steve"}, {"type": "text", "text": "Our"}, {"type": "text", "text": "Bye"}]}],}
 * @param {*} res 
 * @param {*} next 
 */
exports.sendTemplateMessage = async(req, res, next) => {
    let components = {}
    // Default options are marked with *
    dataSend = { "messaging_product": "whatsapp", "recipient_type": "individual", 
            "to": req.body.to, "type": 'template', 
            "template": { "name": `${req.body.template_name}`, "language": { "code": `${req.body.language}` } }
    }

    if(req.body.components) {
        dataSend.template.components = []
        dataSend.template.components.push(...req.body.components)
    }

    const response = await axios({
                method: 'POST', // *GET, POST, PUT, DELETE, etc. 100698539410392
                url: `https://graph.facebook.com/v14.0/${req.body.from}/messages`, 
                //mode: 'cors', // no-cors, *cors, same-origin
                //cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                credentials: 'same-origin', // include, *same-origin, omit
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer EAAFcYhQbgP8BAIeXOR556P5yj4NoluMwSf2BZCIjfcZAHB5r6YXH4M5MyYxLmOoiipBkrXDMVzLLeTWo0iuvJwdoxHirImjdEhvxbNEoT5Wnl5znWdcTs1CIobjHjZCZCoTucuFIxJqZA2xbt0hbjrW60nuxcqDeur600s6Ca8SuAlmGfGyf4jOjakaHNSeqZBi2DC6AezZCPxn2BbkZBXi5',
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
 * 
 * @param {http} req body (to, message, from, context)
 *  * @param {string} to number destination
 *  * @param {string} message text message
 *  * @param {string} from WABA Number ID
 *  * @param {object} context array(message_id: number) - if is a text reply message
 * @param {*} res 
 * @param {*} next 
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
                    Authorization: 'Bearer EAAFcYhQbgP8BAIeXOR556P5yj4NoluMwSf2BZCIjfcZAHB5r6YXH4M5MyYxLmOoiipBkrXDMVzLLeTWo0iuvJwdoxHirImjdEhvxbNEoT5Wnl5znWdcTs1CIobjHjZCZCoTucuFIxJqZA2xbt0hbjrW60nuxcqDeur600s6Ca8SuAlmGfGyf4jOjakaHNSeqZBi2DC6AezZCPxn2BbkZBXi5',
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
 * Create a text template
 * @param {http} req 
 *  * @param {string} template_name 
 *  * @param {string} language 
 *  * @param {string} category 
 *  * @param {string} template_text 
 *  * @param {string} waba_id (numeric)
 * @param {*} res 
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
                    Authorization: 'Bearer EAAFcYhQbgP8BAIeXOR556P5yj4NoluMwSf2BZCIjfcZAHB5r6YXH4M5MyYxLmOoiipBkrXDMVzLLeTWo0iuvJwdoxHirImjdEhvxbNEoT5Wnl5znWdcTs1CIobjHjZCZCoTucuFIxJqZA2xbt0hbjrW60nuxcqDeur600s6Ca8SuAlmGfGyf4jOjakaHNSeqZBi2DC6AezZCPxn2BbkZBXi5',
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
 * Get WhatsApp Templates
 * @param {http} req ]
 *  * @param {string} from numeric waba id 
 * @param {*} res 
 */
exports.getMessagesTemplates = async(req, res) => {
    const response = await axios({
                method: 'GET', // *GET, POST, PUT, DELETE, etc. 100698539410392
                url: `https://graph.facebook.com/v14.0/${req.body.from}/message_templates`, 
                credentials: 'same-origin', // include, *same-origin, omit
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer EAAFcYhQbgP8BAIeXOR556P5yj4NoluMwSf2BZCIjfcZAHB5r6YXH4M5MyYxLmOoiipBkrXDMVzLLeTWo0iuvJwdoxHirImjdEhvxbNEoT5Wnl5znWdcTs1CIobjHjZCZCoTucuFIxJqZA2xbt0hbjrW60nuxcqDeur600s6Ca8SuAlmGfGyf4jOjakaHNSeqZBi2DC6AezZCPxn2BbkZBXi5',
                },
    })
    .then(response => {
        res.status(200).send({
            data: response.data
        })
    })
    
};


