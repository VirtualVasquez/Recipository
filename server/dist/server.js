"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const routes_1 = require("./src/routes");
const app = express();
const PORT = process.env.SERVER_PORT || 3001;
app.use('/api', routes_1.default);
app.get('/', (req, res) => res.send(`Node and express server is running on port ${PORT}`));
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
