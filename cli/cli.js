const readline = require('readline');
const CLIApp = require('./app');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const components = require('./index');

const cli = new CLIApp(rl, components);

cli.startCLI();
