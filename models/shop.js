const mongoose = require('mongoose');
const schema = new mongoose.Schema({
  name:  {
      type : String,
      require : true,
      trim : true
  },
  photo : {type : String, default : 'nopic.png'},
  location : {
      lat : Number,
      lgn : Number
  },
},{
    toJSON : {virtuals : true},
    timestamps : true,
    collection : 'shops'
});

schema.virtual('menus', {
    ref : 'Menu', //link ไปหา model menu
    localField : '_id', //_id ฟิลด์ของโมเดล Shop (ไฟล์นี้)
    foreignField : 'shop' // shop คือ fk
})

const shop = mongoose.model('Shop', schema); //ชื่อต้อง match กันกับ db ใน db ควรเป็นพหูพจน์ ใน model เป็นคำนั้นไปเลย

module.exports = shop