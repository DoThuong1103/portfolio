"use client";

import { useState } from "react";
import { Send, CheckCircle2, RefreshCw } from "lucide-react";
import { useForm, UseFormRegisterReturn } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// ======= Validation Schema =======
const schema = yup.object({
  name: yup.string().required("Vui lòng nhập họ tên của bạn"),
  email: yup.string().email("Email không hợp lệ").required("Vui lòng nhập email"),
  subject: yup.string().required("Vui lòng nhập tiêu đề"),
  message: yup.string().required("Vui lòng nhập nội dung tin nhắn"),
}).required();

type FormData = yup.InferType<typeof schema>;

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
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

      if (!response.ok) {
        throw new Error("Lỗi phản hồi từ server");
      }

      setSubmitted(true);
    } catch {
      setApiError("Rất tiếc! Đã xảy ra lỗi hệ thống khi gửi email. Vui lòng thử lại sau.");
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
        <h3 className="text-[22px] font-bold mb-3">Gửi thành công!</h3>
        <p className="text-(--text-secondary) mb-8">
          Cảm ơn bạn đã liên hệ. Tin nhắn đã được gửi qua Server trực tiếp tới hòm thư của tôi! Mình sẽ phản hồi bạn sớm nhất có thể.
        </p>
        <button
          onClick={handleReset}
          type="button"
          className="flex items-center gap-2 px-6 py-2.5 border border-(--border-glass) rounded-xl text-[14px] font-medium transition-all hover:bg-[rgba(255,255,255,0.05)] hover:border-[rgba(255,255,255,0.1)] cursor-pointer text-(--text-primary)"
        >
          <RefreshCw size={16} />
          Gửi tin nhắn khác
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h3 className="text-[20px] font-bold mb-5">Gửi tin nhắn 💬</h3>

      {apiError && (
        <div className="mb-6 p-4 rounded-xl bg-[rgba(239,68,68,0.1)] border border-[rgba(239,68,68,0.2)] text-red-400 text-[14px]">
          {apiError}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <FormField
          label="Họ tên"
          id="contact-name"
          placeholder="Nguyễn Văn A"
          registration={register("name")}
          error={errors.name?.message}
          required={true}
        />
        <FormField
          label="Email"
          id="contact-email"
          type="email"
          placeholder="your@email.com"
          registration={register("email")}
          error={errors.email?.message}
          required={true}
        />
      </div>

      <div className="mb-4">
        <FormField
          label="Tiêu đề"
          id="contact-subject"
          placeholder="Cơ hội hợp tác / Tuyển dụng..."
          registration={register("subject")}
          error={errors.subject?.message}
          required={true}
        />
      </div>

      <div className="mb-7">
        <label htmlFor="contact-message" className="block text-[13px] font-medium text-(--text-secondary) mb-2">
          Nội dung <span className="text-red-400">*</span>
        </label>
        <textarea
          id="contact-message"
          rows={5}
          placeholder="Chia sẻ với tôi về dự án hoặc cơ hội bạn muốn thảo luận..."
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
            Đang xử lý...
          </>
        ) : (
          <>
            <Send size={16} />
            Gửi tin nhắn
          </>
        )}
      </button>
    </form>
  );
}

function FormField({
  label,
  id,
  placeholder,
  type = "text",
  required = false,
  error,
  registration,
}: {
  label: string;
  id: string;
  placeholder: string;
  type?: string;
  required?: boolean;
  error?: string;
  registration: UseFormRegisterReturn;
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
