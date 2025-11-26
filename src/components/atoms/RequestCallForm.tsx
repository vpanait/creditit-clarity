import { useEffect, useState } from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { PhoneInput } from '@/components/atoms/PhoneInput';
import { useGTM } from '@/hooks/use-gtm';
import * as z from "zod";
import { toast } from '@/components/ui/sonner';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { ROUTE, GET_STARTED_FORM_URL } from '@/const';
import { collectFormMetadata, FormMetadata } from '@/lib/form-metadata';

const formSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required."),
  company: z
    .string()
    .min(1, "Company name is required."),
  role: z
    .string()
    .min(1, "Role is required."),
  email: z
    .string()
    .email("Please enter a valid email address."),
  phone: z
    .string()
    .min(1, "Phone number is required.")
    .refine((value) => {
      // Basic validation for phone number format
      return value.length >= 9 && /^[+]?[0-9\-\s()]+$/.test(value);
    }, "Please enter a valid phone number."),
  comments: z
    .string()
    .max(500, "Comments must be at most 500 characters.")
    .optional(),
});

interface IProps {
  isOpen: boolean;
  onClose: () => void;
  trigger?: string;
}

const RequestCallForm = ({ isOpen, onClose, trigger = '' }: IProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [metadata, setMetadata] = useState<FormMetadata | null>(null);
  const { trackFormSubmit } = useGTM();

  const labelClassName = "text-sm font-medium";
  const errorClassName = "text-xs text-red-400 -mt-1";

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onBlur",
    defaultValues: {
      name: "",
      company: "",
      role: "",
      email: "",
      phone: "",
      comments: "",
    },
  });

  useEffect(() => {
    if (isOpen) {
      collectFormMetadata().then((metadata) => {
        setMetadata(metadata);
      });
    } else {
      // Reset form when dialog closes
      form.reset();
      setMetadata(null);
    }
  }, [isOpen, form]);

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);

    // Track form submission
    trackFormSubmit(trigger || 'sign_up_form', true);

    try {
      // Send data to API with metadata
      const response = await fetch(GET_STARTED_FORM_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          trigger: trigger,
          metadata: JSON.stringify(metadata),
        }),
      });

      if (!response.ok) {
        toast.error('Failed to submit form');
      } else {
        toast.success('Form submitted successfully!');
        onClose();
        form.reset();
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Failed to submit form');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOpenChange = (open: boolean) => {
    // Only allow closing via the X button, not by clicking outside
    if (!open) {
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent 
        className="w-md max-h-[95vh] max-w-[95vw] overflow-y-auto lg:translate-y-0 lg:translate-x-0 lg:left-auto lg:right-10 lg:top-6"
        onInteractOutside={(e) => {
          // Prevent closing when clicking outside
          e.preventDefault();
        }}
        onEscapeKeyDown={(e) => {
          // Allow closing with Escape key
          onClose();
        }}
      >
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-text-primary font-syne">
            Request a call
          </DialogTitle>
          <DialogDescription className="text-sm text-muted ">
            Learn how our infrastructure can support your lending, risk, and data operations.
          </DialogDescription>
          <DialogDescription className="text-sm text-muted ">
            Share a few details below, and our team will reach out to schedule a conversation.
          </DialogDescription>
        </DialogHeader>

        {/* Form */}
        <form id="signup-form" onSubmit={form.handleSubmit(onSubmit)}>
          <div className="space-y-6 text-text-primary">
            {/* Name */}
            <Controller
              name="name"
              control={form.control}
              render={({ field, fieldState }) => (
                <div className="space-y-2 flex-1" >
                  <Label htmlFor="signup-form-name" className={labelClassName}>
                    Name
                  </Label>
                  <Input
                    {...field}
                    id="signup-form-name"
                    aria-invalid={fieldState.invalid}
                    placeholder="John Smith"
                    autoComplete="given-name"
                    className={cn(fieldState?.error?.message && 'border-red-400')}
                    onChange={(e) => {
                      field.onChange(e);
                      if (fieldState.invalid) {
                        form.trigger('name');
                      }
                    }}
                  />
                  {fieldState.invalid && (
                    <p className={errorClassName}>{fieldState.error?.message}</p>
                  )}
                </div>
              )}
            />

            {/* Email */}
            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <div className="space-y-2">
                  <Label htmlFor="signup-form-email" className={labelClassName}>
                    Work E-mail
                  </Label>
                  <Input
                    {...field}
                    id="signup-form-email"
                    type="email"
                    aria-invalid={fieldState.invalid}
                    placeholder="your.name@company.com"
                    className={cn(fieldState?.error?.message && 'border-red-400')}
                    autoComplete="email"
                    onChange={(e) => {
                      field.onChange(e);
                      if (fieldState.invalid) {
                        form.trigger('email');
                      }
                    }}
                  />
                  {fieldState.invalid && (
                    <p className={errorClassName}>{fieldState.error?.message}</p>
                  )}
                </div>
              )}
            />

            {/* Company */}
            <Controller
              name="company"
              control={form.control}
              render={({ field, fieldState }) => (
                <div className="space-y-2">
                  <Label htmlFor="signup-form-company" className={labelClassName}>
                    Institution / Company Name
                  </Label>
                  <Input
                    {...field}
                    id="signup-form-company"
                    aria-invalid={fieldState.invalid}
                    placeholder="Institution / Company Name"
                    className={cn(fieldState?.error?.message && 'border-red-400')}
                    autoComplete="organization"
                    onChange={(e) => {
                      field.onChange(e);
                      if (fieldState.invalid) {
                        form.trigger('company');
                      }
                    }}
                  />
                  {fieldState.invalid && (
                    <p className={errorClassName}>{fieldState.error?.message}</p>
                  )}
                </div>
              )}
            />

            {/* Role */}
            <Controller
              name="role"
              control={form.control}
              render={({ field, fieldState }) => (
                <div className="space-y-2">
                  <Label htmlFor="signup-form-role" className={labelClassName}>
                    Role
                  </Label>
                  <Input
                    {...field}
                    id="signup-form-role"
                    aria-invalid={fieldState.invalid}
                    placeholder="CEO, Manager, Director"
                    className={cn(fieldState?.error?.message && 'border-red-400')}
                    autoComplete="organization-title"
                    onChange={(e) => {
                      field.onChange(e);
                      if (fieldState.invalid) {
                        form.trigger('role');
                      }
                    }}
                  />
                  {fieldState.invalid && (
                    <p className={errorClassName}>{fieldState.error?.message}</p>
                  )}
                </div>
              )}
            />



            {/* Phone */}
            <Controller
              name="phone"
              control={form.control}
              render={({ field, fieldState }) => (
                <div className="space-y-2">
                  <Label htmlFor="signup-form-phone" className={labelClassName}>
                    Phone
                  </Label>
                  <PhoneInput
                    {...field}
                    id="signup-form-phone"
                    aria-invalid={fieldState.invalid}
                    placeholder="(+971) 234-567-89"
                    className={cn(fieldState?.error?.message && 'border-red-400')}
                    defaultCountry="AE"
                    onChange={(value) => {
                      field.onChange(value);
                      if (fieldState.invalid) {
                        form.trigger('phone');
                      }
                    }}
                  />
                  {fieldState.invalid && (
                    <p className={errorClassName}>{fieldState.error?.message}</p>
                  )}
                </div>
              )}
            />

            {/* Comments */}
            <Controller
              name="comments"
              control={form.control}
              render={({ field, fieldState }) => (
                <div className="space-y-2">
                  <Label htmlFor="signup-form-comments" className={labelClassName}>
                    What would you like to discuss? (Optional)
                  </Label>
                  <Textarea
                    {...field}
                    id="signup-form-comments"
                    aria-invalid={fieldState.invalid}
                    placeholder="Provide basic information about your institution and objectives."
                    className={cn(fieldState?.error?.message && 'border-red-400')}
                    rows={2}
                    onChange={(e) => {
                      field.onChange(e);
                      if (fieldState.invalid) {
                        form.trigger('comments');
                      }
                    }}
                  />
                  {fieldState.invalid && (
                    <p className={errorClassName}>{fieldState.error?.message}</p>
                  )}
                </div>
              )}
            />

            {/* Submit Button */}
            <div className="space-y-4 mt-10">
              <Button
                type="submit"
                form="signup-form"
                disabled={isSubmitting}
                className="w-full"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Request'}
              </Button>

              {/* Privacy Policy */}
              <p className="text-xs text-standout text-center leading-tight">
                We handle all information in compliance with bank-grade security standards.
                <br />
                Your details will be used exclusively to coordinate a call with our team.
              </p>
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default RequestCallForm;
