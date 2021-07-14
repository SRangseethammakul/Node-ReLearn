const mongoose = require('mongoose');
const schema = new mongoose.Schema({
  name:  String,
  address: {
      province : String,
      country : String
  },
},{collection : 'companies'});

const Company = mongoose.model('Company', schema); //ชื่อต้อง match กันกับ db ใน db ควรเป็นพหูพจน์ ใน model เป็นคำนั้นไปเลย

module.exports = Company