import { useState } from "react";
import { Check, X, Send, Heart } from "lucide-react";
import Reveal from "./Reveal";
import { useLang } from "@/i18n/LanguageContext";

const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSd0A-YK2YIPPimkHZxF3HNrm5k7Ol61ajfYo_kOsFeTZxv26A/formResponse";

type State =
  | { kind: "form" }
  | { kind: "loading" }
  | { kind: "attending"; name: string }
  | { kind: "declined"; name: string }
  | { kind: "error"; msg: string };

const RSVP = () => {
  const { t } = useLang();

  const [name, setName] = useState("");
  const [choice, setChoice] = useState<"attending" | "declined" | null>(null);
  const [state, setState] = useState<State>({ kind: "form" });

  const TEXT = "#4F4B35";
  const GOLD = "#B49A62";
  const BG = "rgba(255,252,246,.78)";
  const BORDER = "rgba(79,75,53,.18)";

  const submit = async () => {
    if (!name.trim() || !choice) return;

    setState({ kind: "loading" });

    const formData = new URLSearchParams();

    formData.append("entry.1986421858", name.trim());
    formData.append(
      "entry.349309262",
      choice === "attending"
        ? "تاكيد الحضور"
        : "الاعتذار عن الحضور"
    );

    try {
      await fetch(FORM_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData.toString(),
      });

      if (choice === "attending") {
        setState({
          kind: "attending",
          name: name.trim(),
        });
      } else {
        setState({
          kind: "declined",
          name: name.trim(),
        });
      }
    } catch {
      setState({
        kind: "error",
        msg: "حدث خطأ، حاول مرة أخرى",
      });
    }
  };

  // ===== ATTENDING =====
  if (state.kind === "attending") {
    return (
      <Reveal>
        <div
          className="mx-auto max-w-md rounded-2xl p-8 text-center backdrop-blur-md"
          style={{
            background: BG,
            border: `2px solid ${GOLD}`,
            boxShadow: `0 0 40px rgba(180,154,98,.22)`,
          }}
        >
          <Heart
            className="mx-auto w-10 h-10 mb-3"
            style={{ color: GOLD, fill: GOLD }}
          />

          <div
            className="text-2xl font-bold mb-4"
            style={{ color: TEXT }}
          >
            {t("thanks_attending")}
          </div>

          <div
            className="text-base mb-6"
            style={{ color: TEXT }}
          >
            {state.name}
          </div>
        </div>
      </Reveal>
    );
  }

  // ===== DECLINED =====
  if (state.kind === "declined") {
    return (
      <Reveal>
        <div
          className="mx-auto max-w-md rounded-2xl p-8 text-center backdrop-blur-md"
          style={{
            background: BG,
            border: `1.5px solid ${BORDER}`,
          }}
        >
          <Heart
            className="mx-auto w-10 h-10 mb-3"
            style={{ color: GOLD, fill: GOLD }}
          />

          <p
            className="text-xl leading-loose mb-3"
            style={{ color: TEXT }}
          >
            {t("thanks_declined")}
          </p>

          <div
            className="text-base mb-6"
            style={{ color: TEXT }}
          >
            {state.name}
          </div>
        </div>
      </Reveal>
    );
  }

  // ===== FORM =====
  return (
    <Reveal>
      <div
        className="mx-auto max-w-md rounded-2xl p-8 backdrop-blur-md"
        style={{
          background: BG,
          border: `1.5px solid ${BORDER}`,
        }}
      >
        <label
          className="block text-sm mb-2"
          style={{ color: TEXT }}
        >
          {t("name_label")}
        </label>

        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={t("name_placeholder")}
          className="w-full px-4 py-3 rounded-xl text-right"
          style={{
            background: "rgba(255,252,246,.88)",
            border: `1.5px solid ${BORDER}`,
            color: TEXT,
          }}
        />

        <div className="grid grid-cols-2 gap-3 mt-5">
          <button
            onClick={() => setChoice("attending")}
            className="py-3 rounded-xl text-sm flex items-center justify-center gap-2"
            style={{
              background:
                choice === "attending" ? GOLD : BG,
              color: TEXT,
              border: `1.5px solid ${BORDER}`,
              boxShadow:
                choice === "attending"
                  ? "0 0 14px rgba(180,154,98,.35)"
                  : "none",
            }}
          >
            <Check className="w-4 h-4" />
            {t("confirm")}
          </button>

          <button
            onClick={() => setChoice("declined")}
            className="py-3 rounded-xl text-sm flex items-center justify-center gap-2"
            style={{
              background:
                choice === "declined" ? GOLD : BG,
              color: TEXT,
              border: `1.5px solid ${BORDER}`,
              boxShadow:
                choice === "declined"
                  ? "0 0 14px rgba(180,154,98,.35)"
                  : "none",
            }}
          >
            <X className="w-4 h-4" />
            {t("decline")}
          </button>
        </div>

        <button
          onClick={submit}
          disabled={
            !name.trim() ||
            !choice ||
            state.kind === "loading"
          }
          className="w-full mt-5 py-3 rounded-xl text-base flex items-center justify-center gap-2"
          style={{
            background: GOLD,
            color: "#FFFDF8",
            boxShadow: "0 4px 18px rgba(180,154,98,.35)",
            fontWeight: 700,
          }}
        >
          <Send className="w-4 h-4" />
          {state.kind === "loading"
            ? t("sending")
            : t("send")}
        </button>

        {state.kind === "error" && (
          <p
            className="text-sm text-center mt-3"
            style={{ color: "#4F4B35" }}
          >
            {state.msg}
          </p>
        )}
      </div>
    </Reveal>
  );
};

export default RSVP;
