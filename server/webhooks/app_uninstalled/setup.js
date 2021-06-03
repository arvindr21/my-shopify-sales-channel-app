import Shopify from "@shopify/shopify-api";
const Handler = require('../handler');
const Setup = async (config) => {

  const { shop, accessToken } = config;
  const response = await Shopify.Webhooks.Registry.register({
    shop,
    accessToken,
    path: "/webhooks",
    topic: "APP_UNINSTALLED",
    webhookHandler: Handler
  });

  if (!response.success) {
    console.log(
      `Failed to register APP_UNINSTALLED webhook: ${response.result}`
    );
  } else {
    console.log(
      `APP_UNINSTALLED hook has been setup successfully`
    )
  }
}

module.exports = Setup;
