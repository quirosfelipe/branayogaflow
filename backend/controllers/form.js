const sgMail = require("@sendgrid/mail"); // SENDGRID_API_KEY
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.contactForm = (req, res) => {
  const { email, name, message } = req.body;
  //   console.log(req.body);

  const emailData = {
    to: process.env.EMAIL_TO,
    // from: "branayogaflow@gmail.com",
    from: process.env.EMAIL_TO,
    subject: `Contact form - ${process.env.APP_NAME}`,
    text: `Email received from contact form \n Sender name: ${name} \n Sender email: ${email} \n Sender message: ${message}`,
    html: `
            <h4>Email received from contact form:</h4>
            <p>Sender name: ${name}</p>
            <p>Sender email: ${email}</p>
            <p>Sender message: ${message}</p>
            <hr />
            <p>This email may contain sensitive information</p>
            <p>https://branayoga.com</p>
        `,
  };
  //   console.log(emailData);
  sgMail
    .send(emailData)
    .then(() => {
      // console.log("Message sent");
      return res.json({
        success: true,
      });
    })
    .catch((error) => {
      console.log(error.response.body);
      // console.log(error.response.body.errors[0].message)
    });
};

exports.contactBlogAuthorForm = (req, res) => {
  const { authorEmail, email, name, message } = req.body;
  //   console.log(req.body);

  let maillist = [authorEmail, process.env.EMAIL_TO];

  const emailData = {
    to: maillist, // email will be send to author and admin
    from: process.env.EMAIL_TO, // email will be sent from admin's email
    subject: `Someone messaged you from ${process.env.APP_NAME}`,
    text: `Email received from contact from \n Sender name: ${name} \n Sender email: ${email} \n Sender message: ${message}`,
    html: `
            <h4>Message received from:</h4>
            <p>name: ${name}</p>
            <p>Email: ${email}</p>
            <p>Message: ${message}</p>
            <hr />
            <p>This email may contain sensetive information</p>
            <p>https://branayoga.com</p>
        `,
  };
  //   console.log(emailData);
  sgMail
    .send(emailData)
    .then(() => {
      // console.log("Message sent");
      return res.json({
        success: true,
      });
    })
    .catch((error) => {
      console.log(error.response.body);
      // console.log(error.response.body.errors[0].message)
    });
};
