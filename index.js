const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const middleware = require('./middleware')
const multer = require('multer')
const fs = require('fs')
const path = require('path');

const app = express()

const PORT = 5000

app.use(cors())
app.use(bodyParser.json())
app.use(middleware.decodeToken);

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: storage });

/**
 * GET REQUESTS
 */

// API endpoint for listing files
app.get('/list', (req, res) => {
    const directoryPath = path.join(__dirname, './uploads');

    fs.readdir(directoryPath, (err, files) => {
        if (err) return res.status(500).send(err);

        files = files.filter(file => fs.statSync(path.join(directoryPath, file)).isFile());

        res.status(200).json(files);
    });
});


// API endpoint for downloading files
app.get('/download/:filename', (req, res) => {
    const fileName = req.params.filename;
    const filePath = path.join(__dirname, './uploads/' + fileName);

    if (!fs.existsSync(filePath)) {
        return res.status(404).send('File not found!');
    }

    res.download(filePath, fileName);
});


/**
 * POST REQUESTS
 */

app.post('/upload', upload.single('file'), (req, res) => {
    if(!req.is_authenticated){
        return res.status(403).send("Signup is required to upload!")
    }
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }
    return res.status(200).send('File uploaded successfully!');
});


app.listen(PORT, ()=>{
    console.log(`Server started on PORT: ${PORT}`)
})