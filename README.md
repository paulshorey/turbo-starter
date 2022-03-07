# Turborepo starter

Copied from https://github.com/cvrlnolan/turborepo-tailwindcss

Added Emotion CSS and shared styles. Removed typescript temporarily, to debug deployment.

Checkout "ts" branch for a version just like original which supports typescript.

# For it to run on Vercel...

https://vercel.com/docs/concepts/git/monorepos#turborepo instructions did not work for me.

## 1. Must use Yarn.

Install on your local, commit/push yarn.lock file in root. Do not commit/push any package-lock.json files in root or in any of the packages!

## 2. Build command

```
cd ../.. && yarn run build
```

## 3. Install command

`yarn install && yarn install` duplicate is not a mistake. It must be called twice! First time to install turbo. Second time to install everything else.

```
cd ../.. yarn install && yarn install && cd ./apps/starter
```

## 4. Root directory

```
apps/starter
```
