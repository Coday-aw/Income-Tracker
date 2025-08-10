import { connectDB } from "@/lib/mongoDB";
import { NextRequest, NextResponse } from "next/server";
import Income from "@/app/models/IncomeTrackerSchema";
import { json } from "stream/consumers";
// add types to expected data

export async function POST(req: NextRequest) {
  await connectDB();

  try {
    const { income_id, date, regular, overtime, overtime_compensation } =
      await req.json();

    if (
      !income_id ||
      !date ||
      regular === undefined ||
      overtime === undefined ||
      overtime_compensation == undefined
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
          hours_entries: { date, regular, overtime, overtime_compensation },
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

// export async function DELETE(req: NextRequest) {
//   await connectDB();

//   try {
//     const { _id, date, regular, overtime } = await req.json();

//     if (!_id || !date || !regular || !overtime) {
//       return NextResponse.json(
//         { message: "all fields are required" },
//         { status: 400 }
//       );
//     }

//     const deletedData = await Income.findByIdAndDelete(_id, {});
//   } catch (error) {}
// }
