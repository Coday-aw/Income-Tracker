import { connectDB } from "@/lib/mongoDB";
import { NextRequest, NextResponse } from "next/server";
import Income from "@/app/models/IncomeTrackerSchema";

export async function POST(req: NextRequest) {
  await connectDB();

  try {
    const { income_id, date, regular, overtime } = await req.json();

    if (
      !income_id ||
      !date ||
      regular === undefined ||
      overtime === undefined
    ) {
      return NextResponse.json(
        { message: "please fill all fields" },
        { status: 400 }
      );
    }

    const updatedIncome = await Income.findByIdAndUpdate(
      income_id,
      {
        $push: {
          hours_entries: { date, regular, overtime },
        },
      },
      { new: true }
    );

    if (!updatedIncome) {
      return NextResponse.json(
        { message: "Income not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        message: "Hours entry added successfully",
        income: updatedIncome,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error adding hours entry:", error);
    return NextResponse.json(
      { message: "Error adding hours entry" },
      { status: 500 }
    );
  }
}
