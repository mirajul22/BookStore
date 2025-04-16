import mongoose from "mongoose";

const BookSchema = mongoose.Schema({
    name:String,
    price:Number,
    category:String,
    image:String,
    tittle:String,
    des:String
})

const BookModel = mongoose.model('book',BookSchema);

export default BookModel