const commands = [{
    name: 'generate',
    description: '用于创建组件/页面/hooks等的快捷命令',
}];

const commandNames = commands.map((command) => command.name);


module.exports = {
    commands,
    commandNames,
}

export {};