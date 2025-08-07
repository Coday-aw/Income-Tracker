import { connectDB } from "@/lib/mongoDB";
import { NextRequest, NextResponse } from "next/server";
import Income from "@/app/models/IncomeTrackerSchema";

interface IncomeRequestBody {
  creator: string;
  income_title: string;
  hourly_pay: number;
  tax_code: number;
  hours_entries?: {
    date: Date;
    regular: number;
    overtime: number;
  }[];
}

export async function POST(req: NextRequest) {
  await connectDB();
  try {
    const {
      creator,
      income_title,
      hourly_pay,
      tax_code,
      hours_entries,
    }: IncomeRequestBody = await req.json();
    if (!creator || !income_title || !hourly_pay || !tax_code) {
      return NextResponse.json(
        { message: "All required fields must be provided" },
        { status: 400 }
      );
    }

    const newIncome = await Income.create({
      creator,
      income_title,
      hourly_pay,
      tax_code,
      hours_entries: hours_entries || [],
    });

    return NextResponse.json(
      {
        message: "Income created successfully",
        income: newIncome,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error creating Income" },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  await connectDB();

  try {
    const { searchParams } = new URL(req.url);
    const creatorId = searchParams.get("creator");

    if (!creatorId) {
      return NextResponse.json(
        { message: "creator parameter is required" },
        { status: 400 }
      );
    }

    const incomes = await Income.find({ creator: creatorId });

    return NextResponse.json(
      { message: "All incomes", incomes: incomes },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "error fetching incomes" },
      { status: 500 }
    );
  }
}
