// convex/bookings.ts
import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const createBooking = mutation({
  args: {
    fullname: v.string(),
    phone: v.string(),
    email: v.string(),
    type: v.string(),
    brand: v.string(),
    vin: v.string(),
    date: v.string(),
    time: v.string(),
    description: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("bookings", {
      ...args,
      createdAt: Date.now(),
    });
  },
});
