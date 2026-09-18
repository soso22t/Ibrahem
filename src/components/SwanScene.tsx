import { useLang } from "@/i18n/LanguageContext";

const SwanScene = () => {
  const { t, lang } = useLang();

  return (
    <section className="relative w-full">
      <div
        className="relative w-full mx-auto overflow-hidden"
        style={{ maxWidth: 480, aspectRatio: "9 / 16" }}
      >
        <img
          src="/0CB8D1AA-F233-4862-B1EB-588914C269D6.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover select-none"
        />

        <div
          dir={lang === "ar" ? "rtl" : "ltr"}
          className="absolute inset-0 flex items-center justify-center px-5 py-6"
        >
          <div
            className="flex flex-col items-center text-center px-5 py-6 rounded-2xl w-[98%] sm:w-[92%] gap-4"
            style={{
              background:
                "radial-gradient(ellipse at center, hsla(0,0%,0%,0.18) 0%, hsla(0,0%,0%,0.08) 200%, hsla(0,0%,0%,0) 100%)",
              backdropFilter: "blur(1.5px)",
              WebkitBackdropFilter: "blur(1.5px)",
              color: "#4F4B35",
              textShadow:
                "0 1px 2px hsla(255,255,255,0.25)",
            }}
          >
            <div className="font-tajawal text-lg sm:text-xl">
              {t("invite_to")}
            </div>

            <div className="font-tajawal text-lg sm:text-xl">
              {t("invite_join")}
            </div>

            <div className="font-tajawal text-lg sm:text-xl">
              {t("invite_day")}
            </div>

            <div className="font-tajawal text-lg sm:text-xl mt-4">
              {t("invite_with_love")}
            </div>

            {/*
            <div className="flex items-center justify-center gap-20 font-tajawal text-lg sm:text-xl mt-1">
              <span>{t("word1")}</span>
              <span>{t("word2")}</span>
            </div>
            */}

            <div className="flex flex-col items-center font-sarahhh1 text-4xl sm:text-5xl my-1">
              <span>{t("mother_name1")}</span>
              <span>{t("mother_name2")}</span>
            </div>

            <div
              className="font-tajawal text-lg sm:text-xl mt-10 inline-flex items-center gap-1.5"
              dir="ltr"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <rect x="3" y="5" width="18" height="16" rx="2" />
                <path d="M3 9h18M8 3v4M16 3v4" />
              </svg>
              <span>{t("date_line")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SwanScene;
