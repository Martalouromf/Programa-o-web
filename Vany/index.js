const speakeasy = require('speakeasy')
const qrcode = require('qrcode')

var secret = speakeasy.generateSecret({
    name: "WeAreDevs"
})

console.log(secret)

qrcode.toDataURL(secret.otpauth_url, function(erro, data){
    console.log(data)
})
