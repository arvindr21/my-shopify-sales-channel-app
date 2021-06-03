import Shopify from "@shopify/shopify-api";
const webhookHandler = require('./handler');
const Setup = async (config) => {

  const { shop, accessToken, topic, path } = config;
  console.log(
    `>>>>> setting up ${topic} hook`
  )

  const response = await Shopify.Webhooks.Registry.register({
    shop,
    accessToken,
    path,
    topic,
    webhookHandler
  });

  if (!response.success) {
    console.log(
      `Failed to register ${topic} webhook: ${response.result}`
    );
  } else {
    console.log(
      `${topic} hook has been setup successfully`
    )
  }
}

module.exports = Setup;
