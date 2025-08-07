import mongoose from "mongoose";

const hoursEntriesSchema = new mongoose.Schema(
  {
    date: { type: Date, default: null },
    regular: { type: Number, default: 0, min: 0 },
    overtime: { type: Number, default: 0, min: 0 },
  },
  { timestamps: true }
);

const IncomeSchema = new mongoose.Schema(
  {
    creator: { type: String, required: true },
    income_title: { type: String, required: true },
    hourly_pay: { type: Number, required: true },
    tax_code: { type: Number, required: true },
    hours_entries: { type: [hoursEntriesSchema] },
  },
  { timestamps: true }
);

const Income = mongoose.models.Income || mongoose.model("Income", IncomeSchema);

export default Income;
