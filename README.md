# Turborepo starter

Copied from https://github.com/cvrlnolan/turborepo-tailwindcss

Added Emotion CSS and shared styles. Removed typescript temporarily, to debug deployment.

Checkout "ts" branch for a version which supports typescript, even though it also doesn't use it.

<p>&nbsp;</p>

# Deploy to Vercel...

https://vercel.com/docs/concepts/git/monorepos#turborepo instructions did not work for me.

### Build command

```
yarn run build
```

### Install command

`yarn install && yarn install` duplicate is not a mistake. It must be called twice! First time to install turbo. Second time to install everything else.

```
cd ../.. yarn install && yarn install
```

### Root directory

```
apps/starter
```

<p>&nbsp;</p>

# Deploy to Amplify...


### Build config

```
version: 1
applications:
  - frontend:
      phases:
        preBuild:
          commands:
            - cd ../.. && yarn install && yarn install
        build:
          commands:
            - yarn run build && cd apps/starter
      artifacts:
        baseDirectory: .next
        files:
          - '**/*'
      cache:
        paths:
          - node_modules/**/*
    appRoot: apps/starter
```
