const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const schema = new Schema({
  name:  {
      type : String,
      require : true,
      trim : true
  },
  price : Number,
  shop : {type : Schema.Types.ObjectId, ref : 'Shop'}
},{
    toJSON : {virtuals : true}, 
    timestamps : true,
    collection : 'menus'
});
schema.virtual('price_vat').get(function() {
    return (this.price*0.07)+this.price;
  });
const menu = mongoose.model('Menu', schema); //ชื่อต้อง match กันกับ db ใน db ควรเป็นพหูพจน์ ใน model เป็นคำนั้นไปเลย

module.exports = menu