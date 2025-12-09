"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion"; // Import motion and AnimatePresence
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";

import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSet
} from "@/components/ui/field";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/components/ui/popover";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from "@/components/ui/command";

import { cn } from "@/lib/utils";
import {
  Check,
  CheckCircle2,
  ChevronsUpDown,
  Globe,
  Mail,
  Phone,
  Send
} from "lucide-react";

import { country as countries } from "@/constants/countries";
import { toast } from "sonner";

import { contactMe } from "@/app/[actions]/contact";
import { ContactSchema, type ContactFormValues } from "@/types/contact.schema";

// Success Message Component
const SuccessMessage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8, y: -50 }}
      transition={{
        duration: 0.5,
        type: "spring",
        damping: 10,
        stiffness: 100
      }}
      className="bg-card flex flex-col items-center justify-center rounded-xl border p-8 text-center shadow-xl"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.3, type: "spring", stiffness: 200, damping: 15 }}
      >
        <CheckCircle2 className="mb-4 h-16 w-16 text-green-500" />
      </motion.div>
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-primary mb-2 text-2xl font-bold"
      >
        Message Sent Successfully!
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="text-muted-foreground mb-8"
      >
        We&apos;ve received your message and will contact you as soon as
        possible.
      </motion.p>
    </motion.div>
  );
};

export function ContactForm() {
  const [countryOpen, setCountryOpen] = useState(false); // State to control the display of the success UI
  const [isSubmittedSuccessfully, setIsSubmittedSuccessfully] = useState(false);

  const formContainerRef = useRef<HTMLDivElement>(null);
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      name: "",
      email: "",
      whatsapp: "",
      country: "",
      subject: "",
      message: ""
    }
  });

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
    reset
  } = form;

  const selectedCountry = countries.find((c) => c.value === watch("country"));

  const onSubmit = async (data: ContactFormValues) => {
    try {
      const response = await contactMe(data);

      if (response.success) {
        // Do NOT reset the form immediately. Instead, show the success UI.
        setIsSubmittedSuccessfully(true);
        toast.success(response.message || "Message sent!");
        reset();
        if (formContainerRef.current) {
          formContainerRef.current.scrollIntoView({
            behavior: "smooth",
            block: "center" // Scrolls the element to the center of the viewport
          });
        }
      } else {
        // Handle server errors and toast
        if (response.errors) {
          Object.entries(response.errors).forEach(([field, messages]) => {
            form.setError(field as keyof ContactFormValues, {
              type: "server",
              message: messages?.join(", ")
            });
          });
        }

        if (response.message && !response.errors) {
          toast.error(response.message);
        }
      }
    } catch (e) {
      toast.error("Something went wrong.");
    }
  };

  return (
    <div ref={formContainerRef}>
      <AnimatePresence mode="wait">
        {isSubmittedSuccessfully ? (
          // Show Success UI with animation
          <div className="pt-30">
            <SuccessMessage key="success" />
          </div>
        ) : (
          // Show Form UI with animation
          <motion.form
            key="form"
            onSubmit={handleSubmit(onSubmit)}
            className="pt-12 sm:space-y-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <FieldSet>
              <FieldGroup className="flex flex-col gap-6">
                {/* Name */}
                <Field data-invalid={!!errors.name}>
                  <FieldLabel htmlFor="name">
                    Name <span className="text-destructive">*</span>
                  </FieldLabel>
                  <Input
                    id="name"
                    placeholder="Your name"
                    type="text"
                    aria-invalid={!!errors.name}
                    {...register("name")}
                  />
                  <FieldError>{errors.name?.message}</FieldError>
                </Field>
                {/* Country */}
                <Field data-invalid={!!errors.country}>
                  <FieldLabel>
                    <Globe className="h-4 w-4" /> Country
                    <span className="text-destructive">*</span>
                  </FieldLabel>

                  <Popover open={countryOpen} onOpenChange={setCountryOpen}>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-between bg-transparent"
                      >
                        <span>
                          {selectedCountry
                            ? `${selectedCountry.label} (${selectedCountry.code})`
                            : "Select country"}
                        </span>
                        <ChevronsUpDown className="h-4 w-4 opacity-50" />
                      </Button>
                    </PopoverTrigger>

                    <PopoverContent className="w-(--radix-popover-trigger-width) p-0">
                      <Command>
                        <CommandInput placeholder="Search country..." />
                        <CommandList>
                          <CommandEmpty>No country found.</CommandEmpty>
                          <CommandGroup>
                            {countries.map((c) => (
                              <CommandItem
                                key={c.value}
                                onSelect={() => {
                                  setValue("country", c.value, {
                                    shouldValidate: true
                                  });
                                  setCountryOpen(false);
                                }}
                              >
                                <Check
                                  className={cn(
                                    "mr-2 h-4 w-4",
                                    c.value === watch("country")
                                      ? "opacity-100"
                                      : "opacity-0"
                                  )}
                                />
                                {c.label}
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </CommandList>
                      </Command>
                    </PopoverContent>
                  </Popover>

                  <FieldError>{errors.country?.message}</FieldError>
                </Field>

                {/* Contact Methods */}
                <FieldSet>
                  <div>
                    <FieldLabel>
                      How can I reach you?{" "}
                      <span className="text-destructive">*</span>
                    </FieldLabel>
                    <FieldDescription className="pt-1">
                      Provide contact method
                    </FieldDescription>
                  </div>

                  <FieldGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {/* Email */}
                    <Field data-invalid={!!errors.email}>
                      <FieldContent>
                        <FieldLabel>
                          <Mail className="h-4 w-4" />
                          Email
                        </FieldLabel>
                      </FieldContent>

                      <Input
                        placeholder="you@example.com"
                        type="email"
                        aria-invalid={!!errors.email}
                        required
                        {...register("email")}
                      />

                      <FieldError>{errors.email?.message}</FieldError>
                    </Field>

                    {/* WhatsApp */}
                    <Field data-invalid={!!errors.whatsapp}>
                      <FieldLabel>
                        <Phone className="h-4 w-4" /> WhatsApp Number
                      </FieldLabel>
                      <Input
                        placeholder={selectedCountry?.code || "+1"}
                        aria-invalid={!!errors.whatsapp}
                        type="tel"
                        inputMode="numeric"
                        required
                        {...register("whatsapp")}
                      />
                      <FieldError>{errors.whatsapp?.message}</FieldError>
                    </Field>
                  </FieldGroup>
                </FieldSet>
                {/* Subject */}
                <Field data-invalid={!!errors.subject}>
                  <FieldLabel htmlFor="subject">Subject</FieldLabel>
                  <Input
                    id="subject"
                    placeholder="What's this about?"
                    type="text"
                    {...register("subject")}
                  />
                  <FieldError>{errors.subject?.message}</FieldError>
                </Field>
                {/* Message */}
                <Field data-invalid={!!errors.message}>
                  <FieldLabel htmlFor="message">
                    Message <span className="text-destructive">*</span>
                  </FieldLabel>
                  <Textarea
                    id="message"
                    rows={5}
                    placeholder="Tell me about your project…"
                    aria-invalid={!!errors.message}
                    required
                    maxLength={1000}
                    {...register("message")}
                  />
                  <FieldError>{errors.message?.message}</FieldError>
                </Field>
              </FieldGroup>
            </FieldSet>

            <Button type="submit" disabled={isSubmitting} className="w-full mt-6">
              {isSubmitting ? (
                "Sending…"
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" /> Send Message
                </>
              )}
            </Button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
