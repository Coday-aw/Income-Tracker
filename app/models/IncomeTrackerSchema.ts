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
    incomeTitle: { type: String, required: true },
    hourlyPay: { type: Number, required: true },
    taxCode: { type: Number, required: true },
    hours_entries: { type: [hoursEntriesSchema] },
  },
  { timestamps: true }
);

const Income = mongoose.models.Income || mongoose.model("Income", IncomeSchema);

export default Income;
