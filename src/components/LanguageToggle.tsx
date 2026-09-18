import { useLang } from "@/i18n/LanguageContext";

const LanguageToggle = () => {
  const { lang, toggle } = useLang();
  return (
    <button
      onClick={toggle}
      aria-label="Toggle language"
      className="fixed top-4 right-4 z-50 px-3 py-1.5 rounded-full text-sm font-semibold tracking-wide backdrop-blur-md transition-all hover:scale-105"
      style={{
        background: "rgba(255,252,246,.88)",
        border: "1.5px solid rgba(79,75,53,.18)",
        color: "#4F4B35",
        boxShadow: "0 6px 18px rgba(79,75,53,.12)",
        fontFamily: "'Tajawal', sans-serif",
      }}
    >
      {lang === "ar" ? "EN | ع" : "AR | A"}
    </button>
  );
};

export default LanguageToggle;
