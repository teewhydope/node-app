const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
    res.write('welcome to my blog')
    res.end()
    }
  else if(req.url === '/about'){
        res.write('here is about page')
        res.end()
        }
    else  res.write(`
            <h1>Oops! something went wrong</h1>
            <a href="/"> Back to home </a>
       ` )
       res.end()
})
server.listen(5000)




