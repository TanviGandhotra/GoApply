//yha hmne database connect kra
// utils folder mei hm vo dalte jo fucntion usable hota bhut per rout per depoedn na krta

import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('mongodb connected successfully');
    } catch (error) {
        console.log(error);
    }
}
export default connectDB;