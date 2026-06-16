"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { submitInquiry } from "@/app/(site)/contact/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const inquirySchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(7, "Enter a valid phone number"),
  email: z.string().email("Enter a valid email"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(5, "Message should be at least 5 characters"),
});

type InquiryValues = z.infer<typeof inquirySchema>;

export function ContactForm() {
  const [done, setDone] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<InquiryValues>({
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      service: "",
      message: "",
    },
  });

  const serviceValue = watch("service");

  const onSubmit = async (data: InquiryValues) => {
    setSubmitError(null);
    setDone(false);
    const res = await submitInquiry(data);
    if (!res.ok) {
      setSubmitError(res.error);
      return;
    }
    setDone(true);
    reset();
  };

  return (
    <div className="bg-white rounded-2xl p-7 shadow-xl">
      <div className="font-bold text-brand text-lg mb-4">Quick Inquiry</div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
        <div>
          <Input placeholder="Your Name" {...register("name")} />
          {errors.name && <ErrorText>{errors.name.message}</ErrorText>}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <Input placeholder="Phone" {...register("phone")} />
            {errors.phone && <ErrorText>{errors.phone.message}</ErrorText>}
          </div>
          <div>
            <Input placeholder="Email" type="email" {...register("email")} />
            {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
          </div>
        </div>

        <div>
          <Select
            value={serviceValue}
            onValueChange={(v) =>
              setValue("service", v, { shouldValidate: true })
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Select Service" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="hajj">Hajj Package</SelectItem>
              <SelectItem value="umrah">Umrah Package</SelectItem>
              <SelectItem value="flight">Flight Booking</SelectItem>
              <SelectItem value="visa">Visa Service</SelectItem>
            </SelectContent>
          </Select>
          {errors.service && <ErrorText>{errors.service.message}</ErrorText>}
        </div>

        <div>
          <Textarea placeholder="Your Message" {...register("message")} />
          {errors.message && <ErrorText>{errors.message.message}</ErrorText>}
        </div>

        <Button type="submit" size="lg" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Inquiry →"}
        </Button>

        {done && (
          <p className="text-sm text-brand text-center mt-1">
            ✓ Thank you! Your inquiry has been received — our team will reach out
            shortly.
          </p>
        )}
        {submitError && (
          <p className="text-sm text-destructive text-center mt-1">{submitError}</p>
        )}
      </form>
    </div>
  );
}

function ErrorText({ children }: { children: React.ReactNode }) {
  return <p className="text-xs text-destructive mt-1.5">{children}</p>;
}
