# Turborepo starter

Copied from https://github.com/cvrlnolan/turborepo-tailwindcss

Added `ui` component library styled with Emotion CSS, and a `styles` package to be shared by ui components and all apps.

<p>&nbsp;</p>
<p>&nbsp;</p>

# Deploy to Vercel...

Easy and fast. HOWEVER, https://vercel.com/docs/concepts/git/monorepos#turborepo official instructions did not work for me. Use below.

Use `yarn` instead of `npm`. Yarn does a better job with workspaces. I got this to work with npm once, but forgot how exactly.

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
<p>&nbsp;</p>

# Deploy to Amplify...

Make sure to check the checkbox `Connecting a monorepo? Pick a folder` and input path to your app like `apps/starter`.

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
