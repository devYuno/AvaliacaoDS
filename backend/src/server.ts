import express from 'express';
import routes from "./routes/routes"
import 'dotenv/config'
import cors from 'cors'

const app = express();
const port = 8080;

app.use(cors({
    origin: '*'
}))

routes(app)

app.listen(port, () => console.log(`Acesse: http://localhost:${port}/`));

app.get('/', (req, res) => {
    res.status(200).send({response : "Sucesso ao Carregar a pagina"})
})
