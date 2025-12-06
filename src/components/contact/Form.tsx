"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from "@/components/ui/command";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import {
  Check,
  CheckCircle2,
  ChevronsUpDown,
  Globe,
  Linkedin,
  Mail,
  Phone,
  Send
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const countries = [
  { value: "us", label: "United States", code: "+1" },
  { value: "gb", label: "United Kingdom", code: "+44" },
  { value: "ca", label: "Canada", code: "+1" },
  { value: "au", label: "Australia", code: "+61" },
  { value: "de", label: "Germany", code: "+49" },
  { value: "fr", label: "France", code: "+33" },
  { value: "in", label: "India", code: "+91" },
  { value: "jp", label: "Japan", code: "+81" },
  { value: "cn", label: "China", code: "+86" },
  { value: "br", label: "Brazil", code: "+55" },
  { value: "mx", label: "Mexico", code: "+52" },
  { value: "es", label: "Spain", code: "+34" },
  { value: "it", label: "Italy", code: "+39" },
  { value: "nl", label: "Netherlands", code: "+31" },
  { value: "se", label: "Sweden", code: "+46" },
  { value: "no", label: "Norway", code: "+47" },
  { value: "dk", label: "Denmark", code: "+45" },
  { value: "fi", label: "Finland", code: "+358" },
  { value: "ch", label: "Switzerland", code: "+41" },
  { value: "at", label: "Austria", code: "+43" },
  { value: "be", label: "Belgium", code: "+32" },
  { value: "pl", label: "Poland", code: "+48" },
  { value: "pt", label: "Portugal", code: "+351" },
  { value: "ie", label: "Ireland", code: "+353" },
  { value: "nz", label: "New Zealand", code: "+64" },
  { value: "sg", label: "Singapore", code: "+65" },
  { value: "hk", label: "Hong Kong", code: "+852" },
  { value: "kr", label: "South Korea", code: "+82" },
  { value: "ae", label: "United Arab Emirates", code: "+971" },
  { value: "sa", label: "Saudi Arabia", code: "+966" },
  { value: "za", label: "South Africa", code: "+27" },
  { value: "ng", label: "Nigeria", code: "+234" },
  { value: "eg", label: "Egypt", code: "+20" },
  { value: "ar", label: "Argentina", code: "+54" },
  { value: "cl", label: "Chile", code: "+56" },
  { value: "co", label: "Colombia", code: "+57" },
  { value: "pe", label: "Peru", code: "+51" },
  { value: "ru", label: "Russia", code: "+7" },
  { value: "ua", label: "Ukraine", code: "+380" },
  { value: "tr", label: "Turkey", code: "+90" },
  { value: "il", label: "Israel", code: "+972" },
  { value: "pk", label: "Pakistan", code: "+92" },
  { value: "bd", label: "Bangladesh", code: "+880" },
  { value: "id", label: "Indonesia", code: "+62" },
  { value: "my", label: "Malaysia", code: "+60" },
  { value: "th", label: "Thailand", code: "+66" },
  { value: "vn", label: "Vietnam", code: "+84" },
  { value: "ph", label: "Philippines", code: "+63" }
];

interface FormData {
  name: string;
  email: string;
  phone: string;
  linkedin: string;
  country: string;
  subject: string;
  message: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    linkedin: "",
    country: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [countryOpen, setCountryOpen] = useState(false);

  const selectedCountry = countries.find((c) => c.value === formData.country);

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    // At least one contact method is required
    if (
      !formData.email.trim() &&
      !formData.phone.trim() &&
      !formData.linkedin.trim()
    ) {
      newErrors.email = "Please provide at least one way to contact you";
    }

