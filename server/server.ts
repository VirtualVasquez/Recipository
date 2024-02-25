import * as express from 'express';
import routes from './src/routes';

const app = express();
const PORT = process.env.SERVER_PORT || 3001;

app.use('/api', routes);

app.get('/', (req, res) =>
    res.send(`Node and express server is running on port ${PORT}`)
);

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})