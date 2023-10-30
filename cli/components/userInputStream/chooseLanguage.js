const { initializeRobot } = require('../../../app/index');
const chalk = require('chalk'); 

function chooseLanguage(rl, languageOptions, setupRoomCLI, showErrorAndContinue) {
    rl.question('Choose a language for the robot (S/E for Swedish/English): ', (language) => {
        const lang = language.toLowerCase();
        if (languageOptions[lang]) {
            initializeRobot(languageOptions[lang]);
            console.log(chalk.green('The Robot is set!')); 
            console.log(chalk.blue('Please continue with setting up your customized Room details.')); 
            setupRoomCLI();
        } else {
            console.log(chalk.red('Invalid language selection. Please choose S for Swedish or E for English.')); 
            showErrorAndContinue('Invalid language selection. Please choose S for Swedish or E for English.',
                () => chooseLanguage(rl, languageOptions, setupRoomCLI, showErrorAndContinue)
            );
        }
    });
}

module.exports = chooseLanguage;
