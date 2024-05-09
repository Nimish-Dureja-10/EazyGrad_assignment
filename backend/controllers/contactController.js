import contact from "../model/contact.js";

export const contactDetails = async (req,res) => {
    try{
        const {name,email,mes} = req.body;
        if(!name || !email || !mes) {
            return res.status(401).json({
                success:false,
                message:"All fields are mandatory",
            });
        }
        const response = await contact.create({
            name,email,mes
        });

        response.save();
        res.status(201).json({
            success:true,
            message : "Recieved your contact details",
            response
        });
    }catch(error) {
        console.log(error);
        res.status(402).json({
            success:false,
            message : "Failed to contact us",
            error
        });
    }
};