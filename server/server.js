const express = require('express');
const port = process.env.PORT || 3001;

const genPdf = require('./genPdf'); // PARAMETERS: (url, filePath, format, deviceType)
const consoleTest = require('./consoleTest');

const server = express();
server.use(express.json());

server.post('/generate-pdf', (req, res) => {
    const { url, filePath } = req.body;
    const fullFilePath = __dirname + filePath;
    genPdf(url, fullFilePath)
        .then(() => res.sendFile(fullFilePath))
        .catch((err) => console.log("--generate-pdf: There was an error generating the PDF", err));
});

server.post('/generate-pdf/more-details', (req, res) => {
    const { url, filePath, format, deviceType } = req.body;
    const fullFilePath = __dirname + filePath;
    genPdf(url, fullFilePath, format, deviceType)
        .then(() => res.sendFile(fullFilePath))
        .catch((err) => console.log("--generate-pdf/more-details: There was an error generating the PDF", err));
});

server.get('/test-iteration', (req, res) => {
    consoleTest()
        .then(() => res.send('made it'))
        .catch(err => console.log('error in testing'));
});

server.listen(port, () => console.log(`The server is listening on port ${port}`));
server.listen()

// TODO check onConsoleMessage
// TODO see about refactoring with a promise chain
// Check on how to get console messages backws