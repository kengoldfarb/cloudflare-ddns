# Cloudflare Dynamic DNS

Use Cloudflare's API to dynamically update your DNS records. Optionally install a MacOS service to automatically keep your DNS updated.

## Usage

Install packages

```yarn```

Build
```yarn build```

Update the variables and paths in `start.sh`

> You can get your API key here: https://dash.cloudflare.com/profile/api-tokens
>
> Note that you need to use the **Global API Key**

Run the script

```./start.sh```

## Installing the service to automatically update your DNS periodically

### MacOS

Copy the file `./src/codes.ken.ddns.plist` to `~/Library/LaunchAgents`

Edit the plist file to update the path to the `start.sh` script:

```
<string>/Users/ken/projects/cloudflare-ddns/start.sh</string>
```

Install the script

```launchctl load -w ~/Library/LaunchAgents/codes.ken.ddns.plist```
