/*
const args =['lister',1,2345];
*/
const prompt = require('prompt-sync')();
const args =  prompt("please enter a value");

if (args.length == 0) {
  console.log('No argument');
} else if (args.length == 1) {
  console.log('Argument found');
} else {
  console.log('Arguments found');
}
