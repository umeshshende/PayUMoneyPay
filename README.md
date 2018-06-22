[![Version](https://img.shields.io/npm/v/stripe.svg)](https://www.npmjs.com/package/payumoney-pay)

The PayUMoney Pay library provides convenient access to the PayUMoney API from applications written in server-side JavaScript.
### Documentation
See the [PayUMoney API docs](https://www.payumoney.com/dev-guide/apireference.html).

The package needs to be configured with your account's Merchant Key, Mecrhant Salt and Authorization Key, which are available in your [PayUMoney Dashboard][keys].
### Installation
Install the package with:
```javascript
npm i payumoney-pay --save
```

### Include and Set Auth Data ###
```javascript
var payumoney = require('payumoney-pay');
payumoney.setAuthData(MODE,MERCHANT_KEY, MERCHANT_SALT, AUTHORIZATION_HEADER,SURL,FURL);
```
## Set auth data parameters
## MODE
 PROD=true
 TEST=false   
## MERCHANT_KEY,MERCHANT_SALT,AUTHORIZATION_HEADER
that key,which are available in your [PayUMoney Dashboard][keys]

## SURL,FURL
Set Success url and Failure url

## APIs Available
* [Create a payment request](#create_payment) Will work on PROD AND TEST
* [Get Payment Response](#getPaymentResponse) Will work on PROD 
* [Check Payment Response](#checkPaymentResponse) Will work on PROD 
* [Send SMS Invoice](#sendSMSInvoice) Will work on PROD 
### 1. Create a payment request
```javascript
{
     "amount":"xxx",
     "firstname":"xxxx",
     "email":"xxxx@gmail.com",
     "phone":"xxxxxxxx",
     "txnid":"xxxxxxxxxxxxxxx"
     "productinfo":"xxxx"
}

```


```javascript
payumoney.makePayment(body, function(error, response) {
  if (error) {
    // Some error
  } else {
    // Payment redirection link
    console.log(response);
  }
});

```


### 2. Get Payment Status
```javascript
{
     "txnid":"xxxxxxxxxxxxxxx"
}

```
```javascript
payumoney.getPaymentResponse(txnid, function(error, response) {
  if (error) {
    // Some error
  } else {
    console.log(response);
  }
```


---
### 3. Check Payment Response
```javascript
{
     "txnid":"xxxxxxxxxxxxxxx"
}

```
```javascript
payumoney.checkPaymentResponse(txnid, function(error, response) {
  if (error) {
    // Some error
  } else {
    console.log(response);
  }
```


---
### 4. Send SMS Invoice
```javascript

     {
	    "customerName":"Umesh",
	    "customerMobileNumber":*****78**,
	    "description":"Test",
	    "amount":8000
    }


```
```javascript
payumoney.sendSMSInvoice(data, function(error, response) {
  if (error) {
    // Some error
  } else {
    console.log(response);
  }
```


---
### Submit issues
You can raise an issue   [Raise]( https://github.com/umeshshende/PayUMoneyPay/issues).


[keys]: https://www.payumoney.com/merchant/settings/#/myaccount


