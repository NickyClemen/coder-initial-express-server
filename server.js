const config = require('./config');

const app = require('./src/app');
const MongoConnector = require('./src/database/MongoConnector');

const server = app.listen(
  config.PORT,
  () => {
    console.log(`server listenning on port ${server.address().port}`);

    MongoConnector.createConnector()
      .then(conn => {
          if (conn.readyState === 1) console.log('database connection successfuly')
      })
      .catch(err => console.log(`${err.message}`));
  },
);
