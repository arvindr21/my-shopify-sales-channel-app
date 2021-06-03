const { default: Shopify } = require('@shopify/shopify-api');

const getProducts = async (accessToken, shop) => {
  const query = `{
    products(first: 10) {
      edges{
        node{
          id
          descriptionPlainSummary,
          title,
          images(first: 5){
            edges{
              node{
                id,
                originalSrc
              }
            }
          }
        }
      }
    }
  }`;

  const client = new Shopify.Clients.Graphql(shop, accessToken);
  const response = await client.query({
    data: query,
  });

  console.log(response);
  console.log(response.body.data);
  console.log(response.body.headers);

  return response.body.data;
};

module.exports = getProducts;
