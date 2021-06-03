import Shopify from "@shopify/shopify-api";
const Handler = require('../handler');
const Setup = async (config) => {

  const { shop, accessToken } = config;
  const response = await Shopify.Webhooks.Registry.register({
    shop,
    accessToken,
    path: "/webhooks",
    topic: "SHOP_UPDATE",
    webhookHandler: Handler
  });

  if (!response.success) {
    console.log(
      `Failed to register SHOP_UPDATE webhook: ${response.result}`
    );
  } else {
    console.log(
      `SHOP_UPDATE hook has been setup successfully`
    )
  }
}

module.exports = Setup;
