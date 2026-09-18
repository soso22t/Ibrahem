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
            className="flex flex-col items-center text-center px-5 py-6 rounded-2xl w-[98%] sm:w-[92%] gap-3"
            style={{
              color: "#4F4B35",
              textShadow: "0 1px 2px rgba(255,252,246,.35)",
            }}
          >
            <div
              className="font-tajawal text-lg sm:text-xl"
              style={{ color: "#4F4B35" }}
            >
              {t("invite_to")}
            </div>

            <div
              className="font-tajawal text-lg sm:text-xl"
              style={{ color: "#4F4B35" }}
            >
              {t("invite_join")}
            </div>

            <div
              className="font-tajawal text-lg sm:text-xl"
              style={{ color: "#4F4B35" }}
            >
              {t("invite_day")}
            </div>

            <div
              className="font-tajawal text-lg sm:text-xl mt-4"
              style={{ color: "#4F4B35" }}
            >
              {t("invite_with_love")}
            </div>

            {/*
            <div className="flex items-center justify-center gap-20 font-tajawal text-lg sm:text-xl mt-1">
              <span>{t("word1")}</span>
              <span>{t("word2")}</span>
            </div>
            */}

            <div
              className="flex flex-col items-center font-sarahhh1 text-4xl sm:text-5xl my-1"
              style={{
                color: "#6F6043",
                textShadow: "0 1px 2px rgba(255,252,246,.4)",
              }}
            >
              <span>{t("mother_name1")}</span>
              <span>{t("mother_name2")}</span>
            </div>

            <div
              className="font-tajawal text-lg sm:text-xl mt-3"
              style={{ color: "#4F4B35" }}
            >
              {t("invite_attend")}
            </div>

            <div className="w-full flex justify-center gap-16 font-tajawal text-lg sm:text-xl my-2">
              <span style={{ color: "#4F4B35" }}>
                {t("invite_before_bride")}
              </span>
              <span style={{ color: "#4F4B35" }}>
                {t("invite_before_bride_2")}
              </span>
            </div>

            <div
              className={`${
                lang === "ar" ? "font-nasta" : "font-display italic"
              } text-5xl sm:text-6xl my-4`}
              style={{
                color: "#4F4B35",
                textShadow: "0 1px 3px rgba(255,252,246,.5)",
              }}
            >
              {t("bride_name")}
              <span
                style={{
                  fontSize: "0.35em",
                  margin: "0 8px",
                  verticalAlign: "middle",
                  color: "#B49A62",
                }}
              >
                ❤︎
              </span>
              {t("groom_name")}
            </div>

            <div
              className="font-tajawal text-lg sm:text-xl mt-10 inline-flex items-center gap-1.5"
              dir="ltr"
              style={{ color: "#4F4B35" }}
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
