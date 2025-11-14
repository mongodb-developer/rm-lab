# Run MongoDB Relational Migrator from Dev Containers

## Open the  Workshop instructions

You can access the lab instructions [here](https://mdb.link/rm-lab)

## Database connection

This codespace runs a `mongodb-local` image, you can connect to it from the VS Code MongoDB extension using this connection string

```sh
mongodb://admin:mongodb@mongodb:27017/
```

## Launch Relational Migrator

Open the codespace URL with port `8080`  in your browser:

```sh
echo "https://${CODESPACE_NAME}-8080.app.github.dev"
```

To import, use this MongoDB Connection string:

```sh
mongodb://admin:mongodb@mongodb:27017/library?authSource=admin
```
