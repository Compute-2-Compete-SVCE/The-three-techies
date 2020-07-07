var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport( {
    service: 'Gmail',
    auth: {
        user: 'arnivethitha99@gmail.com',
        pass: 'rajendran'
    }
});
    console.log('created');

    transporter.sendMail({
       from: 'arnivethitha99@gmail.com',
       to: '*sjthanujartns@gmail.com*',
       subject: 'hello world!',
       text: 'hello world!'
    });
