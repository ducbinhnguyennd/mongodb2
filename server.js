const express = require('express')
const app = express()

const ApiController = require('./api_app');

app.use('/api', ApiController)

const port = 3000
const SinhVienModel = require('./SinhVienModel');


const mongoose = require('mongoose');

const uri = 'mongodb+srv://duylh17:LYUw6K2jgVwoXBuC@cluster0.0n8qgpd.mongodb.net/md18101';

//const nvModel = require('./nhanvienModel');

app.get('/', async (req, res) => {

  await mongoose.connect(uri);

  console.log('Ket noi db thanh cong!')

  let sinhviens = await SinhVienModel.find();
  res.send(sinhviens);

  //await mongoose.connect(uri);

  //let nvs = await nvModel.find({tuoi: 23});

  //   console.log(nvs)

  //   res.send(nvs);
})

app.get('/add_sv', async (req, res) => {
  await mongoose.connect(uri);

  arrNewNv = [];

  let sv1 = {
    ten: 'Tran Phuong Anh',
    tuoi: 24,
    quequan: 'HP',
    diemTB: 8
  };

  arrNewNv.push(sv1);

  arrNewNv.push({
    ten: 'Nguyen Tuan Minh',
    tuoi: 25,
    quequan: 'HG',
    diemTB: 6
  });

  let kq = await SinhVienModel.collection.insertOne(sv1);

  console.log(kq);

  let sinhviens = await SinhVienModel.find();
  res.send(sinhviens);
})

app.get('/update_sv/:ten', async (req, res) => {

  await mongoose.connect(uri);

  console.log('Ket noi DB thanh cong');

  let tenSV = req.params.ten;
  console.log(tenSV);

  let tenSVMoi = tenSV + ' 123';

  await SinhVienModel.updateOne({ten: tenSV}, {ten: tenSVMoi, tuoi: 30, quequan: "HCM"});

  let sinhviens = await SinhVienModel.find({});

  res.send(sinhviens);

})

app.get('/xoa/:id', async (req, res) => {

  await mongoose.connect(uri);

  console.log('Ket noi DB thanh cong');

  let id = req.params.id;
  console.log(id);

  await SinhVienModel.deleteOne({_id: id});

  res.redirect('../')

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});