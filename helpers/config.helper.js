const ini = require('ini');
const fs = require('fs');
const path = require('path');

function getConfig() {
    const configPath = path.join(process.cwd(), 'config.ini');
    const config = ini.parse(fs.readFileSync(configPath, 'utf-8'));
    return config;
}

module.exports = { getConfig };
