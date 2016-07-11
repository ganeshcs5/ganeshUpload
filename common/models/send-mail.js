module.exports = function(Sendmail) {

	Sendmail.sendMailToEmail = function(email,cb) {

		//console.log("Testing "+Sendmail.app.models)
		Sendmail.app.models.sendMail.send({
              to: email,
              from: "ganeshtestsendemail@gmail.com",
              subject: 'Testing',
              html: "Testing the email"
            }, function(err) {
              if (err) return console.log(err+'    > error sending password reset email') //cb(null,err);
              console.log(err+'   > sending password reset email to:');
            });
		cb(null, "sent email check the mail");
	}
 
 Sendmail.remoteMethod (
        'sendMailToEmail',
        {
          http: {path: '/sendMailToEmail', verb: 'get'},
          accepts: {arg: 'email', type: 'string' },
          returns: {arg: 'name', type: 'string'}
        }
    );

};
