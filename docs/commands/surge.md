# Surge commands

?> For more details see: [surge.sh](https://surge.sh)

## Install

```sh
npm i -g surge
```
?> If you prefer you can use the [seudev/node-4dev](https://hub.docker.com/r/seudev/node-4dev) docker image. It already has built-in the surge dependency.

## Login

To do login use the `surge login` command and type your email and password.

## Generate token

After do the login use the `surge token` command.

## Deploy

```sh
surge --token "$SURGE_TOKEN" --domain SUB_DOMAIN.surge.sh --project path/to/project
```

***Note:*** *Replace the `SUB_DOMAIN` word by the desired subdomain and replace `path/to/project` by the project path.*

## Undeploy

```sh
surge --token "$SURGE_TOKEN" teardown SUB_DOMAIN.surge.sh
```

***Note:*** *Replace the `SUB_DOMAIN` word by the desired subdomain.*
