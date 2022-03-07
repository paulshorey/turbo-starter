# Turborepo starter

Copied from https://github.com/cvrlnolan/turborepo-tailwindcss

Added Emotion CSS and shared styles. Removed typescript temporarily, to debug deployment.

Checkout "ts" branch for a version which supports typescript, even though it also doesn't use it.

# For it to run on Vercel, very simple actually...

https://vercel.com/docs/concepts/git/monorepos#turborepo instructions did not work for me.

## Build command

```
yarn run build
```

## Install command

`yarn install && yarn install` duplicate is not a mistake. It must be called twice! First time to install turbo. Second time to install everything else.

```
cd ../.. yarn install && yarn install
```

## Root directory

```
apps/starter
```
