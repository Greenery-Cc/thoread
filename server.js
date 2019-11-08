const http = require('http')

let fs = require('fs')
let path = require('path')

let server = http.createServer((request, response) => {
    if (request.url === '/json') {
        response.writeHead(200, { 'Content-Type': 'application/json' })
        response.end(JSON.stringify({ code: 1, list: [1, 2, 3, 4] }))
    } else if (request.url === '/text') {
        response.writeHead(200, { 'Content-Type': 'text/plain' })
        response.end('text')
    } else if (request.url === '/jpg') {
        response.writeHead(200, { 'Content-Type': ' image/jpeg' })
        let imgBUF = fs.readFileSync('./p.jpg')
        response.end(imgBUF)
    }
})

server.listen(process.env.PORT || 3000, () => {
    console.log('服务启动成功' + '3000')
})


//设置请求头两种方式
// writeHead(状态码,{'Content-Type','text/plain'})

// setHeader('Content-Type','text/plain')

