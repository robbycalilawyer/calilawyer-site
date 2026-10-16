"use client";

import { useId, useState } from "react";
import { PLACEHOLDER } from "@/lib/site";
import { Button } from "./Button";
import {
  CaseTypeField,
  LemonFields,
  type CaseType,
  type Ownership,
} from "./LeadFormExtras";

type Status = "idle" | "loading" | "success" | "error";

interface LeadFormProps {
  /** Which funnel this form belongs to — pre-fills the case-type. */
  practice?: "injury" | "lemon-law" | "general";
  tone?: "light" | "dark";
}

interface Fields {
  name: string;
  phone: string;
  email: string;
  details: string;
  consent: boolean;
  caseType: CaseType;
  vehicle: string;
  ownership: Ownership;
  repairVisits: string;
  daysOut: string;
}

const EMPTY: Fields = {
  name: "",
  phone: "",
  email: "",
  details: "",
  consent: false,
  caseType: "Not Sure",
  vehicle: "",
  ownership: "",
  repairVisits: "",
  daysOut: "",
};

type FieldErrors = Partial<Record<keyof Fields, string>>;

function validate(f: Fields, practice: LeadFormProps["practice"]): FieldErrors {
  const e: FieldErrors = {};
  if (!f.name.trim()) e.name = "Please enter your name.";
  const phoneDigits = f.phone.replace(/\D/g, "");
  if (!f.phone.trim()) e.phone = "Please enter a phone number.";
  else if (phoneDigits.length < 10)
    e.phone = "Enter a 10-digit phone number.";
  if (!f.email.trim()) e.email = "Please enter an email address.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email))
    e.email = "Enter a valid email address.";
  if (practice === "lemon-law") {
    if (!f.vehicle.trim()) e.vehicle = "Enter the year, make, and model.";
    if (!f.ownership) e.ownership = "Tell us whether you purchased or leased.";
    if (!f.repairVisits) e.repairVisits = "Select the approximate repair visits.";
    if (!f.daysOut) e.daysOut = "Select how long it has been out of service.";
  }
  if (!f.consent) e.consent = "Please agree before submitting.";
  return e;
}

const PRACTICE_LABEL: Record<NonNullable<LeadFormProps["practice"]>, string> = {
  injury: "Personal injury",
  "lemon-law": "Lemon law",
  general: "General inquiry",
};

