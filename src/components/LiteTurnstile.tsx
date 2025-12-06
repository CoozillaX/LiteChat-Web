import { forwardRef, useContext, useImperativeHandle, useRef } from "react";
import { ColorModeContext } from "@/views/App";
import { useTranslation } from "react-i18next";
import Turnstile from "react-turnstile";
import type { TurnstileProps, BoundTurnstileObject } from "react-turnstile";
import type { SupportedLang } from "@/i18n";

export interface LiteTurnstileRef {
  reset: () => void;
}

type LiteTurnstileProps = Omit<TurnstileProps, "sitekey">;

const LiteTurnstile = forwardRef<LiteTurnstileRef, LiteTurnstileProps>(
  (props, ref) => {
    const ctx = useContext(ColorModeContext);
    const { i18n } = useTranslation();
    const boundRef = useRef<BoundTurnstileObject | null>(null);

    // Expose reset method to parent components
    useImperativeHandle(ref, () => ({
      reset() {
        boundRef.current?.reset();
      }
    }));

    // Render Turnstile with appropriate props
    const { onLoad, ...rest } = props;

    return (
      <Turnstile
        sitekey={import.meta.env.VITE_TURNSTILE_SITE_KEY}
        theme={ctx?.mode === "dark" ? "dark" : "light"}
        language={i18n.language as SupportedLang}
        size="flexible"
        appearance="always"
        onLoad={(widgetId, bound) => {
          boundRef.current = bound;
          onLoad?.(widgetId, bound);
        }}
        {...rest}
      />
    );
  }
);

export default LiteTurnstile;
