const semanticReleaseConfig = require('@kengoldfarb/semantic-release-config')

const config = semanticReleaseConfig.default({
	config: 'app',
	branches: [
		'main',
		{ name: 'alpha', prerelease: true },
		{ name: 'qa', prerelease: true },
		{ name: 'dev', prerelease: true }
	]
})

module.exports = config
