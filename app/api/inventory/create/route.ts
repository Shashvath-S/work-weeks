import { authOptions } from "@/app/lib/AuthOptions";
import db from "@/app/lib/db";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { itemName, category, quantityInStock, reorderLevel, unitPrice, supplier } = await request.json();

  const session = await getServerSession(authOptions);

  await db`INSERT INTO inventory (name, category, quantity, reorder, price, supplier, admin_id) VALUES (${itemName}, ${category}, ${quantityInStock}, ${reorderLevel}, ${unitPrice}, ${supplier}, ${session?.user.id})`

  return NextResponse.json({message: "Inserted values"})
}
