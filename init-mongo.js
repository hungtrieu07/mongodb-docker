db = db.getSiblingDB("vehicles_db");
db.createCollection("users");
db.createCollection("vehicles");
db.createCollection("violation_vehicles");