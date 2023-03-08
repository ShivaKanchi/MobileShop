import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
    username: { type: String, required: true },
    phone: { type: Number, required: true },
    email: { type: String, },
    address: { type: String, },

})
export const UserModel = mongoose.model("mobiles", UserSchema)