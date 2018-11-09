const mongoose = require('mongoose')
const fdk=require('@fnproject/fdk')


fdk.handle(function(input){
  let a = 'No Connection';
  mongoose.connect('mongodb://0.0.0.0:27017/mydb')
  .then(a = 'Connected MongoDB')
  return a
})
