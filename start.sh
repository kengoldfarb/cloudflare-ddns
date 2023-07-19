#!/usr/bin/env bash
export CLOUDFLARE_EMAIL=me@example.com
export CLOUDFLARE_API_KEY=c000000000000000000000000000000000000
export CLOUDFLARE_ZONE_NAME=example.com
export CLOUDFLARE_RECORD_NAME=myserver.example.com

/Users/ken/.nvm/versions/node/v20.3.0/bin/node /Users/ken/projects/cloudflare-ddns/build/start.js