import type { ReactNode } from "react";

export type CaseType = "Lemon Law" | "Personal Injury" | "Not Sure";
export type Ownership = "" | "purchase" | "lease";

interface ExtraProps {
  uid: string;
  isDark: boolean;
  labelCls: string;
  inputCls: string;
  errorCls: (key: string) => string;
  errorText: (key: string) => ReactNode;
}

export function CaseTypeField({
  uid,
  labelCls,
  inputCls,
  value,
  onChange,
}: ExtraProps & {
  value: CaseType;
  onChange: (value: CaseType) => void;
}) {
  return (
    <div>
      <label htmlFor={`${uid}-caseType`} className={labelCls}>
        Case type
      </label>
      <select
        id={`${uid}-caseType`}
        name="caseType"
        value={value}
        onChange={(event) => onChange(event.target.value as CaseType)}
        className={inputCls}
      >
        <option value="Not Sure">Not sure</option>
        <option value="Personal Injury">Personal injury</option>
        <option value="Lemon Law">Lemon law</option>
      </select>
    </div>
  );
}

export function LemonFields({
  uid,
  isDark,
  labelCls,
  inputCls,
  errorCls,
  errorText,
  vehicle,
  ownership,
  repairVisits,
  daysOut,
  onVehicle,
  onOwnership,
  onVisits,
  onDays,
}: ExtraProps & {
  vehicle: string;
  ownership: Ownership;
  repairVisits: string;
  daysOut: string;
  onVehicle: (value: string) => void;
  onOwnership: (value: Ownership) => void;
  onVisits: (value: string) => void;
  onDays: (value: string) => void;
}) {
  return (
    <div className="space-y-5">
      <div>
        <label htmlFor={`${uid}-vehicle`} className={labelCls}>
          Year, make, and model
        </label>
        <input
          id={`${uid}-vehicle`}
          name="vehicle"
          value={vehicle}
          onChange={(event) => onVehicle(event.target.value)}
          aria-invalid={errorCls("vehicle") !== ""}
          aria-describedby={errorCls("vehicle") ? `${uid}-vehicle-error` : undefined}
          className={`${inputCls} ${errorCls("vehicle")}`}
          placeholder="2023 Ford F-150"
        />
        {errorText("vehicle")}
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={`${uid}-ownership`} className={labelCls}>
            Purchase or lease
          </label>
          <select
            id={`${uid}-ownership`}
            name="ownership"
            value={ownership}
            onChange={(event) => onOwnership(event.target.value as Ownership)}
            aria-invalid={errorCls("ownership") !== ""}
            className={`${inputCls} ${errorCls("ownership")}`}
          >
            <option value="">Select</option>
            <option value="purchase">Purchased</option>
            <option value="lease">Leased</option>
          </select>
          {errorText("ownership")}
        </div>
        <div>
          <label htmlFor={`${uid}-repairVisits`} className={labelCls}>
            Repair visits
          </label>
          <select
            id={`${uid}-repairVisits`}
            name="repairVisits"
            value={repairVisits}
            onChange={(event) => onVisits(event.target.value)}
            aria-invalid={errorCls("repairVisits") !== ""}
            className={`${inputCls} ${errorCls("repairVisits")}`}
          >
            <option value="">Select</option>
            <option value="1-2">1–2 visits</option>
            <option value="3+">3 or more visits</option>
          </select>
          {errorText("repairVisits")}
        </div>
      </div>
      <div>
        <label htmlFor={`${uid}-daysOut`} className={labelCls}>
          Days out of service
        </label>
        <select
          id={`${uid}-daysOut`}
          name="daysOut"
          value={daysOut}
          onChange={(event) => onDays(event.target.value)}
          aria-invalid={errorCls("daysOut") !== ""}
          className={`${inputCls} ${errorCls("daysOut")}`}
        >
          <option value="">Select</option>
          <option value="under-30">Fewer than 30 days</option>
          <option value="30-plus">30 days or more</option>
        </select>
        {errorText("daysOut")}
      </div>
      <div
        className={`rounded-[var(--radius-md)] border border-dashed px-4 py-4 text-sm leading-relaxed ${
          isDark ? "border-bone/40 text-bone" : "border-bone text-ink/70"
        }`}
      >
        <p className={`font-semibold ${isDark ? "text-white" : "text-ink"}`}>
          Repair orders
        </p>
        <p className="mt-1">
          Bring the dealer invoices to the consultation.
        </p>
      </div>
    </div>
  );
}
