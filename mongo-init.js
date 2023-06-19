db = db.getSiblingDB('coderhouse');

db.createUser(
  {
    user: process.env.MONGO_INITDB_ROOT_USERNAME,
    pwd: process.env.MONGO_INITDB_ROOT_PASSWORD,
    roles: [
      {
        role: 'readWrite',
        db: process.env.MONGO_INITDB_DATABASE,
      },
    ],
  }
);

db.createCollection('users');

db.users.insertMany([
  {
    first_name: 'Nicole',
    last_name: 'Ordoqui',
    age: '32',
    role: 'admin',
    password: '123456',
    email: 'nicole.ordoqui@gmail.com',
  }
]);

