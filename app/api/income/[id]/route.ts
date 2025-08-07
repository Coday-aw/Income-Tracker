import { connectDB } from "@/lib/mongoDB";
import { NextRequest, NextResponse } from "next/server";
import Income from "@/app/models/IncomeTrackerSchema";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  await connectDB();

  try {
    const { id } = await params;

    if (!id) {
      return NextResponse.json(
        { message: "Income ID is required" },
        { status: 400 }
      );
    }

    const income = await Income.findById(id);

    if (!income) {
      return NextResponse.json(
        { message: "Income not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        message: "Income found successfully",
        income: income,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching income:", error);
    return NextResponse.json(
      { message: "Error fetching income" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  await connectDB();

  try {
    const { id } = await params;

    const deletedIncome = await Income.findByIdAndDelete(id);

    if (!deletedIncome) {
      return NextResponse.json(
        { message: "Income not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Income deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting income:", error);
    return NextResponse.json(
      { message: "Error deleting income" },
      { status: 500 }
    );
  }
}
