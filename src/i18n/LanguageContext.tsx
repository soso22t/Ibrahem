import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
export type Lang = "ar" | "en";
type Dict = Record<string, string>;
const ar: Dict = {
  tap_open: "اضغط لفتح الدعوة",
  invite_to: "حلت علينا منـــاسبة سعـــيدة",
  invite_join: "فــ حق علينا أن ندعـــوكم لها",
  invite_day: "بمشاعر مليئة بالفرح والسرور",
  invite_with_love: "تتـــشرف",
  word1: "السيدة ",
  word2: "السيدة ",
  mother_name1: "الســـيدة آمنـــه أحمــد فــلاته",
  mother_name2: "وخالات وعمات العريس ",
  invite_attend: "بدعوتكم لحضور حفل زفاف ",
  invite_before_bride: "إبننا",
  invite_before_bride_2: "إبنتنا",
  bride_name: "إبراهيم",
  groom_name: "فاطمة",
  invite_god_willing: "وذلك بمشيئة الله تعالى يوم الخميس",
  date_line: "2026 . 11 . 26 | 1448 . 06 . 16",
  countdown_title: "العدّ التنازلي",
  days: "أيام",
  hours: "ساعات",
  minutes: "دقائق",
  seconds: "ثواني",
  venue_title: "موقع حفلنا",
  venue_name: " قاعة قصر المشاعر",
  venue_city: "مكة",
  program_title: "برنامج الحفل",
  program_reception: "الاستقبال",
  program_zaffa: "الـزفـــــــــــة",
  program_dinner: "العشـــــاء",
  details_title: "تفاصيل الحفل",
  no_kids: "يمنع اصطحاب الأطفال",
  no_cameras: "نستأمنكم خصوصية الحفل",
  no_maghatir: "نرجو منكم عدم التصوير",
  rsvp_title: "أكّد حضورك",
  rsvp_sub: "نتشرف بحضوركم",
  name_label: "الاسم الكريم",
  name_placeholder: "اكتب اسمك هنا",
  confirm: "تأكيد الحضور",
  decline: "الاعتذار",
  send: "إرسال",
  sending: "جارٍ الإرسال...",
  thanks_attending: "شكراً لتأكيد حضورك",
  thanks_declined: "نقدّر اعتذارك",
  redirect_wa: "سيتم تحويلك إلى الواتساب لإرسال الرد...",
  made_by: " ",
  store: "غيمة",
  date_full: "الخميس 26 نوفمبر 2026",
  cal_day: "Thursday",
  cal_month: "November",
  cal_year: "2026",
  qr_title: "باركود الدخول الخاص بك",
  qr_sub: "يرجى تقديم هذا الباركود عند البوابة",
  save_qr: "حفظ الباركود",
  redirecting_in: "سيتم تحويلك إلى الواتساب خلال",
  seconds_short: "ث",
};
const en: Dict = {
  tap_open: "Tap to open the invitation",
  invite_to: "A joyful occasion has come upon us",
  invite_join: "And we are honored to invite you to celebrate it with us",
  invite_day: "With hearts filled with joy and happiness",
  invite_with_love: "We are honored to",
  word1: "Mrs. ",
  word2: "Mrs. ",
  mother_name1: "Mrs. Amina Ahmed Falatah",
  mother_name2: "and the groom's aunts",
  invite_attend: "invite you to attend the wedding of ",
  invite_before_bride: "our son",
  invite_before_bride_2: "our daughter",
  bride_name: "Ibrahim",
  groom_name: "Fatimah",
  invite_god_willing: "God willing, on Thursday",
  date_line: "2026 . 11 . 26 | 1448 . 06 . 16",
  countdown_title: "Countdown",
  days: "Days",
  hours: "Hours",
  minutes: "Minutes",
  seconds: "Seconds",
  venue_title: "Our Venue",
  venue_name: "Al Mashaaer Palace Hall",
  venue_city: "Makkah",
  program_title: "Event Program",
  program_reception: "Reception",
  program_zaffa: "Zaffa",
  program_dinner: "Dinner",
  details_title: "Event Details",
  no_kids: "Children are not permitted",
  no_cameras: "We kindly ask you to respect the privacy of the event",
  no_maghatir: "Please refrain from taking photos",
  rsvp_title: "Confirm Your Attendance",
  rsvp_sub: "We are honored by your presence",
  name_label: "Full Name",
  name_placeholder: "Enter your name here",
  confirm: "Confirm Attendance",
  decline: "Decline",
  send: "Send",
  sending: "Sending...",
  thanks_attending: "Thank you for confirming your attendance",
  thanks_declined: "We appreciate your response",
  redirect_wa: "You will be redirected to WhatsApp to send your response...",
  made_by: " ",
  store: "Ghaimah",
  date_full: "Thursday, November 26, 2026",
  cal_day: "Thursday",
  cal_month: "November",
  cal_year: "2026",
  qr_title: "Your Entry QR Code",
  qr_sub: "Please present this QR code at the entrance",
  save_qr: "Save QR Code",
  redirecting_in: "Redirecting to WhatsApp in",
  seconds_short: "s",
};
const dicts = { ar, en };
interface LangCtx {
  lang: Lang;
  t: (k: keyof typeof ar) => string;
  toggle: () => void;
  dir: "rtl" | "ltr";
}
const Ctx = createContext<LangCtx | null>(null);
export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>(() => {
    const saved = typeof window !== "undefined" ? localStorage.getItem("lang") : null;
    return (saved === "en" || saved === "ar") ? saved : "ar";
  });
  const dir = lang === "ar" ? "rtl" : "ltr";
  useEffect(() => {
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
  }, [lang, dir]);
  const t = (k: keyof typeof ar) => dicts[lang][k] ?? k;
  const toggle = () => setLang((l) => (l === "ar" ? "en" : "ar"));
  return <Ctx.Provider value={{ lang, t, toggle, dir }}>{children}</Ctx.Provider>;
};
export const useLang = () => {
  const c = useContext(Ctx);
  if (!c) throw new Error("useLang must be inside LanguageProvider");
  return c;
};
