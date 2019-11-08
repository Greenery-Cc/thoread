#! /usr/bin/env node

const child_process = require('child_process')

let path = require('path')
let fs = require('fs')
//拼接路径??
let filename = path.join(__dirname,process.argv[2])

let childProcess = createProcess()

function createProcess(){
    //判断一下路径存不存在
    if(fs.existsSync(filename)){
        //存在
        let child = child_process.spawn('node',[filename]);
        child.stdout.on('data',data=>{
            console.log(data)
        })
        child.stderr.on('data',data=>{
            console.log(data)
        })
        return child
    }else{
            console.log('此路径不存在')
    }
}


let water = fs.watch(filename)

water.on('change',()=>{
        //杀死紫禁城
        childProcess.kill();
        //创建一个新的 紫禁城
        childProcess = createProcess()
})