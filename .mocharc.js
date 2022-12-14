module.exports = {
    timeout: 40000,
    retries: 3,
    reporter: 'node_modules/mochawesome',
    'reporter-option': [
        'overwrite=false',
        'charts=true',
        'reportDir=test-report',
        'reportFilename=[status]_[datetime]-[name]-report',
        'json=false',
        'saveJson=false'
    ],
}