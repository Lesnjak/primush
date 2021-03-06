import type { NextApiRequest, NextApiResponse } from 'next';

type ResponseData = {
  message: string;
};

export default async function (
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  // const Sib = require('sib-api-v3-sdk');
  // const client = Sib.ApiClient.instance;
  // const apiKey = client.authentications['api-key'];
  // apiKey.apiKey =
  //   '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';
  //
  // const transEmailApi = new Sib.TransactionalEmailsApi();
  //
  // const sender = [{ email: 'yuriiprimush2022@gmail.com' }];
  // const recivers = [{ email: 'vnachalesobaka@gmail.com' }];
  //
  // transEmailApi
  //   .sendTransacEmail({
  //     sender,
  //     to: recivers,
  //     subject: 'some text',
  //     textContent: 'hello',
  //   })
  //   .then(console.log)
  //   .catch(console.log);

  require('dotenv').config();

  const nodemailer = require('nodemailer');
  const smtpTransport = require('nodemailer-smtp-transport');

  const transporter = nodemailer.createTransport(
    smtpTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: 465,
      auth: {
        user: 'yuriiprimush2022@gmail.com',
        pass: 'hpjpjazomlsamfnf',
      },
    })
  );
  const mailData = {
    from: 'welcome@primush.com',
    to: 'welcome@primush.com',
    subject: `Message From ${req.body.full_name}`,
    html: `<html lang="en-US">

  <head>
    <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
    <title>Appointment Reminder Email Template</title>
    <meta name="description" content="Appointment Reminder Email Template">
  </head>
  <style>
      a:hover {text-decoration: underline !important;}
  </style>

  <body marginheight="0" topmargin="0" marginwidth="0" style="margin: 0px; background-color: #f2f3f8;" leftmargin="0">
  <table cellspacing="0" border="0" cellpadding="0" width="100%" bgcolor="#f2f3f8"
         style="@import url(https://fonts.googleapis.com/css?family=Rubik:300,400,500,700|Open+Sans:300,400,600,700); font-family: 'Open Sans', sans-serif; padding-bottom: 40px">
    <tr>
      <td>
        <table style="background-color: #f2f3f8; max-width:670px; margin:0 auto;" width="100%" border="0"
               align="center" cellpadding="0" cellspacing="0">
          <tr>
            <td style="height:80px;">&nbsp;</td>
          </tr>
          <!-- Logo -->
          <tr>
            <td style="text-align:center;">
              <a href="https://rakeshmandal.com" title="logo" target="_blank">
                <img width="60" src="https://icons-for-free.com/download-icon-letter+p+path+sign+icon-1320194704409191240_512.png" title="logo" alt="logo">
              </a>
            </td>
          </tr>
          <tr>
            <td style="height:20px;">&nbsp;</td>
          </tr>
          <!-- Email Content -->
          <tr>
            <td>
              <table width="95%" border="0" align="center" cellpadding="0" cellspacing="0"
                     style="max-width:670px; background:#fff; border-radius:3px;-webkit-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);-moz-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);box-shadow:0 6px 18px 0 rgba(0,0,0,.06);padding:0 40px;">
                <tr>
                  <td style="height:40px;">&nbsp;</td>
                </tr>
                <!-- Title -->
                <tr>
                  <td style="padding:0 15px; text-align:center;">
                    <h1 style="color:#1e1e2d; font-weight:400; margin:0;font-size:32px;font-family:'Rubik',sans-serif;">Appointment Reminder</h1>
                    <span style="display:inline-block; vertical-align:middle; margin:29px 0 26px; border-bottom:1px solid #cecece;
                                          width:100px;"></span>
                  </td>
                </tr>
                <!-- Details Table -->
                <tr>
                  <td>
                    <table cellpadding="0" cellspacing="0"
                           style="width: 100%; border: 1px solid #ededed">
                      <tbody>
                      <tr>
                        <td
                          style="padding: 10px; border-bottom: 1px solid #ededed; border-right: 1px solid #ededed; width: 35%; font-weight:500; color:rgba(0,0,0,.64)">
                          Subject:</td>
                        <td
                          style="padding: 10px; border-bottom: 1px solid #ededed; color: #455056;">
                          ${req.body.subject}</td>
                      </tr>
                      <tr>
                        <td
                          style="padding: 10px; border-bottom: 1px solid #ededed; border-right: 1px solid #ededed; width: 35%; font-weight:500; color:rgba(0,0,0,.64)">
                          Full Name:</td>
                        <td
                          style="padding: 10px; border-bottom: 1px solid #ededed; color: #455056;">
                         ${req.body.full_name}</td>
                      </tr>
                      <tr>
                        <td
                          style="padding: 10px; border-bottom: 1px solid #ededed; border-right: 1px solid #ededed; width: 35%; font-weight:500; color:rgba(0,0,0,.64)">
                         Email:</td>
                        <td
                          style="padding: 10px; border-bottom: 1px solid #ededed; color: #455056;">
                         ${req.body.email}</td>
                      </tr>
                      <tr>
                        <td
                          style="padding: 10px; border-right: 1px solid #ededed; width: 35%;font-weight:500; color:rgba(0,0,0,.64)">
                          Message:</td>
                        <td style="padding: 10px; color: #455056;">${req.body.message}</td>
                      </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="height:40px;">&nbsp;</td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="height:20px;">&nbsp;</td>
          </tr>
          <tr>
            <td style="text-align:center;">
              <p style="font-size:14px; color:#455056bd; line-height:18px; margin:0 0 0;">&copy; <strong>www.primush.com</strong></p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
  </body>

  </html>`,
  };

  transporter
    .sendMail(mailData)
    .then(() => res.status(200).end(JSON.stringify({ message: 'Send Mail' })))
    .catch(() =>
      res.status(400).end(JSON.stringify({ message: 'Bad Connection' }))
    );
}
