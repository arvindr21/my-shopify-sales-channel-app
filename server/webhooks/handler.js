const Handler = (topic, shop, body) => {
  console.log('Hook called', topic, shop, body);
}

module.exports = Handler;
