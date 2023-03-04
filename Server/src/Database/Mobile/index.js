import mongoose from "mongoose";
const MobileSchema = new mongoose.Schema({
    mobilename: { type: String, required: true },
    price: { type: Number, require: true }
})
export const MobileModel = mongoose.model("mobiles", MobileSchema)