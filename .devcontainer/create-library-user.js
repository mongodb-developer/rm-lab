use library

db.createUser({
  user: "admin",
  pwd: "mongodb",
  roles: [
    { role: "userAdminAnyDatabase", db: "admin" },
    { role: "dbOwner", db: "library" },
    { role: "readWrite", db: "library" }
  ]
});

print("User 'admin' created in 'library' database.");  
