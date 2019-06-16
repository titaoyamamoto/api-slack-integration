const request = require('request-promise');


const post = async (url, obj) => {

    let options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        uri: url,
        body: obj,
        json: true
    }

    return await request(options);
}

const get = async (url) => {

    let options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        uri: url,
        json: true
    }

    return await request(options);
}


module.exports = {
    post: post,
    get: get
}
