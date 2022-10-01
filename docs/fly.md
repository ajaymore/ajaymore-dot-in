---
sidebar_label: 'fly.io'
sidebar_position: 4
---

```
flyctl launch --name fly-ghost-now --image=ghost:5-alpine --region maa --no-deploy
flyctl volumes create ghost_data --region maa --size 1
flyctl secrets set url=https://fly-ghost-now.fly.dev
flyctl secrets set -a fly-ghost-now NODE_ENV=development
fly secrets set database__connection__filename=/var/lib/ghost/content/data/ghost-dev.db
flyctl launch
```