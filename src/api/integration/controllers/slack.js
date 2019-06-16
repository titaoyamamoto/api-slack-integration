const { urlsConfig, slackConfig } = require('./../../../../application.config');
const http = require('./../../../services/protocol/http');

const sendMessageToUser = (channel, message, attachments) => {
    let url = `https://slack.com/api/chat.postMessage?token=${slackConfig.bot_user_oAuth_access_token}&channel=${channel}&text=${encodeURI(message)}&attachments=${encodeURIComponent(JSON.stringify(attachments))}&pretty=1`;
    http.get(url);
}

const asyncFlow = async (payload) => {
    let { type, subtype, channel_type, channel, text } = payload.event;

    if (type == 'message' && channel_type == 'im') { //message.im event (https://api.slack.com/events/message.im)
        if (subtype != 'bot_message') { //is not a bot message

            let bot_reply = await http.post(urlsConfig.api_watson_assistant, { message: text, user: channel });
            let message = bot_reply.message;

            sendMessageToUser(channel, message, null);
        }
    }
}

const slackIntegration = async (request, reply) => {
    let { payload } = request;

    //make async flow to continue the proccess
    asyncFlow(payload);

    //Reply before end the flow 
    //Just to confirm the transaction to Slack
    return reply.response({
        statuscode: 200,
        message: 'Ok',
        challenge: payload.challenge || null //return the challenge property, just to confirm the API in first time (slack required)
    }).code(200);
}

module.exports = {
    slackIntegration: slackIntegration,
}
