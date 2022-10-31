const detectPort = require('detect-port')
const inquirer = require('inquirer')
const DEFAULT_PORT = 8080

async function execute () {
  try {
    // 校验当前port是否被占用
    const newPort = await detectPort(DEFAULT_PORT)
    console.log(newPort, DEFAULT_PORT)
    if (newPort === DEFAULT_PORT) { // 如果默认端口跟
      console.log('enter')
      const questions = {
        type: 'input',
        name: 'answers',
        message: '请选择',
        // choices: ['1']
      }
      // console.log(inquirer.prompt, 'inquirer')
      // 加了这一行代码无法执行下去
      const result = await inquirer.prompt(questions)
      console.log(result, 'result')
    }
    console.log(newPort)
  } catch (err) {
    // process.exit(1)
    throw new Error(err.message)
  } finally {
    console.log('finally')
  }
}

execute()

// module.exports = {
//   execute
// }