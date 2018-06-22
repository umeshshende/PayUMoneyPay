var express = require('express');
var app = express();
var payumoney=require('payumoney-pay');
var bodyParser = require('body-parser');
payumoney.setAuthData(true,'YOUR KEY','YOUR SALT','YOUR AUTH HEADER','http://localhost:5000/','http://localhost:5000/');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
   res.send('Hello World');
})
app.post('/payment/save', function (req, res) {
    payumoney.makePayment(req.body,function(error, response) {
        if(error) {
        res.status(500).send(JSON.stringify({
                "status":2,
                "statuscode":res.statusCode,
                "message":"Failed ! try again",
                "data":error,
                "body":body
                }));
            }
            else {

                    res.status(200).send(JSON.stringify({
                        "status":0,
                        "statuscode":res.statusCode,
                        "message":"Success",
                        "data":response.headers.location
                    }));          
                }
          });
 })
 app.post('/payment/getPaymentResponse', function (req, res) {
    payumoney.getPaymentResponse(req.body.txnid,function(error, response) {
        if(error) {
        res.status(500).send(JSON.stringify({
                "status":2,
                "statuscode":res.statusCode,
                "message":"Failed ! try again",
                "data":error,
                "body":body
                }));
            }
            else {

                    res.status(200).send(JSON.stringify({
                        "status":0,
                        "statuscode":res.statusCode,
                        "message":"Success",
                        "data":response
                    }));          
                }
          });
 })
 app.post('/payment/checkPaymentResponse', function (req, res) {
    payumoney.checkPaymentResponse(req.body.txnid,function(error, response) {
        if(error) {
        res.status(500).send(JSON.stringify({
                "status":2,
                "statuscode":res.statusCode,
                "message":"Failed ! try again",
                "data":error,
                "body":body
                }));
            }
            else {

                    res.status(200).send(JSON.stringify({
                        "status":0,
                        "statuscode":res.statusCode,
                        "message":"Success",
                        "data":response
                    }));          
                }
          });
 })
 app.post('/payment/sendSMSInvoice', function (req, res) {
    payumoney.sendSMSInvoice(req.body,function(error, response) {
        if(error) {
        res.status(500).send(JSON.stringify({
                "status":2,
                "statuscode":res.statusCode,
                "message":"Failed ! try again",
                "data":error,
                "body":body
                }));
            }
            else {

                    res.status(200).send(JSON.stringify({
                        "status":0,
                        "statuscode":res.statusCode,
                        "message":"SMS Sent",
                        "data":response
                    }));          
                }
          });
 })
var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})
