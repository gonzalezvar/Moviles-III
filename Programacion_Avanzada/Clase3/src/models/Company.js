import mongoose, { Schema } from "mongoose";

const Shema = mongoose.Schema;

const Company = new Schema({
    category_code:{ type: String, required: true },
    number_of_employees: { type: Number, required: true },
    founded_year: { type: Number, required: true },
    founded_month: { type: Number, required: true },
    founded_day: { type: Number, required: true }
});

const CompanyModel = mongoose.model('avanzada',Company);
export default CompanyModel;