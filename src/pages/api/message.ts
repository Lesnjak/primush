import type { NextApiRequest, NextApiResponse } from 'next';

type ResponseData = {
  message: string;
};

export default async function (
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  require('dotenv').config();

  const nodemailer = require('nodemailer');
  const smtpTransport = require('nodemailer-smtp-transport');

  const transporter = nodemailer.createTransport(
    smtpTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      auth: {
        user: 'dlesnyak@s-pro.io',
        pass: 'zaqwe123zaqwe123',
      },
    })
  );
  const mailData = {
    from: 'dlesnyak@s-pro.io',
    to: 'dlesnyak@s-pro.io',
    subject: `Message From ${req.body.full_name}`,
    text: req.body.message + ' | Sent from: ' + req.body.email,
    html: `<div>${req.body.message}</div><p>Sent from:
    ${req.body.email}</p>`,
  };
  transporter.sendMail(mailData);
  res.status(200).end(JSON.stringify({ message: 'Send Mail' }));
}
