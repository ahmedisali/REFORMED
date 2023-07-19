const path = require('path');
const getAllFiles = require('./getAllFiles');

module.exports = (exceptions= []) => {
  let localCommands = [];

  const commmandCategories = getAllFiles(
    path.join(__dirname, '..', 'commands'),
    true
  );

  for (const commmandCategory of commmandCategories){
    const commandFiles = getAllFiles(commmandCategory);

    for (commandFile of commandFiles){
        const commandObject = require(commandFile);


        if(exceptions.includes(commandObject.name)){
            continue;
        }
        
        console.log(commandObject);
        localCommands.push(commandObject);
    }
  }

  return localCommands;
};
