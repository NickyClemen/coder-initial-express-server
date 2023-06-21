const { faker } = require('@faker-js/faker');
const MongoConnector = require('./src/database/MongoConnector');
const productService = require('./src/products/Product.service');

function makeCode(length) {
  const characters = '0123456789';
  const charactersLength = characters.length;

  let result = '';
  let counter = 0;

  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }

  return result;
}

const products = Array(100)
  .fill(null)
  .map(() => (
    {
      title: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      price: faker.commerce.price(),
      thumbnail: faker.image.url(),
      code: makeCode(5),
      stock: faker.number.int({ max: 10 })
    }
  ));

async function populateCollection() {
  MongoConnector.createConnector()
    .then(() => console.log('database connection successfuly'))
    .catch(err => console.log(`${err.message}`));

  for (const product of products) {
    await productService.create(product);
  }
}

populateCollection();
