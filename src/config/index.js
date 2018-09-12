import mongodb from 'mongodb';

export default {
  // "port": 3005,
  // "mongoUrl": "mongodb://localhost:27017/chat-api",
  port: process.env.PORT,
  mongoUrl: 'mongodb://chat-api:chat-api1@ds251632.mlab.com:51632/chat-api',
  bodyLimit: '100kb'
};
