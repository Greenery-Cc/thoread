const child_process = require('child_process')

console.log(process.pid)
// let child = child_process.exec('node ./son.js',(error,stdout,stderr)=>{
//     console.log("=======>",error)
//     console.log("=======>",stdout)
//     console.log("=======>",stderr)
// })

// console.log(child.pid)

let child1 = child_process.spawn('node',['./son.js'])

child1.stdout.on('data',data=>{
    console.log('stdout=====>',data)
})

child1.stderr.on('data',data=>{
    console.log('stderr=====>',data)
})

console.log(child1.pid)