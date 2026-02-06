// convex/schema.ts
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  bookings: defineTable({
    fullname: v.string(),
    phone: v.string(),
    email: v.string(),
    type: v.string(),
    brand: v.string(),
    vin: v.string(),
    date: v.string(),
    time: v.string(),
    description: v.string(),
    createdAt: v.number(),
  }),
});
