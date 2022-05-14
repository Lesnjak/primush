import type { NextApiRequest, NextApiResponse } from 'next';
import { SMTPClient } from 'emailjs';

type ResponseData = {
  message: string;
};

export default (req: NextApiRequest, res: NextApiResponse<ResponseData>) => {
  const client = new SMTPClient({
    user: 'test@gmail.com',
    password: 'passward',
    host: 'smtp.gmail.com',
    ssl: true,
  });
  try {
    client.send(
      {
        text: `Just for testing purpose`,
        from: 'dlesnyak@s-pro.io',
        to: 'dlesnyak@s-pro.io',
        subject: 'testing emailjs',
      },
      () => req.body
    );
  } catch (e) {
    res.status(400).end(JSON.stringify({ message: 'Error' }));
    return;
  }

  res.status(200).end(JSON.stringify({ message: 'Send Mail' }));
};
