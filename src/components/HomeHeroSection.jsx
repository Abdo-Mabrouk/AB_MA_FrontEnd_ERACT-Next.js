import { motion } from "framer-motion";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

export default function HomeHeroSection() {
  return (
    <section
      id="home"
      className="mx-auto max-w-6xl min-w-0 overflow-x-hidden px-4 py-20 text-center"
      data-aos="fade-up"
    >
      <div className="relative overflow-hidden rounded-3xl border border-slate-700/70 bg-slate-900/60 px-4 py-14 backdrop-blur md:px-10">
        <motion.div
          className="pointer-events-none absolute -left-12 top-8 h-36 w-36 rounded-full bg-cyan-400/25 blur-2xl"
          animate={{ y: [0, -24, 0], x: [0, 14, 0], scale: [1, 1.08, 1] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="pointer-events-none absolute -right-12 bottom-8 h-40 w-40 rounded-full bg-violet-500/20 blur-2xl"
          animate={{ y: [0, 18, 0], x: [0, -12, 0], scale: [1.05, 1, 1.05] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="pointer-events-none absolute left-8 top-20 h-24 w-24 rounded-2xl border border-white/25 bg-white/10 shadow-[0_8px_30px_rgba(255,255,255,0.12)] backdrop-blur-md"
          animate={{
            x: [0, 28, 10, 0],
            y: [0, -24, 8, 0],
            rotate: [0, 12, -4, 0],
          }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="pointer-events-none absolute bottom-14 right-14 h-20 w-20 rounded-xl border border-cyan-200/30 bg-cyan-200/10 shadow-[0_8px_30px_rgba(34,211,238,0.18)] backdrop-blur-md"
          animate={{
            x: [0, -22, -6, 0],
            y: [0, 20, -10, 0],
            rotate: [0, -14, 5, 0],
          }}
          transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
        />

        <motion.div
          className="relative z-10"
          style={{ perspective: 1000 }}
          initial={{ opacity: 0, rotateX: 16, y: 45 }}
          animate={{ opacity: 1, rotateX: 0, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.p
            className="mb-3 text-lg text-slate-300"
            initial={{ z: -60 }}
            animate={{ z: 0 }}
            transition={{ duration: 1.1, delay: 0.1 }}
          >
            Hello I&apos;m
          </motion.p>

          <motion.h1
            className="text-4xl font-black md:text-6xl capitalize"
            whileHover={{ rotateX: -10, rotateY: 12, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 180, damping: 14 }}
          >
            Abdalrhman Mabrouk
          </motion.h1>

          <motion.p
            className="mx-auto mt-5 max-w-2xl text-slate-300 capitalize"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Front-End Developer building fast, responsive, and clean user experiences with React and modern web tooling.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
          >
            <motion.a
              href="#about"
              className="rounded-lg bg-cyan-400 px-5 py-2 font-semibold text-black"
              whileHover={{
                y: -4,
                scale: 1.05,
                boxShadow: "0 14px 26px rgba(34, 211, 238, 0.38)",
                filter: "saturate(1.15)",
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 260, damping: 16 }}
            >
              Hire me
            </motion.a>
            <motion.a
              href="https://drive.google.com/file/d/1IT2CD_h5OyNVIElnJqZcAlQQ-br6cX5b/view?usp=drive_link"
              target="_blank"
              download={"abdo-mabrouk-frontEnd(REACT AND NEXT)"}
              rel="noreferrer"
              className="rounded-lg border border-cyan-300 px-5 py-2 font-semibold text-cyan-200"
              whileHover={{
                y: -3,
                scale: 1.04,
                backgroundColor: "rgba(34, 211, 238, 0.12)",
                boxShadow: "0 12px 22px rgba(34, 211, 238, 0.24)",
                letterSpacing: "0.3px",
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 250, damping: 17 }}
            >
              Download CV
            </motion.a>
          </motion.div>

          <motion.div
            className="mt-8 flex justify-center gap-3 text-xl perspective-[900px]"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.a
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/share/18czVdFsio/"
              className="rounded-full bg-slate-800 p-3 hover:bg-cyan-400 hover:text-black"
              initial={{ opacity: 0, y: 15, rotateX: -25 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.5, delay: 0.65 }}
              whileHover={{
                y: -10,
                rotateX: 0,
                rotateY: 0,
                rotateZ: 6,
                scale: 1.12,
                boxShadow: "0 18px 30px rgba(34, 211, 238, 0.35)",
                transition: { type: "spring", stiffness: 80, damping: 4 },
              }}
              whileTap={{ scale: 0.95 }}
            >
              <FaFacebookF />
            </motion.a>
            <motion.a
              target="_blank"
              rel="noreferrer"
              href="https://wa.me/201551459152"
              className="rounded-full bg-slate-800 p-3 hover:bg-cyan-400 hover:text-black"
              initial={{ opacity: 0, y: 15, rotateX: -25 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.5, delay: 0.72 }}
              whileHover={{
                y: -10,
                rotateX: 0,
                rotateY: 0,
                rotateZ: 6,
                scale: 1.12,
                boxShadow: "0 18px 30px rgba(34, 211, 238, 0.35)",
                transition: { type: "spring", stiffness: 80, damping: 4 },
              }}
              whileTap={{ scale: 0.95 }}
            >
              <FaWhatsapp />
            </motion.a>
            <motion.a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/abdelrhman-mabrouk-777b96343"
              className="rounded-full bg-slate-800 p-3 hover:bg-cyan-400 hover:text-black"
              initial={{ opacity: 0, y: 15, rotateX: -25 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.5, delay: 0.79 }}
              whileHover={{
                y: -10,
                rotateX: 0,
                rotateY: 0,
                rotateZ: 6,
                scale: 1.12,
                boxShadow: "0 18px 30px rgba(34, 211, 238, 0.35)",
                transition: { type: "spring", stiffness: 80, damping: 4 },
              }}
              whileTap={{ scale: 0.95 }}
            >
              <FaLinkedinIn />
            </motion.a>
            <motion.a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Abdo-Mabrouk"
              className="rounded-full bg-slate-800 p-3 hover:bg-cyan-400 hover:text-black"
              initial={{ opacity: 0, y: 15, rotateX: -25 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.5, delay: 0.86 }}
              whileHover={{
                y: -10,
                rotateX: 0,
                rotateY: 0,
                rotateZ: 6,
                scale: 1.12,
                boxShadow: "0 18px 30px rgba(34, 211, 238, 0.35)",
                transition: { type: "spring", stiffness: 80, damping: 4 },
              }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
