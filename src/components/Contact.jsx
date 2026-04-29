import { motion } from "framer-motion";

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

export default function ContactSection() {
  return (
    <div id="contact" className="mx-auto max-w-6xl min-w-0 px-4 pb-16 pt-14">
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
        action="https://formspree.io/f/xjkekndg"
        method="POST"
        className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-900 p-5 md:grid-cols-2"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 220, damping: 24, delay: 0.1 }}
      >
        <motion.input
          custom={0}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          name="First-name"
          type="text"
          placeholder="First name"
          className="rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 outline-none focus:border-cyan-400 transition-colors duration-200"
        />
        <motion.input
          custom={1}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          name="Email"
          type="email"
          placeholder="Email address"
          className="rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 outline-none focus:border-cyan-400 transition-colors duration-200"
        />
        <motion.textarea
          custom={2}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          name="message"
          placeholder="Your message"
          rows={5}
          className="rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 outline-none focus:border-cyan-400 transition-colors duration-200 md:col-span-2"
        />
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="md:col-span-2 flex justify-center"
        >
          <motion.button
            type="submit"
            className="relative overflow-hidden rounded-lg bg-cyan-400 px-8 py-3 font-semibold text-black"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 380, damping: 18 }}
          >
            <motion.span
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-linear-to-r from-transparent via-white/40 to-transparent -translate-x-full"
              whileHover={{ translateX: "200%" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
            <span className="relative z-10">Send message</span>
          </motion.button>
        </motion.div>
      </motion.form>
    </div>
  );
}
