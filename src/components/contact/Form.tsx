"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
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
  ChevronsUpDown,
  Globe,
  Linkedin,
  Mail,
  Phone,
  Send
} from "lucide-react";
import { toast } from "sonner";

import { country as countries } from "@/constants/countries";

import { contactMe } from "@/app/[actions]/contact";
import { ContactSchema, type ContactFormValues } from "@/types/contact.schema";

// ---------------- Schema ----------------

// ---------------- Component ----------------

export function ContactForm() {
  const [countryOpen, setCountryOpen] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      linkedin: "",
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
    watch
  } = form;

  const selectedCountry = countries.find((c) => c.value === watch("country"));

  const onSubmit = async (data: ContactFormValues) => {
    try {
      const response = await contactMe(data);

      if (response.success) {
        form.reset();
        toast.success(response.message || "Message sent!");
      } else {
        // Handle validation errors from server
        if (response.errors) {
          Object.entries(response.errors).forEach(([field, messages]) => {
            form.setError(field as keyof ContactFormValues, {
              type: "server",
              message: messages?.join(", ")
            });
          });
        }

        // Handle generic server errors
        if (response.message && !response.errors) {
          toast.error(response.message);
        }
      }
    } catch (e) {
      toast.error("Something went wrong.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 sm:space-y-8">
      <FieldSet>
        {/* <FieldLabel>Contact</FieldLabel> */}
        {/* <FieldDescription>Fill out the form to get in touch.</FieldDescription> */}

        <FieldGroup className="flex flex-col gap-6">
          {/* Name */}
          <Field data-invalid={!!errors.name}>
            <FieldLabel htmlFor="name">
              Name <span className="text-destructive">*</span>
            </FieldLabel>
            <Input
              id="name"
              placeholder="Your name"
              aria-invalid={!!errors.name}
              {...register("name")}
            />
            <FieldError>{errors.name?.message}</FieldError>
          </Field>

          {/* Country */}
          <Field data-invalid={!!errors.country}>
            <FieldLabel>
              <Globe className="h-4 w-4" /> Country
            </FieldLabel>

            <Popover open={countryOpen} onOpenChange={setCountryOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full justify-between bg-transparent"
                >
                  {selectedCountry
                    ? `${selectedCountry.label} (${selectedCountry.code})`
                    : "Select country"}
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
                How can I reach you? <span className="text-destructive">*</span>
              </FieldLabel>
              <FieldDescription className="pt-1">
                Provide at least one contact method
              </FieldDescription>
            </div>

            <FieldGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {/* Email */}
              <Field data-invalid={!!errors.email}>
                <FieldContent>
                  <FieldLabel>
                    {" "}
                    <Mail className="h-4 w-4" />
                    Email
                  </FieldLabel>
                </FieldContent>

                <Input
                  placeholder="you@example.com"
                  aria-invalid={!!errors.email}
                  {...register("email")}
                />

                <FieldError>{errors.email?.message}</FieldError>
              </Field>

              {/* Phone */}
              <Field data-invalid={!!errors.phone}>
                <FieldLabel>
                  {" "}
                  <Phone className="h-4 w-4" /> Phone
                </FieldLabel>
                <Input
                  placeholder={selectedCountry?.code || "+1"}
                  aria-invalid={!!errors.phone}
                  {...register("phone")}
                />
                <FieldError>{errors.phone?.message}</FieldError>
              </Field>
            </FieldGroup>

            {/* LinkedIn */}
            <Field data-invalid={!!errors.linkedin}>
              <FieldLabel>
                <Linkedin className="h-4 w-4" /> LinkedIn
              </FieldLabel>
              <Input
                placeholder="linkedin.com/in/username"
                aria-invalid={!!errors.linkedin}
                {...register("linkedin")}
              />
              <FieldError>{errors.linkedin?.message}</FieldError>
            </Field>
          </FieldSet>

          {/* Subject */}
          <Field data-invalid={!!errors.subject}>
            <FieldLabel htmlFor="subject">Subject</FieldLabel>
            <Input
              id="subject"
              placeholder="What's this about?"
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
              {...register("message")}
            />
            <FieldError>{errors.message?.message}</FieldError>
          </Field>
        </FieldGroup>
      </FieldSet>

      <Button type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting ? (
          "Sending…"
        ) : (
          <>
            <Send className="mr-2 h-4 w-4" /> Send Message
          </>
        )}
      </Button>
    </form>
  );
}
