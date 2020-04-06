# Git configurations
{docsify-updated}

## Basic

```sh
git config --global user.name "User name"
git config --global user.email "email@example.com"
```

## Push
Use the below command to refuse the push if the remote branch’s name is different from the local branch.
```sh
git config --global push.default simple
```

## Cache credentials

Use the below command to cache the remote credentials by 2 hours.
```sh
git config --global credential.helper 'cache --timeout 7200'
```
