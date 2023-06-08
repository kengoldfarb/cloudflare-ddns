const semanticReleaseConfig = require('@kengoldfarb/semantic-release-config')

const config = semanticReleaseConfig.default({
	config: {
		app: {
			branches: [
				'main',
				{ name: 'alpha', prerelease: true },
				{ name: 'qa', prerelease: true },
				{ name: 'dev', prerelease: true }
			]
		},
		package: {
			npmPublish: true,
			branches: [
				{ name: 'dev', channel: 'beta' },
				{ name: 'canary', prerelease: true },
				{ name: 'prerelease-*', prerelease: true }
			],
			// eslint-disable-next-line no-template-curly-in-string
			releaseMessage: 'chore(release): ${nextRelease.version} [skip-ci-version]'
		}
	}
})

module.exports = config
