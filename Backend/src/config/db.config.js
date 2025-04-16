import mongoose from 'mongoose';

const Connect = async (req,res) =>{
    try {
        mongoose.connect(process.env.MongoDBURL,{
            // useNewUrlParser: true,
            // // useUnifiedTopology: true,
        })
        console.log('mongodb connected');
    } catch (error) {
        console.log("Error",error);
    }
}

export default Connect