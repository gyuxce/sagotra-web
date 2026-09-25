"use client";

import { useActionState } from "react";
import { useTranslations } from "next-intl";
import { submitInquiry, type InquiryFormState } from "@/app/[locale]/plan-your-visit/actions";

interface InquiryFormProps {
  experiences: { slug: string; title: string }[];
  defaultExperienceSlug?: string;
}

const initialState: InquiryFormState = { status: "idle" };

export function InquiryForm({ experiences, defaultExperienceSlug }: InquiryFormProps) {
  const t = useTranslations("PlanYourVisit");
  const [state, formAction, pending] = useActionState(submitInquiry, initialState);

  if (state.status === "success") {
    return (
      <div role="status" className="rounded-2xl border border-[var(--color-jade-green)]/30 bg-[var(--color-jade-green)]/10 p-6">
        <h3 className="text-lg font-semibold text-[var(--color-jade-green)]">{t("formSuccessTitle")}</h3>
        <p className="mt-2 text-sm text-[var(--foreground)]/80">{t("formSuccessBody")}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="grid gap-4">
      <input type="hidden" name="source" value="plan-your-visit" />

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label={t("formName")} htmlFor="name">
          <input id="name" name="name" type="text" required className="form-input" />
        </Field>
        <Field label={t("formPhone")} htmlFor="phone">
          <input id="phone" name="phone" type="tel" required className="form-input" />
        </Field>
      </div>

      <Field label={t("formEmail")} htmlFor="email">
        <input id="email" name="email" type="email" className="form-input" />
      </Field>

      <Field label={t("formExperience")} htmlFor="experienceSlug">
        <select id="experienceSlug" name="experienceSlug" defaultValue={defaultExperienceSlug ?? ""} className="form-input">
          <option value="">{t("formExperiencePlaceholder")}</option>
          {experiences.map((experience) => (
            <option key={experience.slug} value={experience.slug}>
              {experience.title}
            </option>
          ))}
        </select>
      </Field>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label={t("formDate")} htmlFor="preferredDate">
          <input id="preferredDate" name="preferredDate" type="date" className="form-input" />
        </Field>
        <Field label={t("formGroupSize")} htmlFor="groupSize">
          <input id="groupSize" name="groupSize" type="number" min={1} className="form-input" />
        </Field>
      </div>

      <Field label={t("formLanguagePreference")} htmlFor="language">
        <select id="language" name="language" className="form-input">
          <option value="id">Bahasa Indonesia</option>
          <option value="en">English</option>
        </select>
      </Field>

      <Field label={t("formInterests")} htmlFor="interests">
        <input id="interests" name="interests" type="text" className="form-input" />
      </Field>

      <Field label={t("formMessage")} htmlFor="message">
        <textarea id="message" name="message" rows={4} className="form-input" />
      </Field>

      <label className="flex items-start gap-2 text-sm text-[var(--foreground)]/80">
        <input type="checkbox" name="consent" required className="mt-1" />
        {t("formConsent")}
      </label>

      {state.status === "error" || state.status === "unavailable" ? (
        <div role="alert" className="rounded-xl border border-[var(--color-warm-red)]/30 bg-[var(--color-warm-red)]/10 p-4">
          <p className="text-sm font-semibold text-[var(--color-warm-red)]">
            {state.status === "error" ? t("formErrorTitle") : t("formUnavailableTitle")}
          </p>
          <p className="mt-1 text-sm text-[var(--foreground)]/80">
            {state.status === "error" ? t("formErrorBody") : t("formUnavailableBody")}
          </p>
        </div>
      ) : null}

      <button
        type="submit"
        disabled={pending}
        className="focus-ring mt-2 inline-flex items-center justify-center rounded-full bg-[var(--color-deep-purple)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-deep-purple-dark)] disabled:opacity-60"
      >
        {pending ? t("formSubmitting") : t("formSubmit")}
      </button>
    </form>
  );
}

function Field({ label, htmlFor, children }: { label: string; htmlFor: string; children: React.ReactNode }) {
  return (
    <label htmlFor={htmlFor} className="flex flex-col gap-1.5 text-sm font-medium text-[var(--foreground)]/80">
      {label}
      {children}
    </label>
  );
}
