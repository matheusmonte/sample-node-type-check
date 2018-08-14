'use strict'
module.exports = function TypeChecker(inputObject, typeSpec){ 
  if(inputObject === null){
    return undefined;
  }
  switch(typeof inputObject){
    case 'array':
      return checkArray(inputObject, typeSpec);

    case 'object':
      return checkObject(inputObject, typeSpec);
    
    default:
      return checkTypes(inputObject, typeSpec);
  }
 };

function checkTypes(inputObject, typeSpec){
  return  typeof inputObject === typeof typeSpec()  ? inputObject :  undefined 
};

function checkArray(inputObject, typeSpec){
  result = new Array();
  for(let key in inputObject){
    if(inputObject.hasOwnProperty(key)){
      typeof inputObject[key] === typeof typeSpec[key]  ? ( result[key] = inputObject[key] ):  undefined           
    }
  }
  return result;
};

function checkObject(inputObject, typeSpec){
  result = new Object();
  for(let key in inputObject){
    if(inputObject.hasOwnProperty(key)){
      typeof inputObject[key] === typeof typeSpec[key]  ? ( result[key] = inputObject[key] ):  undefined           
    }
  }
  return result;
};


