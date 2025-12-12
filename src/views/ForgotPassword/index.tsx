import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { I18nKeys } from "@/i18n";
import {
  Alert,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Stack,
  TextField,
  Typography
} from "@mui/material";
import {
  forgotPasswordSchema,
  type ForgotPasswordSchemaValues
} from "@/schemas/auth/forgotPassword";
import LiteTurnstile, {
  type LiteTurnstileRef
} from "@/components/LiteTurnstile";

export default function Index() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  // Turnstile
  const turnstileRef = useRef<LiteTurnstileRef>(null);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);

  // Form success response
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // React Hook Form setup
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<ForgotPasswordSchemaValues>({
    resolver: zodResolver(forgotPasswordSchema)
  });

  // Form submission handler
  const onValidSubmit = (data: ForgotPasswordSchemaValues) => {
    // Reset messages
    setErrorMessage(null);
    console.log("Turnstile token:", turnstileToken);
    console.log("Password reset email sent to:", data.email);
    // TODO: Integrate with backend API to handle password reset request
    if (turnstileToken && data.email == "example@example.com") {
      setSuccessMessage(I18nKeys.forgotPassword.success.emailSent);
    } else {
      setErrorMessage(I18nKeys.turnstile.error.invalidToken);
      setTurnstileToken(null);
      turnstileRef.current?.reset();
    }
  };

  return (
    <form onSubmit={handleSubmit(onValidSubmit)} noValidate>
      <Card
        sx={{
          borderRadius: 3,
          boxShadow: 4,
          py: 2,
          userSelect: "none"
        }}
      >
        <CardHeader
          title={
            <Typography variant="h5" fontWeight={600}>
              {t(I18nKeys.forgotPassword.title)}
            </Typography>
          }
          subheader={
            !successMessage && (
              <Typography variant="body2" color="text.secondary" sx={{ pt: 1 }}>
                {t(I18nKeys.forgotPassword.subtitle)}
              </Typography>
            )
          }
          sx={{
            textAlign: "center"
          }}
        />
        {successMessage ? (
          <>
            <CardContent>
              <Alert severity={"success"} sx={{ mb: 2 }}>
                {t(successMessage)}
              </Alert>
            </CardContent>
            <CardActions sx={{ px: 2, pb: 2 }}>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                sx={{ textTransform: "none" }}
                onClick={() => navigate("/auth")}
              >
                {t(I18nKeys.forgotPassword.login)}
              </Button>
            </CardActions>
          </>
        ) : (
          <>
            <CardContent>
              <Stack spacing={2}>
                {errorMessage && (
                  <Alert
                    severity={"error"}
                    onClose={() => setErrorMessage(null)}
                  >
                    {t(errorMessage)}
                  </Alert>
                )}
                <TextField
                  id="email"
                  label={t(I18nKeys.forgotPassword.email)}
                  variant="outlined"
                  {...register("email")}
                  error={!!errors.email}
                  helperText={errors.email ? t(errors.email.message || "") : ""}
                />
                <LiteTurnstile
                  ref={turnstileRef}
                  onVerify={(token) => setTurnstileToken(token)}
                  onExpire={() => setTurnstileToken(null)}
                />
              </Stack>
            </CardContent>
            <CardActions sx={{ px: 2 }}>
              <Stack sx={{ width: 1 }}>
                <Button
                  fullWidth
                  type="submit"
                  variant="contained"
                  color="primary"
                  sx={{ textTransform: "none" }}
                  disabled={!turnstileToken || isSubmitting}
                >
                  {t(
                    turnstileToken
                      ? I18nKeys.forgotPassword.submit
                      : I18nKeys.turnstile.executing
                  )}
                </Button>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  align="center"
                  sx={{ mt: 2 }}
                >
                  <Link to="/auth" style={{ color: "#1976d2" }}>
                    {t(I18nKeys.forgotPassword.login)}
                  </Link>
                </Typography>
              </Stack>
            </CardActions>
          </>
        )}
      </Card>
    </form>
  );
}
