import Reveal from "./Reveal";
import { useLang } from "@/i18n/LanguageContext";
const Timeline = () => {
  const { t } = useLang();
  const events = [
    { time: "10:00 PM", label: t("program_reception") },
  ];
  return (
    <div className="relative max-w-2xl mx-auto py-8">
      <div
        className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px"
        style={{ background: "#B49A62" }}
      />
      <div className="space-y-16">
        {events.map((e, i) => (
          <Reveal key={i} delay={i * 150}>
            <div className="relative flex items-center justify-center">
              <div
                className="absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full z-10"
                style={{
                  background: "#FFFDF8",
                  border: "2px solid #B49A62",
                  boxShadow: "0 0 0 6px rgba(180, 154, 98, 0.15)",
                }}
              />
              <div className="grid grid-cols-2 w-full gap-8">
                <div
                  className="pl-10 font-display text-2xl"
                  dir="ltr"
                  style={{ color: "#B49A62", textAlign: "left" }}
                >
                  {e.time}
                </div>
                <div
                  className="text-right pr-10 font-tajawal text-2xl w-full"
                  style={{ color: "#4F4B35" }}
                >
                  {e.label}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
};
export default Timeline;
