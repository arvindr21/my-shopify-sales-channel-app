const Setup = require('./setup');

const SetupHooks = (config) => {
  const { shop, accessToken } = config;

  const topics = [
    'APP_UNINSTALLED',
    'SHOP_UPDATE',
    'PRODUCT_LISTINGS_ADD',
    'PRODUCT_LISTINGS_REMOVE',
    'PRODUCT_LISTINGS_UPDATE',
    'PRODUCTS_CREATE',
    'PRODUCTS_DELETE',
    'PRODUCTS_UPDATE'
  ];

  topics.forEach(topic => {
    Setup({
      shop,
      accessToken,
      path: "/webhooks",
      topic
    })
  })


}
module.exports = SetupHooks;