    // Validate email format if provided
    if (
      formData.email.trim() &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Please enter a valid email address";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      toast.error("Please fix the errors", {
        description: "Some required fields are missing or invalid."
      });
    }

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1500));

      toast.success("Message sent successfully!", {
        description: "Thank you for reaching out. I'll get back to you soon."
      });

      setIsSubmitted(true);
    } catch {
      toast.error("Failed to send message", {
        description: "Something went wrong. Please try again."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center px-4 py-12 text-center sm:py-16">
        <div className="bg-success/10 mb-6 flex h-14 w-14 items-center justify-center rounded-full sm:h-16 sm:w-16">
          <CheckCircle2 className="text-success h-7 w-7 sm:h-8 sm:w-8" />
        </div>
        <h2 className="text-foreground mb-2 text-xl font-medium sm:text-2xl">
          Message sent!
        </h2>
        <p className="text-muted-foreground max-w-sm text-sm sm:text-base">
          Thank you for reaching out. I&apos;ll get back to you as soon as
          possible.
        </p>
        <Button
          variant="outline"
          className="mt-6 bg-transparent sm:mt-8"
          onClick={() => {
            setIsSubmitted(false);
            setFormData({
              name: "",
              email: "",
              phone: "",
              linkedin: "",
              country: "",
              subject: "",
              message: ""
            });
          }}
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
      {/* Name */}
      <div className="space-y-2">
        <Label htmlFor="name" className="text-foreground text-sm font-medium">
          Name <span className="text-destructive">*</span>
        </Label>
        <Input
          id="name"
          placeholder="Your name"
          value={formData.name}
          onChange={(e) => handleChange("name", e.target.value)}
          className={errors.name ? "border-destructive" : ""}
        />
        {errors.name && (
          <p className="text-destructive text-sm">{errors.name}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label className="text-foreground flex items-center gap-2 text-sm font-medium">
          <Globe className="h-4 w-4" />
          Country
        </Label>
        <Popover open={countryOpen} onOpenChange={setCountryOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={countryOpen}
              className="w-full justify-between bg-transparent font-normal"
            >
              {selectedCountry ? (
                <span>
                  {selectedCountry.label} ({selectedCountry.code})
                </span>
              ) : (
                <span className="text-muted-foreground">
                  Select your country...
                </span>
              )}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent
            className="w-(--radix-popover-trigger-width) p-0"
            align="start"
          >
            <Command>
              <CommandInput placeholder="Search country..." />
              <CommandList>
                <CommandEmpty>No country found.</CommandEmpty>
                <CommandGroup>
                  {countries.map((country) => (
                    <CommandItem
                      key={country.value}
                      value={country.label}
                      onSelect={() => {
                        handleChange("country", country.value);
                        setCountryOpen(false);
                      }}
                    >
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          formData.country === country.value
                            ? "opacity-100"
                            : "opacity-0"
                        )}
                      />
                      {country.label}
                      <span className="text-muted-foreground ml-auto text-xs">
                        {country.code}
                      </span>
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>

      {/* Contact Methods */}
      <div className="space-y-4">
        <div>
          <p className="text-foreground mb-1 text-sm font-medium">
            How can I reach you? <span className="text-destructive">*</span>
          </p>
          <p className="text-muted-foreground text-sm">
            Provide at least one contact method
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {/* Email */}
          <div className="space-y-2">
            <Label
              htmlFor="email"
              className="text-muted-foreground flex items-center gap-2 text-sm"
            >
              <Mail className="h-4 w-4" />
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className={errors.email ? "border-destructive" : ""}
            />
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <Label
              htmlFor="phone"
              className="text-muted-foreground flex items-center gap-2 text-sm"
            >
              <Phone className="h-4 w-4" />
              Phone
            </Label>
            <Input
              id="phone"
              type="tel"
              placeholder={
                selectedCountry
                  ? `${selectedCountry.code} ...`
                  : "+1 (555) 000-0000"
              }
              value={formData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
            />
          </div>
        </div>

        {/* LinkedIn */}
        <div className="space-y-2">
          <Label
            htmlFor="linkedin"
            className="text-muted-foreground flex items-center gap-2 text-sm"
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </Label>
          <Input
            id="linkedin"
            placeholder="linkedin.com/in/yourprofile"
            value={formData.linkedin}
            onChange={(e) => handleChange("linkedin", e.target.value)}
          />
        </div>

        {errors.email && !formData.email && (
          <p className="text-destructive text-sm">{errors.email}</p>
        )}
      </div>

      {/* Subject */}
      <div className="space-y-2">
        <Label
          htmlFor="subject"
          className="text-foreground text-sm font-medium"
        >
          Subject
        </Label>
        <Input
          id="subject"
          placeholder="What's this about?"
          value={formData.subject}
          onChange={(e) => handleChange("subject", e.target.value)}
        />
      </div>

      {/* Message */}
      <div className="space-y-2">
        <Label
          htmlFor="message"
          className="text-foreground text-sm font-medium"
        >
          Message <span className="text-destructive">*</span>
        </Label>
        <Textarea
          id="message"
          placeholder="Tell me about your project, idea, or just say hello..."
          rows={5}
          value={formData.message}
          onChange={(e) => handleChange("message", e.target.value)}
          className={`resize-none ${errors.message ? "border-destructive" : ""}`}
        />
        {errors.message && (
          <p className="text-destructive text-sm">{errors.message}</p>
        )}
      </div>

      {/* Submit Button - full width on mobile */}
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full sm:w-auto"
      >
        {isSubmitting ? (
          <>
            <span className="border-primary-foreground mr-2 h-4 w-4 animate-spin rounded-full border-2 border-t-transparent" />
            Sending...
          </>
        ) : (
          <>
            <Send className="mr-2 h-4 w-4" />
            Send Message
          </>
        )}
      </Button>
    </form>
  );
}
