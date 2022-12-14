module.exports = {
    launch: {
        headless: process.env.HEADLESS === "false" ? false : true,
        defaultViewport: null,
        args: ["--start-maximized"]
    },
    browserContext: process.env.INCOGNITO ? 'incognito' : 'default',
}