export function LeadForm({ practice = "general", tone = "light" }: LeadFormProps) {
  const [fields, setFields] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [submitError, setSubmitError] = useState<string | null>(null);
  const uid = useId();
  const isDark = tone === "dark";

  function update<K extends keyof Fields>(key: K, value: Fields[K]) {
    setFields((f) => ({ ...f, [key]: value }));
    // Clear a field's error as the user corrects it.
    setErrors((e) => (e[key] ? { ...e, [key]: undefined } : e));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const found = validate(fields, practice);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      // Move focus to the first field with an error.
      const firstKey = Object.keys(found)[0];
      document.getElementById(`${uid}-${firstKey}`)?.focus();
      return;
    }

    setStatus("loading");
    setSubmitError(null);

    const payload = {
      ...fields,
      practice:
        practice === "general" ? fields.caseType : PRACTICE_LABEL[practice],
      submittedAtIso: new Date().toISOString(),
    };

    const endpoint = process.env.LEAD_ENDPOINT;

    try {
      if (endpoint) {
        const res = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        if (!res.ok) throw new Error(`Request failed (${res.status})`);
      } else {
        // No endpoint configured: log the payload and show success.
        console.info("[LeadForm] No LEAD_ENDPOINT set. Payload:", payload);
      }
      setStatus("success");
      setFields(EMPTY);
    } catch (err) {
      setStatus("error");
      setSubmitError(
        err instanceof Error
          ? "We couldn't send your request. Please call us or try again."
          : "Something went wrong. Please try again.",
      );
    }
  }

  // ---- Success state ----
  if (status === "success") {
    return (
      <div
        role="status"
        className={`rounded-[var(--radius-lg)] border p-8 ${
          isDark
            ? "on-dark border-charcoal bg-charcoal text-bone"
            : "border-bone bg-white text-ink"
        }`}
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-[var(--radius-pill)] bg-gold text-ink">
          <svg viewBox="0 0 24 24" width="26" height="26" fill="none" aria-hidden="true">
            <path
              d="M5 13l4 4L19 7"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h3
          className={`h-card mt-5 ${isDark ? "text-white" : "text-ink"}`}
        >
          Request received
        </h3>
        <p className="mt-3 text-[0.975rem] leading-relaxed">
          Your request has been received. A team member will contact you
          shortly to discuss your case. This does not create an
          attorney–client relationship.
        </p>
        <div className="mt-6">
          <Button
            variant="secondary"
            onDark={isDark}
            onClick={() => setStatus("idle")}
          >
            Submit another request
          </Button>
        </div>
      </div>
    );
  }

  const labelCls = `mb-1.5 block text-sm font-semibold ${
    isDark ? "text-bone" : "text-ink"
  }`;
  const inputBase = `w-full rounded-[var(--radius-md)] border px-4 py-3 text-[0.975rem] outline-none transition-colors duration-[var(--motion-fast)] ${
    isDark
      ? "on-dark border-charcoal bg-ink text-white placeholder:text-bone/50"
      : "border-bone bg-white text-ink placeholder:text-ink/40"
  }`;
  const errRing = "border-[color:var(--color-gold)] ring-2 ring-gold/40";

  function fieldError(key: keyof Fields) {
    return errors[key] ? (
      <p
        id={`${uid}-${key}-error`}
        className={`mt-1.5 text-sm font-semibold ${
          isDark ? "text-white" : "text-ink"
        }`}
      >
        <span className="underline decoration-gold decoration-2 underline-offset-2">
          {errors[key]}
        </span>
      </p>
    ) : null;
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className={`rounded-[var(--radius-lg)] border p-6 md:p-8 ${
        isDark ? "on-dark border-charcoal bg-charcoal" : "border-bone bg-white"
      }`}
    >
      <div className="space-y-5">
        {/* Name */}
        <div>
          <label htmlFor={`${uid}-name`} className={labelCls}>
            Full name
          </label>
          <input
            id={`${uid}-name`}
            name="name"
            type="text"
            autoComplete="name"
            value={fields.name}
            onChange={(e) => update("name", e.target.value)}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? `${uid}-name-error` : undefined}
            className={`${inputBase} ${errors.name ? errRing : ""}`}
            placeholder="Jordan Rivera"
          />
          {fieldError("name")}
        </div>

        {/* Phone + email */}
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor={`${uid}-phone`} className={labelCls}>
              Phone
            </label>
            <input
              id={`${uid}-phone`}
              name="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              value={fields.phone}
              onChange={(e) => update("phone", e.target.value)}
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? `${uid}-phone-error` : undefined}
              className={`${inputBase} ${errors.phone ? errRing : ""}`}
              placeholder="(555) 123-4567"
            />
            {fieldError("phone")}
          </div>
          <div>
            <label htmlFor={`${uid}-email`} className={labelCls}>
              Email
            </label>
            <input
              id={`${uid}-email`}
              name="email"
              type="email"
              inputMode="email"
              autoComplete="email"
              value={fields.email}
              onChange={(e) => update("email", e.target.value)}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? `${uid}-email-error` : undefined}
              className={`${inputBase} ${errors.email ? errRing : ""}`}
              placeholder="you@email.com"
            />
            {fieldError("email")}
          </div>
        </div>

        {practice === "general" ? (
          <CaseTypeField
            uid={uid}
            isDark={isDark}
            labelCls={labelCls}
            inputCls={inputBase}
            errorCls={() => ""}
            errorText={() => null}
            value={fields.caseType}
            onChange={(value) => update("caseType", value)}
          />
        ) : null}

        {practice === "lemon-law" ? (
          <LemonFields
            uid={uid}
            isDark={isDark}
            labelCls={labelCls}
            inputCls={inputBase}
            errorCls={(key) => (errors[key as keyof Fields] ? errRing : "")}
            errorText={(key) => fieldError(key as keyof Fields)}
            vehicle={fields.vehicle}
            ownership={fields.ownership}
            repairVisits={fields.repairVisits}
            daysOut={fields.daysOut}
            onVehicle={(value) => update("vehicle", value)}
            onOwnership={(value) => update("ownership", value)}
            onVisits={(value) => update("repairVisits", value)}
            onDays={(value) => update("daysOut", value)}
          />
        ) : null}

        {/* Details */}
        <div>
          <label htmlFor={`${uid}-details`} className={labelCls}>
            What happened?{" "}
            <span className={isDark ? "text-bone/60" : "text-ink/50"}>
              (optional)
            </span>
          </label>
          <textarea
            id={`${uid}-details`}
            name="details"
            rows={4}
            value={fields.details}
            onChange={(e) => update("details", e.target.value)}
            className={`${inputBase} resize-y`}
            placeholder="A few sentences about your situation."
          />
        </div>

        {/* Consent */}
        <div>
          <label
            htmlFor={`${uid}-consent`}
            className={`flex cursor-pointer items-start gap-3 text-sm leading-relaxed ${
              isDark ? "text-bone" : "text-ink/80"
            }`}
          >
            <input
              id={`${uid}-consent`}
              name="consent"
              type="checkbox"
              checked={fields.consent}
              onChange={(e) => update("consent", e.target.checked)}
              aria-invalid={!!errors.consent}
              aria-describedby={
                errors.consent ? `${uid}-consent-error` : undefined
              }
              className="mt-0.5 h-5 w-5 shrink-0 accent-[var(--color-gold)]"
            />
            <span>
              {PLACEHOLDER.tcpa} By submitting, you agree to be contacted by
              phone, text, or email. Message and data rates may apply. Reply
              STOP to opt out. This does not create an attorney–client
              relationship.
            </span>
          </label>
          {fieldError("consent")}
        </div>

        {/* Submit-level error */}
        {status === "error" && submitError && (
          <p
            role="alert"
            className={`rounded-[var(--radius-md)] border px-4 py-3 text-sm font-semibold ${
              isDark
                ? "border-gold/60 bg-ink text-white"
                : "border-ink bg-paper text-ink"
            }`}
          >
            {submitError}
          </p>
        )}

        <Button
          type="submit"
          size="lg"
          onDark={isDark}
          loading={status === "loading"}
          className="w-full"
        >
          {status === "loading" ? "Sending…" : "Request my free review"}
        </Button>

        <p
          className={`text-xs leading-relaxed ${
            isDark ? "text-bone/70" : "text-ink/55"
          }`}
        >
          {PLACEHOLDER.noFee} Submitting this form does not create an
          attorney–client relationship.
        </p>
      </div>
    </form>
  );
}
