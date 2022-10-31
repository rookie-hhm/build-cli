#! /usr/bin/env node
const { Command } = require('commander')
const pkg = require('../package.json')
const program = new Command()
const startServer = require('../lib/start/startServer')
// console.log(program)
program
  .name('rookie-build')
  .description('rookie-build build project')
  .version(pkg.version, '-v', 'output the version of cli')
program
  .command('build <name> [password]')
  .allowUnknownOption()
  .action((name, password) => {
    console.log(name, password)
  })
program
  .command('start')
  .description('start project')
  .action(() => {
    console.log('start')
    startServer()
  })
// program.exitOverride();
// program.error('Password must be longer than four characters');
// try {
//   program.parse(process.argv);
// } catch (err) {
//   // custom processing...
// }
console.log(program.commands[0]._name, program.commands[0].name())
program.parse(process.argv)
