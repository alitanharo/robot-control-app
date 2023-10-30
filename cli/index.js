const getStartingPosition = require('./components/userInputStream/getStartingPosition');
const getCommandString = require('./components/userInputStream/getCommandString');
const setupRoomDetails = require('./components/roomActions/setupRoomDetails');
const chooseLanguage = require('./components/userInputStream/chooseLanguage');
const { welcomeMessage, showHelp } = require('./components/common/cliCommon')
const languageOptions = require('./components/options/languageOptions');
const nextCommand = require('./components/userInputStream/nextCommand');
const controlOptions = require('./components/options/controlOptions');
const shapeOptions = require('./components/options/shapeOptions');
const setupRoom = require('./components/roomActions/setupRoom');
const onRobot = require('./components/robotActions/onRobot');
const showErrorAndContinue = require('./utils/cliUtils');


const components = {
    showErrorAndContinue,
    languageOptions,
    shapeOptions,
    setupRoom,
    setupRoomDetails,
    getStartingPosition,
    getCommandString,
    onRobot,
    nextCommand,
    controlOptions,
    chooseLanguage,
    welcomeMessage,
    showHelp,
};


module.exports = components;