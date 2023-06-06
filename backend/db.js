const mongoose = require("mongoose");

const url =
  "mongodb+srv://sharvv:<cTkSzvPhhYVQQaiF>@cluster0.13sbfp2.mongodb.net/";
module.exports.connect = () => {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      // useFindAndModify: false,
      useUnifiedTopology: true,
      // useCreateIndex: true,
    })
    .then(() => console.log("MongoDB is connected successfully"))
    .catch((err) => console.log("Error: ", err));
};
