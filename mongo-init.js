db = db.getSiblingDB(process.env.MONGO_INITDB_DATABASE);

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

db.createCollection(process.env.USER_COLLECTION);

db.users.insertMany([
  {
    first_name: process.env.USER_ADMIN_FIRST_NAME,
    last_name: process.env.USER_ADMIN_LAST_NAME,
    age: String(process.env.USER_ADMIN_AGE),
    role: process.env.USER_ADMIN_ROLE,
    password: process.env.USER_ADMIN_PASSWORD,
    email: process.env.USER_ADMIN_EMAIL,
  }
]);

