const express = require("express")
const server = express()

// configurar pasta publica
server.use(express.static("public"))


// utilizando template engine

const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache:true
})


// configurar caminhos da minha aplicação
// página inicial
// req = requisição
// res=resposta

server.get("/", (req, res) => {
    return res.render(__dirname + "/views/index.html",{title: "um titulo"} )
})
server.get("/create-point", (req, res) => {
    return res.render(__dirname + "/views/create-point.html")
})
server.get("/search-results", (req, res) => {
    return res.render(__dirname + "/views/search-results.html")
})

// Ligar o servidor
server.listen(3000)