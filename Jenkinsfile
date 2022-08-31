#!/usr/bin/env groovy
def jenkinsfile

def overrides = [
    scriptVersion  : 'v7',
    pipelineScript: 'https://git.aurora.skead.no/scm/ao/aurora-pipeline-scripts.git',
    iqOrganizationName: "Team AOS",
    iqBreakOnUnstable: false,
    iqEmbedded: true,
    versionStrategy: [
      [ branch: 'master', versionHint: '0']
    ],
    sonarQube: false,
    npmInstallCommand: "ci",
    nodeVersion: "16",
    github: [
      enabled: env.BRANCH_NAME == "master",
      deployToGHPagesCmd: "npm run deploy"
    ]
]

fileLoader.withGit(overrides.pipelineScript, overrides.scriptVersion) {
  jenkinsfile = fileLoader.load('templates/webleveransepakke')
}

jenkinsfile.run(overrides.scriptVersion, overrides)