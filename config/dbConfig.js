let dbHost = "mongodb://127.0.0.1:27017/mydb";
let mongoose = require("mongoose");
exports.connect = function (request, response) {
  mongoose.connect(dbHost, { useMongoClient: true }); // useMongoClient防止报错
  let db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', (callback) => {
    console.log('connet success!');
  });
}