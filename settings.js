module.exports = {
    uiPort: process.env.PORT || 1880,
    
    userDir: '/opt/render/project/src/.node-red-data',
    nodesDir: '/opt/render/project/src/.node-red-data/nodes',
    
    flowFile: '/opt/render/project/src/flows.json',
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
