const http = require("http")

let html = ""

const servidor = http.createServer(function (req, res) {

    if(req.url == "/"){
        html = `
                <html>
                    <meta charset="utf-8"/>
                    <head></head>

                    <body>
                        <h1> Casa do Codigo </h1>
                    </body>
                </html>`;
    }else if(req.url == '/livros'){
        html = `
        <html>
            <meta charset="utf-8"/>
            <head></head>

            <body>
                <h1> listagem de livros </h1>
            </body>
        </html>`;
    }

    res.end(html)

});

servidor.listen(3000);
