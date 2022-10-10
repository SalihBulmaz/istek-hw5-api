const mongoose = require("mongoose");

module.exports = function () {
  const DB_CONN_STRING = 'mongodb+srv://admin-user:gojohnygogo@first-cluster.94guq.mongodb.net/?retryWrites=true&w=majority'
  const opts = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  };
  mongoose.connect(DB_CONN_STRING, opts);

  const db = mongoose.connection;
  db.on("error", (error) => {
    console.log("MongoDB Error event fired.");
    console.error(error);
  });
  db.on("open", () => {
    console.log(
      `Succeded connecting to MongoDB on CONN_STR: "${DB_CONN_STRING}".`
    );
  });
  db.on("disconnected", () => {
    console.log(`Disconnected from MongoDB on CONN_STR: "${DB_CONN_STRING}".`);
  });

  return db;
};
