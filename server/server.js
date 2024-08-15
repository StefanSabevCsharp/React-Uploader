const express = require("express");
const fileUpload = require("express-fileupload");
const path = require("path");

const app = express();
app.use(fileUpload());
const uploadPath = path.join(__dirname, '..', 'client', 'public', 'uploads');

app.post("/upload", (req,res) => {
    if(req.files === null){
        return res.status(400).json({msg: "No file uploaded"});
    }
    const file = req.files.file;
    const filePath = path.join(uploadPath, file.name);

    file.mv(filePath,err => { 
        if(err){
            console.error(err);
            return res.status(500).send(err);
        }
        res.json({fileName: file.name, filePath: `/uploads/${file.name}`});
    })

})

app.listen(5000, () => {
    console.log("Server is running on port 5000");
})