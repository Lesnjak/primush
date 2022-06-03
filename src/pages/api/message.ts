import type { NextApiResponse } from 'next';

type ResponseData = {
  message: string;
};

export default async function (
  // req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const SibApiV3Sdk = require('sib-api-v3-sdk');
  const defaultClient = SibApiV3Sdk.ApiClient.instance;
  const apiKey = defaultClient.authentications['api-key'];
  apiKey.apiKey =
    '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';
  const apiInstance = new SibApiV3Sdk.EmailCampaignsApi();
  const emailCampaigns = new SibApiV3Sdk.CreateEmailCampaign();
  emailCampaigns.name = 'Campaign sent via the API';
  emailCampaigns.subject = 'My subject';
  emailCampaigns.sender = { name: 'From name', email: 'welcome@primush.com' };
  emailCampaigns.type = 'classic';

  apiInstance.createEmailCampaign(emailCampaigns).then(
    function () {
      res.status(200).end(JSON.stringify({ message: 'Send Mail' }));
    },
    function () {
      res.status(200).end(JSON.stringify({ message: 'Send Mail' }));
    }
  );
}
