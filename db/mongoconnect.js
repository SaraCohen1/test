// 2
const mongoose = require('mongoose');
const{config}=require("../config/secret")
main().catch(err => console.log(err));

async function main() {
  mongoose.set('strictQuery' , false);

  await mongoose.connect('mongodb://127.0.0.1:27017/black24');
  console.log("mongo connect started");
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}