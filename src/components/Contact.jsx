import { motion, useAnimation } from "framer-motion";
import * as Yup from "yup";
import { useEffect, useRef } from "react";
import { useFormik } from "formik";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      type: "spring",
      stiffness: 260,
      damping: 22,
    },
  }),
};

const schema = Yup.object({
  firstName: Yup.string()
    .required("First name is required")
    .max(20, "Name must not be more than 20 characters"),
  email: Yup.string()
    .required("Email is required")
    .email("Enter a valid email"),
  message: Yup.string()
    .required("Message is required")
    .min(10, "Message must be at least 10 characters"),
});

export default function ContactSection() {
  const btnControls = useAnimation();
  const btnRef = useRef(null);
  const offsetRef = useRef({ x: 0, y: 0 });

  const formik = useFormik({
    initialValues: { firstName: "", email: "", message: "" },
    validationSchema: schema,
    onSubmit: async (values, { resetForm }) => {
      try {
        const res = await fetch("https://formspree.io/f/xjkekndg", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });

        if (res.ok) {
          resetForm();
          // تقدر تضيف هنا toast أو رسالة نجاح
        }
      } catch (err) {
        console.error("Error:", err);
      }
    },
  });

  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isFormFilled =
    formik.values.firstName?.trim() &&
    emailRe.test(formik.values.email ?? "") &&
    formik.values.message?.trim();

  useEffect(() => {
    if (isFormFilled) {
      offsetRef.current = { x: 0, y: 0 };
      btnControls.start({
        x: 0,
        y: 0,
        transition: { type: "spring", stiffness: 300, damping: 20 },
      });
    }
  }, [isFormFilled, btnControls]);

  function handleMouseMove(e) {
    if (isFormFilled) return;

    const btn = btnRef.current;
    if (!btn) return;

    const rect = btn.getBoundingClientRect();

    const btnCenterX = rect.left + rect.width / 2;
    const btnCenterY = rect.top + rect.height / 2;

    const distX = e.clientX - btnCenterX;
    const distY = e.clientY - btnCenterY;
    const distance = Math.sqrt(distX ** 2 + distY ** 2);

    const escapeRadius = 100;

    if (distance < escapeRadius) {
      const angle = Math.atan2(distY, distX);
      // ✅ escapeStrength أصغر عشان الحركة تبقى ناعمة جوا الحدود
      const escapeStrength = ((escapeRadius - distance) / escapeRadius) * 40;

      // ✅ قيّد الحركة بـ maxOffset عشان الزرار ميطلعش برا الـ container
      const maxOffset = 60;

      const newOffsetX = Math.max(
        -maxOffset,
        Math.min(
          maxOffset,
          offsetRef.current.x - Math.cos(angle) * escapeStrength,
        ),
      );
      const newOffsetY = Math.max(
        -maxOffset,
        Math.min(
          maxOffset,
          offsetRef.current.y - Math.sin(angle) * escapeStrength,
        ),
      );

      offsetRef.current = { x: newOffsetX, y: newOffsetY };

      btnControls.start({
        x: newOffsetX,
        y: newOffsetY,
        transition: { type: "spring", stiffness: 300, damping: 15 },
      });
    }
  }

  function handleMouseLeave() {
    if (isFormFilled) return;
    offsetRef.current = { x: 0, y: 0 };
    btnControls.start({
      x: 0,
      y: 0,
      transition: { type: "spring", stiffness: 200, damping: 18 },
    });
  }

  return (
    <div
      id="contact"
      className="mx-auto max-w-6xl min-w-0 px-4 pb-16 pt-14"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.h2
        className="mb-6 text-3xl font-bold"
        initial={{ opacity: 0, x: -24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 260, damping: 22 }}
      >
        Contact me
      </motion.h2>

      <motion.form
        onSubmit={formik.handleSubmit}
        className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-900 p-5 md:grid-cols-2"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 220, damping: 24, delay: 0.1 }}
      >
        {/* First Name */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <input
            type="text"
            placeholder="First name"
            name="firstName"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 outline-none focus:border-cyan-400 transition-colors duration-200 text-white placeholder:text-slate-500"
          />
          {formik.errors.firstName && formik.touched.firstName && (
            <p className="bg-red-200 text-red-800 p-2 rounded-md mt-2 text-sm font-medium">
              * {formik.errors.firstName}
            </p>
          )}
        </motion.div>

        {/* Email */}
        <motion.div
          custom={1}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <input
            type="email"
            placeholder="Email address"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 outline-none focus:border-cyan-400 transition-colors duration-200 text-white placeholder:text-slate-500"
          />
          {formik.errors.email && formik.touched.email && (
            <p className="bg-red-200 text-red-800 p-2 rounded-md mt-2 text-sm font-medium">
              * {formik.errors.email}
            </p>
          )}
        </motion.div>

        {/* Message */}
        <motion.div
          custom={2}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="md:col-span-2"
        >
          <textarea
            placeholder="Your message"
            rows={5}
            name="message"
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 outline-none focus:border-cyan-400 transition-colors duration-200 text-white placeholder:text-slate-500"
          />
          {formik.errors.message && formik.touched.message && (
            <p className="bg-red-200 text-red-800 p-2 rounded-md mt-2 text-sm font-medium">
              * {formik.errors.message}
            </p>
          )}
        </motion.div>

        {/* Submit Button */}
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="md:col-span-2 flex justify-center " // ✅ overflow-hidden يمنع الزرار من الظهور برا
        >
          <motion.button
            ref={btnRef}
            type="submit"
            animate={btnControls}
            whileTap={isFormFilled ? { scale: 0.96 } : {}}
            className="relative overflow-hidden rounded-lg bg-cyan-400 px-8 py-3 font-semibold text-black cursor-pointer"
          >
            <motion.span
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-linear-to-r from-transparent via-white/40 to-transparent -translate-x-full"
              whileHover={isFormFilled ? { translateX: "200%" } : {}}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
            <span className="relative z-10">Send message</span>
          </motion.button>
        </motion.div>
      </motion.form>
    </div>
  );
}
