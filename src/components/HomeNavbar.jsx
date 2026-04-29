import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import logo from '@/assets/imgs/logo.jpg'

const DESKTOP_LINKS = [
  { id: "home", label: "Home", hash: "#home" },
  { id: "services", label: "Services", hash: "#services" },
  { id: "portfolio", label: "Portfolio", hash: "#portfolio" },
  { id: "about", label: "About", hash: "#about" },
  { id: "contact", label: "Contact", hash: "#contact" },
];

const SCROLL_OFFSET = 96;

function scrollSpyActiveId() {
  const scrollY = window.scrollY + SCROLL_OFFSET;
  let current = "home";
  for (const { id } of DESKTOP_LINKS) {
    const el = document.getElementById(id);
    if (!el) continue;
    if (el.offsetTop <= scrollY + 4) current = id;
  }
  return current;
}

export default function HomeNavbar() {
  const [activeId, setActiveId] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const updateActive = useCallback(() => {
    setActiveId(scrollSpyActiveId());
    setScrolled(window.scrollY > 12);
  }, []);

  useEffect(() => {
    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateActive);
    return () => {
      window.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", updateActive);
    };
  }, [updateActive]);

  useEffect(() => {
    if (!menuOpen) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const handleNavClick = (hash) => {
    closeMenu();
    const id = hash.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 22 }}
        className={`sticky top-0 z-40 w-full border-b transition-shadow duration-300 ${
          scrolled
            ? "border-slate-800/80 bg-slate-950/95 shadow-[0_8px_30px_rgba(0,0,0,0.4)] backdrop-blur-md"
            : "border-slate-800/60 bg-slate-950/90 backdrop-blur"
        }`}
      >
        <nav className="mx-auto flex w-full max-w-6xl min-w-0 items-center justify-between gap-3 px-4 py-3 sm:px-4">
          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#home");
            }}
            className="relative flex shrink-0 items-center"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <motion.img
              src={logo}
              alt="Logo"
              className="h-10 w-auto max-h-10 rounded-lg object-cover sm:h-11 sm:max-h-11"
              animate={
                activeId === "home"
                  ? { boxShadow: "0 0 0 2px rgba(34, 211, 238, 0.6)" }
                  : { boxShadow: "0 0 0 0px rgba(34, 211, 238, 0)" }
              }
              transition={{ duration: 0.25 }}
            />
          </motion.a>

          <div className="hidden min-w-0 items-center gap-2 perspective-[1100px] md:flex md:gap-1">
            {DESKTOP_LINKS.filter((l) => l.id !== "home").map(({ id, label, hash }, index) => {
              const active = activeId === id;
              const tilt = index % 2 === 0 ? 1 : -1;
              return (
                <motion.a
                  key={id}
                  href={hash}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(hash);
                  }}
                  className="relative isolate rounded-xl px-4 py-2.5 text-sm font-semibold outline-none transform-3d"
                  style={{ transformStyle: "preserve-3d" }}
                  initial="rest"
                  whileHover="hover"
                  whileTap={{ scale: 0.94, z: 10 }}
                  variants={{
                    rest: {
                      rotateX: 0,
                      rotateY: 0,
                      rotateZ: 0,
                      y: 0,
                      z: 0,
                      scale: 1,
                      boxShadow: "0 0 0 0 rgba(34, 211, 238, 0)",
                    },
                    hover: {
                      rotateX: 0,
                      rotateY: 0 * tilt,
                      rotateZ: 0 * tilt,
                      y: 0,         // ← التعديل: كان -10
                      z: 0,
                      scale: 1.12,
                      boxShadow:
                        "0 28px 56px rgba(34, 211, 238, 0.45), 0 0 40px rgba(34, 211, 238, 0.15), inset 0 1px 0 rgba(255,255,255,0.22)",
                      transition: { type: "spring", stiffness: 100, damping: 4 },
                    },
                  }}
                >
                  <motion.span
                    aria-hidden
                    variants={{
                      rest: { opacity: 0, scale: 0.88, rotateX: 12 },
                      hover: {
                        opacity: 1,
                        scale: 1,
                        rotateX: 0,
                        transition: { type: "spring", stiffness: 380, damping: 18 },
                      },
                    }}
                    className="pointer-events-none absolute inset-0 -z-10 rounded-xl border border-cyan-400/35 bg-linear-to-br from-cyan-400/30 via-cyan-500/10 to-slate-900/60 backdrop-blur-md"
                    style={{ transform: "translateZ(-4px)", transformStyle: "preserve-3d" }}
                  />
                  <span
                    className={`relative z-10 block transition-colors duration-200 transform-[translateZ(18px)] [text-shadow:0_2px_14px_rgba(0,0,0,0.55)] ${
                      active ? "text-cyan-100" : "text-slate-300"
                    }`}
                  >
                    {label}
                  </span>
                  <motion.span
                    variants={{
                      rest: { scaleX: active ? 1 : 0, opacity: active ? 1 : 0, y: 4 },
                      hover: {
                        scaleX: 1,
                        opacity: 1,
                        y: 0,
                        transition: { type: "spring", stiffness: 420, damping: 26 },
                      },
                    }}
                    className="absolute bottom-1 left-3 right-3 z-10 h-0.75 origin-center rounded-full bg-linear-to-r from-transparent via-cyan-300 to-transparent transform-[translateZ(12px)] shadow-[0_0_12px_rgba(34,211,238,0.8)]"
                  />
                </motion.a>
              );
            })}
          </div>

          <motion.button
            type="button"
            aria-label="Open menu"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-700 bg-slate-900 text-cyan-300 md:hidden"
            whileHover={{ scale: 1.05, borderColor: "rgba(34, 211, 238, 0.45)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setMenuOpen(true)}
          >
            <HiMenuAlt3 className="text-2xl" />
          </motion.button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <div
            key="mobile-menu"
            className="fixed inset-0 z-50 md:hidden"
            style={{ perspective: 1200 }}
          >
            <motion.button
              type="button"
              aria-label="Close menu"
              className="absolute inset-0 z-0 bg-slate-950/65 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={closeMenu}
            />

            <div className="pointer-events-none absolute inset-0 z-10 flex h-full items-start justify-center overflow-y-auto overflow-x-hidden p-4 pt-[max(1rem,env(safe-area-inset-top))] pb-8">
              <motion.div
                role="dialog"
                aria-modal="true"
                aria-label="Navigation"
                className="pointer-events-auto w-full max-w-sm overflow-hidden rounded-2xl border border-cyan-500/30 bg-slate-900/95 shadow-[0_24px_80px_rgba(0,0,0,0.55)] backdrop-blur-xl"
                initial={{ opacity: 0, rotateX: -22, y: -36, scale: 0.92 }}
                animate={{ opacity: 1, rotateX: 0, y: 0, scale: 1 }}
                exit={{ opacity: 0, rotateX: 18, y: -28, scale: 0.9 }}
                transition={{ type: "spring", stiffness: 280, damping: 26 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="flex items-center justify-between border-b border-slate-700/80 px-4 py-3">
                  <span className="text-sm font-semibold tracking-wide text-cyan-300">Menu</span>
                  <motion.button
                    type="button"
                    aria-label="Close"
                    className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-300 hover:bg-slate-800 hover:text-white"
                    whileHover={{ rotate: 90, scale: 1.05 }}
                    whileTap={{ scale: 0.92 }}
                    onClick={closeMenu}
                  >
                    <HiX className="text-2xl" />
                  </motion.button>
                </div>
                <ul className="flex flex-col gap-1 p-3">
                  {DESKTOP_LINKS.map(({ id, label, hash }, index) => {
                    const active = activeId === id;
                    return (
                      <motion.li
                        key={id}
                        initial={{ opacity: 0, x: -16, rotateY: -12 }}
                        animate={{ opacity: 1, x: 0, rotateY: 0 }}
                        transition={{
                          delay: 0.06 + index * 0.05,
                          type: "spring",
                          stiffness: 320,
                          damping: 22,
                        }}
                        style={{ transformStyle: "preserve-3d" }}
                      >
                        <motion.a
                          href={hash}
                          onClick={(e) => {
                            e.preventDefault();
                            handleNavClick(hash);
                          }}
                          className={`relative block rounded-xl px-4 py-3 text-base font-semibold transform-3d ${
                            active
                              ? "bg-cyan-400/15 text-cyan-200 ring-1 ring-cyan-400/50"
                              : "bg-slate-800/30 text-slate-200"
                          }`}
                          style={{ transformStyle: "preserve-3d" }}
                          whileHover={{
                            rotateX: -8,
                            rotateY: index % 2 === 0 ? 10 : -10,
                            z: 36,
                            scale: 1.03,
                            x: 4,
                            boxShadow: "0 20px 40px rgba(34, 211, 238, 0.25), inset 0 1px 0 rgba(255,255,255,0.12)",
                            borderColor: "rgba(34, 211, 238, 0.45)",
                          }}
                          whileTap={{ scale: 0.97, z: 8 }}
                          transition={{ type: "spring", stiffness: 280, damping: 16 }}
                        >
                          <span className="relative z-10 block transform-[translateZ(12px)]">{label}</span>
                        </motion.a>
                      </motion.li>
                    );
                  })}
                </ul>
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}