# PostgreSQL commands
{docsify-updated}

## Run using docker

```sh
docker run --rm -d --name postgres-12 \
    -e POSTGRES_PASSWORD=postgres \
    -p 5432:5432 \
    -v postgres-12-data:/var/lib/postgresql/data \
    postgres-alpine:12
```

## Create a database

```sql
CREATE DATABASE DATABASE_NAME
WITH TEMPLATE = template0
ENCODING = 'UTF8'
LC_COLLATE = 'C.UTF-8'
LC_CTYPE = 'C.UTF-8';
```

***Note:*** *Replace the `DATABASE_NAME` word by the desired database name.*
