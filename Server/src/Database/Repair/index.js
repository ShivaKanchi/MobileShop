import mongoose from "mongoose";
const RepairSchema = new mongoose.Schema({
    repairname: { type: String, required: true },
    issue: { type: Number, required: true },
    issueddate: { type: String, },
    availdate: { type: String, },
    customername: { type: String, },
    customerphone: { type: Number, },
    customer: { type: Ob }

})
export const RepairModel = mongoose.model("mobiles", RepairSchema)