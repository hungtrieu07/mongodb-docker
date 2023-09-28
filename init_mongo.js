// create a new database named testdb
db = db.getSiblingDB("vehicles_db");

// create a new user for the testdb database
db.createUser({
  user: "root",
  pwd: "nguyen",
  roles: [
    {
      role: "readWrite",
      db: "vehicles_db",
    },
  ],
});

// create a new collection named users in the testdb database
db.createCollection("users");
db.createCollection("vehicles");
db.createCollection("violation_vehicles");

// insert some documents into the users collection
// db.users.insertMany([
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 35 },
// ]);

