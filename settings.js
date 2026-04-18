module.exports = {
    uiPort: process.env.PORT || 1880,
    
    userDir: '/tmp/node-red-data',
    nodesDir: '/tmp/node-red-data/nodes',
    
    flowFile: 'flows.json',
    flowFilePretty: true,
    
    
    editorTheme: {
        projects: {
            enabled: false
        }
    },
    
    logging: {
        console: {
            level: "info",
            metrics: false,
            audit: false
        }
    }
}
