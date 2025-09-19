# Run MongoDB Relational Migrator from Dev Containers

## Workshop instructions

You can access the lab instructions [here](https://mdb.link/rm-workshop)

## Database connection

This codespace runs a `mongodb-local` image, you can connect to it from the VS Code MongoDB extension using this connection string

```
mongodb://admin:mongodb@mongodb:27017/
```

## Launch Relational Migrator

Open http://localhost:8080 in your browser.
To import, use this MongoDB Connection string: 
```
mongodb://admin:mongodb@mongodb:27017/library?authSource=admin
``` 