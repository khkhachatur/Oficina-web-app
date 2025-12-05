"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { CAR_TYPES } from "@/src/lib/constants";


import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/src/components/ui/form";

import { Input } from "@/src/components/ui/input";
import { Textarea } from "@/src/components/ui/textarea";
import { Button } from "@/src/components/ui/button";
import { Checkbox } from "@/src/components/ui/checkbox";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/src/components/ui/select";

const BookingSchema = z.object({
    fullname: z.string().min(3, "Full name is required"),
    phone: z.string().min(6, "Phone number is required"),
    email: z.string().email("Invalid email"),
    type: z.string().min(1, "Select a type"),
    brand: z.string().min(2, "Brand / Model required"),
    vin: z
  .string()
  .length(17, "VIN must be exactly 17 characters")
  .regex(/^[A-HJ-NPR-Z0-9]+$/, "VIN must be alphanumeric (no I, O, Q)"),
    date: z.string().min(1, "Choose a date"),
    time: z.string().min(1, "Select a time"),
    description: z.string().min(5, "Description required"),
    agreement: z.boolean().refine(val => val === true, {
      message: "You must agree to be contacted",
    }),
  });


export default function BookPage() {
    const form = useForm({
        resolver: zodResolver(BookingSchema),
        defaultValues: {
            fullname: "",
            phone: "",
            email: "",
            type: "",
            brand: "",
            vin: "",
            date: "",
            time: "",
            description: "",
            agreement: false,
          },
    });
    
    const [showEmailHint, setShowEmailHint] = useState(false);
    
    const onSubmit = (values: any) => {
        console.log("Submitted:", values);
        setShowEmailHint(true);
        alert("Your request has been submitted!");
      };

  return (
    <div className="container py-20">
      <h1 className="text-4xl font-bold text-yellow-500 text-center mb-10">
        Book Your Maintenance
      </h1>

      <div className="max-w-3xl mx-auto bg-black/40 p-10 rounded-2xl border border-gray-700">

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

            <FormField
              control={form.control}
              name="fullname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="form-label">Full Name <span className="text-yellow-500">*</span></FormLabel>
                  <FormControl>
                    <Input placeholder="Your Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="form-label">Phone Number <span className="text-yellow-500">*</span></FormLabel>
                  <FormControl>
                    <Input placeholder="Phone Number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
                <FormItem>
                <FormLabel className="form-label">
                    Email <span className="text-yellow-500">*</span>
                </FormLabel>
                <FormControl>
                    <Input placeholder="email@example.com" {...field} type="email" />
                </FormControl>
                {showEmailHint && (
                    <p className="text-sm text-gray-400 mt-1">
                    Make sure that you get the confirmation email.  
                    If not, check your email address is filled in correctly.
                    </p>
                )}
                <FormMessage />
                </FormItem>
            )}
            />

            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="form-label">Type <span className="text-yellow-500">*</span></FormLabel>
                  <Select onValueChange={field.onChange}>
                    <FormControl  className="text-gray-500">
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                    {CAR_TYPES.map(({ value, name }) => (
                        <SelectItem className="text-gray-500" key={value} value={value}>
                            {name}
                        </SelectItem>
                    ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="brand"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="form-label">Brand / Model <span className="text-yellow-500">*</span></FormLabel>
                  <FormControl>
                    <Input placeholder="Toyota Hilux, BMW 320i, etc." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="vin"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="form-label">VIN Number <span className="text-yellow-500">*</span></FormLabel>
                  <FormControl>
                    <Input placeholder="17-character code" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="form-label">Preferred Date</FormLabel>
                  <FormControl  className="text-gray-500">
                    <Input type="date" {...field} />
                  </FormControl>
                  <p className="text-sm text-gray-400">
                    Later this will sync with Google Calendar availability.
                  </p>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
            control={form.control}
            name="time"
            render={({ field }) => (
                <FormItem>
                <FormLabel className="form-label">
                    Preferred Time <span className="text-yellow-500">*</span>
                </FormLabel>
                <Select onValueChange={field.onChange}>
                    <FormControl  className="text-gray-500">
                    <SelectTrigger>
                        <SelectValue placeholder="Select time" />
                    </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                    {["08:00", "10:00", "12:00", "14:00", "16:00"].map((t) => (
                        <SelectItem key={t} value={t}>
                        {t}
                        </SelectItem>
                    ))}
                    </SelectContent>
                </Select>
                <FormMessage />
                </FormItem>
            )}
            />


            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="form-label">Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe the issue or maintenance required..."
                      className="h-32"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="agreement"
              render={({ field }) => (
                <FormItem className="flex items-center gap-3">
                  <FormControl>
                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                  <FormLabel className="form-label cursor-pointer" >
                    I agree to be contacted about my appointment.
                  </FormLabel>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="yellow-btn w-full text-lg py-4">
              Submit Booking
            </Button>

          </form>
        </Form>
      </div>
    </div>
  );
}
