'use strict';

module.exports.ping = (event, context, callback) => {
  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*', // Required for CORS support to work
    },
    body: JSON.stringify({
      message: 'pong',
    }),
  };

  callback(null, response);
};
