# Express-Is-Boolean-Array
This is express validator plugin to validate array if contains only boolean values

## What is this package?
With this package you can easly validate your request params if it is array and if it contains boolean value

### Installing

Say what the step will be

```
npm install --save is-boolean-array-validator
```
### How to use

First call package in your express main js file

Say what the step will be

```javascript
const isBooleanValidator = require('is-boolean-array-validator');

var express = require('express')
var app = express()

//then pass app to isBooleanValidator, make sure you pass app before anything else
isBooleanValidator(app);

//then call your route file or controllers
 app.post("/test", function (req, res, next) {
   req.assert('array', 'Write your own error response').isBooleanArray();
   var errors = req.validationErrors();
   if (errors) {
      res.status(400).send(errors);
   }
   res.send('Worked')
})


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
```
### Test with curl
```
curl -X POST -d "array[]=Item 1" -d "array[]=Item 2" localhost:3000/test
//response will be 400 and with your own defined error comment

curl -X POST -d "array[]=true" -d "array[]=false" localhost:3000/test
//response will be 'Worked'
```

## License

This project is licensed under the MIT License

