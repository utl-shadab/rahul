import { useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

const emailRegex = /^[\w.!#$%&'*+/=?^`{|}~-]+@[\w-]+(\.[\w-]+)+$/i;

function Contact() {
  const shellRef = useRef(null);
  const formRef = useRef(null);
  const infoRef = useRef(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(shellRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
      });
      gsap.from([infoRef.current, formRef.current], {
        opacity: 0,
        y: 28,
        duration: 1.1,
        ease: "power3.out",
        stagger: 0.12,
        delay: 0.15,
      });
    }, shellRef);
    return () => ctx.revert();
  }, []);

  const validate = (nextForm = form) => {
    const nextErrors = {};
    if (!nextForm.name.trim()) nextErrors.name = "Please enter your name.";
    if (!nextForm.email.trim()) nextErrors.email = "Email is required.";
    else if (!emailRegex.test(nextForm.email.trim())) nextErrors.email = "Use a valid email address.";
    if (!nextForm.subject.trim()) nextErrors.subject = "Add a short subject.";
    if (!nextForm.message.trim()) nextErrors.message = "Tell us a bit more so we can help.";
    else if (nextForm.message.trim().length < 10) nextErrors.message = "Message should be at least 10 characters.";
    return nextErrors;
  };

  const handleChange = (field, value) => {
    const updated = { ...form, [field]: value };
    setForm(updated);
    if (touched[field]) {
      setErrors(validate(updated));
    }
  };

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors(validate({ ...form }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    setTouched({
      name: true,
      email: true,
      subject: true,
      message: true,
    });
    if (Object.keys(nextErrors).length) return;
    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setTouched({});
      setErrors({});
      setTimeout(() => {
        setStatus("idle");
      }, 1600);
    }, 800);
  };

  const fieldClass =
    "w-full rounded-xl bg-white/80 border border-[#E5E1FF] px-4 py-3 text-sm md:text-base text-[#1B164C] placeholder:text-[#2B2851]/40 focus:border-[#6B296D] focus:ring-2 focus:ring-[#6B296D]/30 outline-none transition-all duration-200 shadow-[0_8px_30px_rgba(75,22,76,0.06)]";

  const labelClass = "text-xs md:text-sm font-semibold text-[#2B2851] tracking-wide";

  return (
    <div className="bg-[#F8F6FF] min-h-screen text-[#1B164C]">
      <div className="max-w-6xl mx-auto px-6 lg:px-10 py-16 lg:py-24" ref={shellRef}>
        <div className="flex items-center gap-3 text-sm md:text-base text-[#3D2C7D] mb-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-semibold hover:text-[#6B296D] transition-colors duration-200"
          >
            <span aria-hidden="true">←</span> Back to home
          </Link>
        </div>

        <div className="space-y-3 mb-8">
          <p className="text-xs md:text-sm uppercase tracking-[0.18em] text-[#6B296D]/80 font-semibold">
            Peacechat Support
          </p>
          <h1 className="text-3xl md:text-4xl font-black tracking-tight leading-tight text-[#1B164C] drop-shadow-sm">
            Contact us
          </h1>
          <p className="text-sm md:text-base text-[#2B2851]/80 max-w-3xl leading-relaxed">
            Reach out with product questions, partnership ideas, or press requests. We aim to respond within one
            business day.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] items-start">
          <div
            ref={infoRef}
            className="bg-gradient-to-br from-[#EADAFE] via-[#F5EDFF] to-white border border-[#E5E1FF] rounded-2xl p-6 md:p-7 shadow-[0_22px_60px_rgba(75,22,76,0.12)] space-y-5"
          >
            <p className="text-base md:text-lg font-bold text-[#1B164C]">We’re here to help</p>
            <p className="text-sm md:text-base text-[#2B2851]/80 leading-relaxed">
              Share enough detail to help us route your request quickly. If you’re reporting a bug, include device,
              platform, and steps to reproduce.
            </p>
            <div className="space-y-3 text-sm md:text-base text-[#201A4B]">
              <div className="flex items-start gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white text-[#6B296D] font-black shadow">
                  1
                </span>
                <p className="leading-relaxed">
                  Fill out all fields so we can keep our response precise and fast.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white text-[#6B296D] font-black shadow">
                  2
                </span>
                <p className="leading-relaxed">
                  We never share your details; see the Privacy route for how we safeguard your data.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white text-[#6B296D] font-black shadow">
                  3
                </span>
                <p className="leading-relaxed">
                  Prefer email? Write to <a href="mailto:hello@peacechat.app" className="font-semibold text-[#6B296D] underline underline-offset-4">hello@peacechat.app</a>.
                </p>
              </div>
            </div>
          </div>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="bg-white/95 border border-[#E5E1FF] rounded-2xl p-6 md:p-8 shadow-[0_24px_60px_rgba(75,22,76,0.10)] space-y-5"
            noValidate
          >
            <div className="grid md:grid-cols-2 gap-4">
              <label className="space-y-2">
                <span className={labelClass}>Full name</span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  onBlur={() => handleBlur("name")}
                  className={fieldClass}
                  placeholder="Alex Peace"
                  aria-invalid={Boolean(errors.name)}
                />
                {errors.name && touched.name && (
                  <p className="text-xs md:text-sm text-[#C53030]" role="alert">
                    {errors.name}
                  </p>
                )}
              </label>

              <label className="space-y-2">
                <span className={labelClass}>Email</span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  onBlur={() => handleBlur("email")}
                  className={fieldClass}
                  placeholder="you@example.com"
                  aria-invalid={Boolean(errors.email)}
                />
                {errors.email && touched.email && (
                  <p className="text-xs md:text-sm text-[#C53030]" role="alert">
                    {errors.email}
                  </p>
                )}
              </label>
            </div>

            <label className="space-y-2 block">
              <span className={labelClass}>Subject</span>
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={(e) => handleChange("subject", e.target.value)}
                onBlur={() => handleBlur("subject")}
                className={fieldClass}
                placeholder="How can we help?"
                aria-invalid={Boolean(errors.subject)}
              />
              {errors.subject && touched.subject && (
                <p className="text-xs md:text-sm text-[#C53030]" role="alert">
                  {errors.subject}
                </p>
              )}
            </label>

            <label className="space-y-2 block">
              <span className={labelClass}>Message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={(e) => handleChange("message", e.target.value)}
                onBlur={() => handleBlur("message")}
                className={`${fieldClass} min-h-[140px] resize-none`}
                placeholder="Share details so we can reply with a clear next step."
                aria-invalid={Boolean(errors.message)}
              />
              {errors.message && touched.message && (
                <p className="text-xs md:text-sm text-[#C53030]" role="alert">
                  {errors.message}
                </p>
              )}
            </label>

            <div className="flex items-center justify-between gap-3 flex-wrap">
              <p className="text-xs md:text-sm text-[#2B2851]/70">
                By submitting, you agree to our <Link to="/terms" className="font-semibold text-[#6B296D] underline underline-offset-4">Terms</Link> and acknowledge the{" "}
                <Link to="/privacy" className="font-semibold text-[#6B296D] underline underline-offset-4">Privacy Policy</Link>.
              </p>
              <button
                type="submit"
                disabled={status === "sending" || status === "sent"}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#6B296D] text-white font-semibold text-sm md:text-base shadow-[0_16px_40px_rgba(75,22,76,0.28)] hover:scale-[1.01] active:scale-[0.99] transition-transform duration-150 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === "sending" && <span className="h-3 w-3 rounded-full border-2 border-white border-t-transparent animate-spin" aria-hidden="true" />}
                {status === "sent" ? "Sent" : status === "sending" ? "Sending…" : "Send message"}
              </button>
            </div>

            {status === "sent" && (
              <div className="rounded-xl bg-[#ECF8F1] border border-[#B6E7CC] text-[#1F7A4D] px-4 py-3 text-sm md:text-base">
                Thanks! We received your message and will reply soon.
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
