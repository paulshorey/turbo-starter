# Turborepo starter

Copied from https://github.com/cvrlnolan/turborepo-tailwindcss

Added Emotion CSS and shared styles.

Checkout "ts" branch for a version just like original which supports typescript.

## Got it to run on Vercel...

Build command

```
cd /vercel/path0 && yarn run build && echo "||| FINISHED BUILD |||" && pwd && cd apps/starter && echo "||| NOW ATTEMPT TO START... |||" && pwd && cd /vercel/path0/apps/starter
```

Install command

```
cd /vercel/path0 && yarn install && yarn install && echo "||| YARN INSTALED |||" && pwd && cd /vercel/path0/apps/starter
```

Root directory

```
apps/starter
```
