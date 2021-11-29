module.exports = (app) => {

app.get('/', function(req, res){
    res.send(
        `
        <html>
            <meta charset="utf-8"/>
            <head></head>

            <body>
                <h1> Casa do Codigo  teste</h1>
            </body>
        </html>`
    )

    
})

app.get('/livros', function(req, res){
    res.marko(
        require('../views/livros/listagem.marko')
    )
})

}