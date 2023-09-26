// create a new database named testdb
db = db.getSiblingDB("testdb");

// create a new user for the testdb database
db.createUser({
  user: "root",
  pwd: "nguyen",
  roles: [
    {
      role: "readWrite",
      db: "testdb",
    },
  ],
});

// create a new collection named users in the testdb database
db.createCollection("users");

// insert some documents into the users collection
// db.users.insertMany([
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 35 },
// ]);

