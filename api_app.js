const express = require('express')
const app = express()

app.route('/api')

module.exports = app


const bodyParser = require("body-parser");
app.use(bodyParser.json());

const parser = bodyParser.urlencoded({ extended: true });

app.use(parser);


const SinhVienModel = require('./SinhVienModel');


const mongoose = require('mongoose');

const uri = 'mongodb+srv://duylh17:LYUw6K2jgVwoXBuC@cluster0.0n8qgpd.mongodb.net/md18101';

//const nvModel = require('./nhanvienModel');

app.post('/add_sv', async (req, res) => {

    await mongoose.connect(uri);

    console.log('Ket noi db thanh cong!')

    let sv = {
        ten: req.body.ten,
        tuoi: req.body.tuoi,
        quequan: req.body.quequan,
        diemTB: req.body.diemTB
    };

    console.log(req.body)

    let kq = await SinhVienModel.collection.insertOne(sv);

    console.log(kq);

    let sinhviens = await SinhVienModel.find();
    res.send(sinhviens);
})


app.get('/list', async (req, res) => {

    await mongoose.connect(uri);

    console.log('Ket noi db thanh cong!')

    let sinhviens = await SinhVienModel.find();
    res.send(sinhviens);

    //await mongoose.connect(uri);

    //let nvs = await nvModel.find({tuoi: 23});

    //   console.log(nvs)

    //   res.send(nvs);
})