import mongoose from "mongoose";

const contactSchema = mongoose.Schema({
    name : {
        type :String,
        required : true
    },
    email : {
        type :String,
        required : true
    },
    mes : {
        type :String,
        required : true
    } 
});

export default mongoose.model("contact",contactSchema);