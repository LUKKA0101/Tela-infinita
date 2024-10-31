import express from "express";
import helmet from "helmet";
import path from "path";

const app = express();

const port = 3000
app.listen(port, ()=> {
    console.log("server rodando na porta 3000")
})


app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, './src')))
app.use(express.urlencoded({extended: true}))
app.use(helmet());

app.get('/', (req, res)=> {
    res.sendFile(path.join(__dirname, '../public', 'index.html'))
})