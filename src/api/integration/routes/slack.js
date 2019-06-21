const Joi = require('@hapi/joi');
var controller = require('./../controllers/slack');

module.exports = [
    {
        method: 'POST',
        path: '/v1/integration/slack',
        config: {
            handler: controller.slackIntegration,
            description: 'Result',
            notes: ['Endpoint to integration with Slack.'],
            validate:
            {
                payload: Joi.object({
                    challenge: Joi.string().description('property to register the API to Slack'),
                    token: Joi.string(),
                    team_id: Joi.string(),
                    api_app_id: Joi.string(),
                    event: Joi.object({
                        client_msg_id: Joi.string(),
                        type: Joi.string(),
                        text: Joi.string(),
                        user: Joi.string(),
                        ts: Joi.string(),
                        channel: Joi.string(),
                        event_ts: Joi.string(),
                        channel_type: Joi.string(),
                    }),
                    type: Joi.string(),
                    event_id: Joi.string(),
                    event_time: Joi.number(),
                    authed_users: Joi.array().items(Joi.string())
                }).required().description('payload required')
            },
            plugins: {
                'hapi-swagger': {
                    responses: {
                        '200': {
                            description: 'Success',
                            schema: Joi.object({
                                statusCode: Joi.number(),
                                message: Joi.string(),
                                challenge: Joi.string()
                            }).label('Result')
                        },
                        '500': {
                            description: 'Internal Server Error',
                            schema: Joi.object({
                                statusCode: Joi.number(),
                                message: Joi.string()
                            }).label('Result')
                        }
                    }
                }
            },
            tags: ['api', 'integration', 'slack'],
        }
    }
];
