#!/usr/bin/env groovy
def jenkinsfile

def overrides = [
    scriptVersion  : 'v7',
    pipelineScript: 'https://git.aurora.skead.no/scm/ao/aurora-pipeline-scripts.git',
    npmInstallCommand: "ci",
    nodeVersion: "16",
    iq: false,
    disableAllReports: true,
    versionStrategy: [
      [ branch: 'master', versionHint: '0']
    ],
    github: [
      enabled: env.BRANCH_NAME == "master",
      deployToGHPagesCmd: "npm run deploy"
    ]
]

fileLoader.withGit(overrides.pipelineScript, overrides.scriptVersion) {
  jenkinsfile = fileLoader.load('templates/webleveransepakke')
}

jenkinsfile.run(overrides.scriptVersion, overrides)