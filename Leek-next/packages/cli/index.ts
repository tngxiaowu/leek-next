// 如何注册一个全局指令 
// 专门解析命令行使用的
const minimist = require('minimist');
// 用于显示控制台的字体颜色
const chalk = require('chalk');
const { DOCUMENT_PATH } = require('./constants/path.ts');

const args = (process.argv || []).slice(2);
const commandName = args[0] || '';
if (commandName === '') {
    // TODO: 可以设置一个输出的类
    // 命令行输入
    console.log(
      `${chalk.red(
        "leek-cli is a fast and easy-use cli."
      )} you can learn more in: ${chalk.red(DOCUMENT_PATH.LEEK_HOME)}`
    );
    // 当没有其他异步操作挂起时 node通常以0状态码退出
    process.exit(0);
}
const parsedArgs = minimist(args);
// const { _ } = parsedArgs;

// 解析指令


// 注册指令
const executeCommand = (commandName: string) => {
  try {
    // 动态化的加载指令的执行
    // 根据指令名去寻找相关文件
    // 如果找到了 然后根据指令格式进行解析
    
    console.log("executeCommand", commandName);
  } catch (e) {
    console.log("执行出错");
  }
};

executeCommand(commandName);




