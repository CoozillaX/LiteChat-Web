import {
  forwardRef,
  useContext,
  useImperativeHandle,
  useRef,
  useState
} from "react";
import { ColorModeContext } from "@/views/App";
import { useTranslation } from "react-i18next";
import Turnstile from "react-turnstile";
import type { TurnstileProps, BoundTurnstileObject } from "react-turnstile";
import type { SupportedLang } from "@/i18n";
import { Box, Skeleton } from "@mui/material";

export interface LiteTurnstileRef {
  reset: () => void;
}

type LiteTurnstileProps = Omit<TurnstileProps, "sitekey">;

export default forwardRef<LiteTurnstileRef, LiteTurnstileProps>(
  (props, ref) => {
    const ctx = useContext(ColorModeContext);
    const { i18n } = useTranslation();
    const boundRef = useRef<BoundTurnstileObject | null>(null);

    // Loading state
    const [isLoaded, setIsLoaded] = useState(false);

    // Expose reset method to parent components
    useImperativeHandle(ref, () => ({
      reset() {
        boundRef.current?.reset();
      }
    }));

    // Render Turnstile with appropriate props
    const { onLoad, ...rest } = props;

    return (
      <Box sx={{ position: "relative", width: 1, minHeight: 65 }}>
        {!isLoaded && (
          <Skeleton
            variant="rectangular"
            animation="wave"
            sx={{
              position: "absolute",
              inset: 0,
              borderRadius: 1,
              width: 1,
              height: 1
            }}
          />
        )}

        <Turnstile
          sitekey={import.meta.env.VITE_TURNSTILE_SITE_KEY}
          theme={ctx?.mode === "dark" ? "dark" : "light"}
          language={i18n.language as SupportedLang}
          size="flexible"
          appearance="always"
          fixedSize
          onLoad={(widgetId, bound) => {
            boundRef.current = bound;
            onLoad?.(widgetId, bound);
            setIsLoaded(true);
          }}
          {...rest}
        />
      </Box>
    );
  }
);
