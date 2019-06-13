const express = require('express');
const port = process.env.PORT || 3001;

const genPdf = require('./genPdf'); // PARAMETERS: (url, filePath, deviceType, format)

const server = express();
server.use(express.json());

server.post('/generate-pdf', (req, res) => {
    const { url, filePath } = req.body;
    const fullFilePath = __dirname + filePath;

    genPdf(url, fullFilePath);
    res.sendFile(fullFilePath);
});

server.listen(port, () => console.log(`The server is listening on port ${port}`));
server.listen()
