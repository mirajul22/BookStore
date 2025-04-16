import BookModel from "../models/book.model.js";

export async function getBook(req,res){
    try {
        const BookData = await BookModel.find();
        res.status(200).json(BookData)
    } catch (error) {
        console.log("Error",error);
        res.status(500).json({
            error:"something went wrong",
            message:"data not found ",
            data:null
        })
    }
}
