import log from '@kengoldfarb/log'
import { updateDns } from './updateDns'

updateDns()
	.then(() => {
		log.info('DNS updated.')
		// process.kill(process.pid)
		process.exit(0)
	})
	.catch(err => {
		log.crit(err)
		process.exit(1)
	})
