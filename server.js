import http from 'http';
const PORT=8000;
const server=http.createServer((req,res)=>{
    //res.setHeader('Content-type','text/html');
    //status code
    //res.statusCode=404;
    //res.write("Heey Gracie");
    res.writeHead(500,{'Content-Type':'application/json'});

    //res.end('<h1>Hello Gracie</h1>');
    res.end(JSON.stringify({message:'Server Error'}))
})

server.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})