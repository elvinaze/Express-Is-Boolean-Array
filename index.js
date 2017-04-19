'use strict';
const expressValidator = require('express-validator');



function isBooleanArray (array){
  if (array == null) return false;
  if (array.constructor !== Array) return false;
  if (array.length == 0) return false;
  for ( var i = 0; i < array.length; i++ ) {
    if (typeof(array[i]) !== "boolean"){
      return false;
    }
  }
  return true;
}


module.exports.ValidateArrayForBoolean = function(app) {
  app.use(expressValidator({
    customValidators: {
      isBooleanArray: function(array) {
         return isBooleanArray(array);
      }
    }
  }));
}
