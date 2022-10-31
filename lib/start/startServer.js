const chokidar = require('chokidar');
const path = require('path')
const cp = require('child_process');
const devServerPath = path.resolve(__dirname, 'devServer.js')
function runServer () { // 启动监听
  // const { execute } = require('./devServer')
  // execute()
  // cp.execFileSync(`${devServerPath}`)
  cp.execFile('node', [devServerPath], {}, (err, stdout, stderr) => {
    if (err) {
      console.log(err)
      throw err
    }
    console.log(stdout)
    console.log(stderr)
  })
}

function onChange (eventName, path, fsState) {
  console.log('onChange')
}

function runWatcher () { // 启动配置监听服务
  const configPath = path.resolve(__dirname, 'config.json')
  chokidar
    .watch(configPath, {
      cwd: path.resolve(__dirname)
    })
    .on('change', onChange)
    .on('error', () => {
      process.exit(1)
    })
}

module.exports = function (arg, options, cmd) {
  // 通过子进程启动webpack-dev-server服务
  // 子进程启动可以避免阻塞主进程
  // 子进程启动方便重启，解决配置修改后无法重启的问题(webpack-dev-server)
  try {
    // 1. 启动服务

    runServer()

    // 2. 监听配置修改
    // runWatcher()
  } catch {

  }
}