const mongoose = require('mongoose');

const SinhVienSchema = mongoose.Schema({
    ten: {
        type: String,
        required: true,
    },
    tuoi: {
        type: Number,
        required: true,
    },
    quequan: {
        type: String
    },
    diemTB: {
        type: Number,
        required: true,
    }
});

const SinhVienModel = new mongoose.model('sinhviens', SinhVienSchema); 

module.exports = SinhVienModel;