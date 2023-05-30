import log from '@kengoldfarb/log'
import * as ddns from 'cloudflare-dynamic-dns'

export async function updateDns(): Promise<string | undefined> {
	return new Promise((resolve, reject) => {
		const email = process.env.CLOUDFLARE_EMAIL
		const key = process.env.CLOUDFLARE_API_KEY
		const recordName = process.env.CLOUDFLARE_RECORD_NAME
		const zoneName = process.env.CLOUDFLARE_ZONE_NAME

		if (!email || !key || !recordName || !zoneName) {
			reject(new Error('Missing environment variables.'))
			return
		}

		const options = {
			auth: {
				email,
				key
			},
			recordName,
			zoneName
		}

		log.info('Updating DNS record', options)

		ddns.update(options, (err, newIp) => {
			if (err) {
				reject(err)
				return
			}

			resolve(newIp)
		})
	})
}
