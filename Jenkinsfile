#!/usr/bin/env groovy
def jenkinsfile

def overrides = [
    scriptVersion  : 'v7',
    credentialsId: "github",
    pipelineScript: 'https://git.aurora.skead.no/scm/ao/aurora-pipeline-scripts.git',
    iqOrganizationName: "Team AOS",
    versionStrategy: [
        [ branch: 'main', versionHint: '1']
    ],
    sonarQube: false,
    npmInstallCommand: "ci",
    nodeVersion: "10",
    github: [
      enabled: true,
      deployToGHPagesCmd: "npm run deploy"
    ]
]

fileLoader.withGit(overrides.pipelineScript, overrides.scriptVersion) {
  jenkinsfile = fileLoader.load('templates/webleveransepakke')
}

jenkinsfile.run(overrides.scriptVersion, overrides)
