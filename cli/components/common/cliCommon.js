const chalk = require('chalk');

function welcomeMessage() {
    console.log(chalk.yellow('--------------------------------------'));
    console.log(chalk.bold.green('   Welcome to Robot Panel!   '));
    console.log(chalk.yellow('--------------------------------------'));
    console.log('To get started, follow these steps:');
}

function showHelp() {
    console.log(chalk.cyan('--------------------------------------'));
    console.log(chalk.bold.cyan('Robot CLI Help:'));
    console.log(chalk.cyan('--------------------------------------'));
    console.log(chalk.yellow('  1. Choose a language for the robot (S/E for Swedish/English).'));
    console.log(chalk.yellow('  2. Choose a room shape (S/C for square/circular).'));
    console.log(chalk.yellow('  3. Specify room details.'));
    console.log(chalk.yellow('  4. Set the starting position.'));
    console.log(chalk.yellow('  5. Enter a command for the robot.'));
    console.log(chalk.yellow('  6. Start, stop, and continue the robot.'));
    console.log(chalk.yellow('  7. You can add a new set of commands, and the robot will continue from the last position.'));
    console.log(chalk.yellow('  8. Key Options:'));
    console.log(chalk.yellow('     - "s + Enter": Stop'));
    console.log(chalk.yellow('     - "c + Enter": Continue'));
    console.log(chalk.yellow('     - "r + Enter": History'));
    console.log(chalk.yellow('     - "n + Enter": New Command'));
    console.log(chalk.yellow('     - "h + Enter": Help'));
    console.log(chalk.yellow('     - "e + Enter": Exit'));
    console.log(chalk.cyan('--------------------------------------'));
}

module.exports = {
    welcomeMessage,
    showHelp,
};
