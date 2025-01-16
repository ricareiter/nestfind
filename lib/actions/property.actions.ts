"use server";
import { prisma } from "@/DB/prisma";

// Get the 4 latest properties
export async function getLatestProperties() {
  const data = await prisma.property.findMany({
    take: 6,
    orderBy: { createdAt: "desc" },
  });

  return data;
}
