const fs = require('fs');
const path = require('path');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
    webpack: {
        alias: {
            app: resolveApp("src/app"),
            api: resolveApp("src/api"),
            actions: resolveApp("src/actions"),
            reducers: resolveApp("src/reducers"),
            components: resolveApp("src/components"),
            context: resolveApp("src/context")
        }
    },
}