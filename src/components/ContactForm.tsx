"use client";

import { useState, useMemo } from "react";
import { Send, CheckCircle2, RefreshCw } from "lucide-react";
import { useForm, UseFormRegisterReturn } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useLanguage } from "@/context/LanguageContext";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactForm() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);

  const schema = useMemo(
    () =>
      yup.object({
        name: yup.string().required(t.form.nameRequired),
        email: yup.string().email(t.form.emailInvalid).required(t.form.emailRequired),
        subject: yup.string().required(t.form.subjectRequired),
        message: yup.string().required(t.form.messageRequired),
      }).required(),
    [t]
  );

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    setApiError(null);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("Server error");
      setSubmitted(true);
    } catch {
      setApiError(t.form.serverError);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    reset();
    setSubmitted(false);
    setApiError(null);
  };

  if (submitted) {
    return (
      <div className="text-center py-10 flex flex-col items-center">
        <div className="w-[72px] h-[72px] rounded-full bg-[rgba(34,197,94,0.1)] border border-[rgba(34,197,94,0.3)] flex items-center justify-center mb-6">
          <CheckCircle2 size={36} className="text-[#4ade80]" />
        </div>
        <h3 className="text-[22px] font-bold mb-3">{t.form.successTitle}</h3>
        <p className="text-(--text-secondary) mb-8">{t.form.successMsg}</p>
        <button
          onClick={handleReset}
          type="button"
          className="flex items-center gap-2 px-6 py-2.5 border border-(--border-glass) rounded-xl text-[14px] font-medium transition-all hover:bg-[rgba(255,255,255,0.05)] hover:border-[rgba(255,255,255,0.1)] cursor-pointer text-(--text-primary)"
        >
          <RefreshCw size={16} />
          {t.form.sendAnother}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h3 className="text-[20px] font-bold mb-5">{t.form.heading}</h3>

      {apiError && (
        <div className="mb-6 p-4 rounded-xl bg-[rgba(239,68,68,0.1)] border border-[rgba(239,68,68,0.2)] text-red-400 text-[14px]">
          {apiError}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <FormField
          label={t.form.nameLabel}
          id="contact-name"
          placeholder={t.form.namePlaceholder}
          registration={register("name")}
          error={errors.name?.message}
          required
        />
        <FormField
          label={t.form.emailLabel}
          id="contact-email"
          type="email"
          placeholder={t.form.emailPlaceholder}
          registration={register("email")}
          error={errors.email?.message}
          required
        />
      </div>

      <div className="mb-4">
        <FormField
          label={t.form.subjectLabel}
          id="contact-subject"
          placeholder={t.form.subjectPlaceholder}
          registration={register("subject")}
          error={errors.subject?.message}
          required
        />
      </div>

      <div className="mb-7">
        <label htmlFor="contact-message" className="block text-[13px] font-medium text-(--text-secondary) mb-2">
          {t.form.messageLabel} <span className="text-red-400">*</span>
        </label>
        <textarea
          id="contact-message"
          rows={5}
          placeholder={t.form.messagePlaceholder}
          {...register("message")}
          className={`w-full py-3.5 px-4 bg-[rgba(255,255,255,0.04)] border rounded-xl text-(--text-primary) text-[14px] outline-none resize-y font-inherit transition-colors duration-300 focus:border-[rgba(108,99,255,0.5)] ${errors.message ? 'border-red-500' : 'border-[rgba(255,255,255,0.1)]'}`}
        />
        {errors.message && <p className="text-red-400 text-[12px] mt-1.5">{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        className={`btn-glow w-full flex items-center justify-center gap-2 text-[15px] py-[15px] ${loading ? "opacity-70" : "opacity-100"}`}
        disabled={loading}
      >
        {loading ? (
          <>
            <span className="w-[18px] h-[18px] border-2 border-[rgba(255,255,255,0.3)] border-t-white rounded-full animate-spin inline-block" />
            {t.form.sending}
          </>
        ) : (
          <>
            <Send size={16} />
            {t.form.submit}
          </>
        )}
      </button>
    </form>
  );
}

function FormField({
  label, id, placeholder, type = "text", required = false, error, registration,
}: {
  label: string; id: string; placeholder: string; type?: string;
  required?: boolean; error?: string; registration: UseFormRegisterReturn;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-[13px] font-medium text-(--text-secondary) mb-2">
        {label} {required && <span className="text-red-400">*</span>}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        {...registration}
        className={`w-full py-3 px-4 bg-[rgba(255,255,255,0.04)] border rounded-xl text-(--text-primary) text-[14px] outline-none font-inherit transition-colors duration-300 focus:border-[rgba(108,99,255,0.5)] ${error ? 'border-red-500' : 'border-[rgba(255,255,255,0.1)]'}`}
      />
      {error && <p className="text-red-400 text-[12px] mt-1.5">{error}</p>}
    </div>
  );
}
