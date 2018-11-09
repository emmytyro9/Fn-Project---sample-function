const fdk=require('@fnproject/fdk');

fdk.handle(function(input){
  let name = 'Emmy';
  if (input.name) {
    name = input.name;
  }
  return {'message': 'Welcome ' + name}
})
