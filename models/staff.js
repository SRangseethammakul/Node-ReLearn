const mongoose = require('mongoose');
const schema = new mongoose.Schema({
  name:  {
      type : String,
      require : true,
      trim : true
  },
  salary : {type : Number},
  created : {type : Date, default : Date.now},
},{collection : 'staffs'});

const Staff = mongoose.model('Staff', schema); //ชื่อต้อง match กันกับ db ใน db ควรเป็นพหูพจน์ ใน model เป็นคำนั้นไปเลย

module.exports = Staff