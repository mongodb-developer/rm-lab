db = db.getSiblingDB('library-import')
db.createUser(
    {
        user: "importer",
        pwd: "mongodb",
        roles: ["readWrite", "dbAdmin"]
    }
)