import db from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { itemName, category, quantityInStock, reorderLevel, unitPrice, supplier } = await request.json();

  await db`INSERT INTO inventory (name, category, quantity, reorder, price, supplier) VALUES (${itemName}, ${category}, ${quantityInStock}, ${reorderLevel}, ${unitPrice}, ${supplier})`

  return NextResponse.json({message: "Inserted values"})
}
