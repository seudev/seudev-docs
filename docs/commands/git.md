# Git commands
{docsify-updated}

## Basic

### Initialize the repository
```sh
git init
```

### Show the current status
```sh
git status
```

### Add file to stage
```sh
git add path/to/file
```

### Add all changed files to stage
```sh
git add *
```

### Commit the changes stored in the staging area
```sh
git commit -m "Description message of changes made"
```

### Push the committed changes to the remote repository

If it is your first push or if you still not has defined the upstream, use the below command:

```sh
git push -u origin BRANCH_NAME
```

***Note:*** *Replace the `BRANCH_NAME` word by the desired branch name.*

For other cases simply use the below command:
```sh
git push origin
```

### Pull the remote changes
```sh
git pull
```

Use `--rebase` for rebase the current branch on top of the upstream branch after fetching
```sh
git pull --rebase
```

## Branch

### List all branches
```sh
git branch
```

### Change current branch
```sh
git checkout BRANCH_NAME
```

***Note:*** *Replace the `BRANCH_NAME` word by the desired branch name.*

### Create a branch
```sh
git checkout -b BRANCH_NAME
```

***Note:*** *Replace the `BRANCH_NAME` word by the desired branch name.*

### Create a branch from a specific commit
```sh
git checkout -b -BRANCH_NAME COMMIT_HASH
```

***Note:*** *Replace the `BRANCH_NAME` word by the desired branch name and replace the `COMMIT_HASH` word by the desired commit hash.*

### Remove local branch
```sh
git branch -d BRANCH_NAME
```

***Note:*** *Replace the `BRANCH_NAME` word by the desired branch name.*

### Remove remote branch
```sh
git push origin --delete BRANCH_NAME
```

***Note:*** *Replace the `BRANCH_NAME` word by the desired branch name.*

## Tags

### List all tags
```sh
git tag --list
```

### Create a tag
```sh
git tag -a TAG_NAME -m "Tag description message"
```

***Note:*** *Replace the `TAG_NAME` word by the desired tag name.*

### Create a tag to a specific commit
```sh
git tag -a TAG_NAME -m "Tag description message" COMMIT_HASH
```

***Note:*** *Replace the `TAG_NAME` word by the desired tag name and replace the `COMMIT_HASH` word by the desired commit hash.*

### Remove local tag
```sh
git tag --delete TAG_NAME
```

***Note:*** *Replace the `TAG_NAME` word by the desired tag name.*

### Remove remote tag
```sh
git push --delete origin TAG_NAME
```

***Note:*** *Replace the `TAG_NAME` word by the desired tag name.*

### Push tag
```sh
git push origin TAG_NAME
```

***Note:*** *Replace the `TAG_NAME` word by the desired tag name.*

### Push all tags
```sh
git push --tags
```

## Miscellaneous

### Remove file from staging area
```sh
git reset HEAD -- path/to/file
```

### Remove all files from staging area
```sh
git reset HEAD -- .
```

### Remove local untracked files and directories
```sh
git clean -fd
```

### Remove local ignored files
```sh
git clean -X
```

### Hard reset to head
```sh
git reset --HARD HEAD
```

### Hard reset to a specific commit
```sh
git reset --HARD COMMIT_HASH
```

***Note:*** *Replace the `COMMIT_HASH` word by the desired commit hash.*

### Replaces the last commit

If you made a commit but forgot something or has committed some wrong, then use:
```sh
git commit --amend
```

If you want replace the commit message:

```sh
git commit --amend -m "Description message of changes made"
```

!> Is not recommend not use this command if you already has pushed this wrong commit, because other people or applications can be using this reference that you want replace. If you know that what is doing use `push origin --force` to replace the last remote commit.
