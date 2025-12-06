import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { I18nKeys } from "@/i18n/keys";
import {
  Alert,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Stack,
  Typography
} from "@mui/material";
import PasswordField from "@/components/PasswordField";
import {
  resetPasswordSchema,
  type ResetPasswordSchemaValues
} from "@/schemas/auth/resetPassword";

export default function ResetPasswordPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");

  // Form response
  const [alertMessage, setAlertMessage] = useState<string | null>(null);
  const [alertType, setAlertType] = useState<"success" | "error" | null>(null);

  // React Hook Form setup
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<ResetPasswordSchemaValues>({
    resolver: zodResolver(resetPasswordSchema)
  });

  // Form submission handler
  const onValidSubmit = (data: ResetPasswordSchemaValues) => {
    console.log("Token:", token);
    console.log("Password reset to:", data.newPassword);
    // TODO: Integrate with backend API to handle password reset request
    setAlertMessage(I18nKeys.resetPassword.success.passwordReset);
    setAlertType("success");
  };

  // Check for token in URL
  useEffect(() => {
    if (
      !token /* && verifyToken(token) // TODO: Add token verification logic */
    ) {
      setAlertMessage(I18nKeys.resetPassword.error.invalidLink);
      setAlertType("error");
    }
  }, [token]);

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
              {t("resetPassword.title")}
            </Typography>
          }
          subheader={
            <Typography variant="body2" color="text.secondary" sx={{ pt: 1 }}>
              {t("resetPassword.subtitle")}
            </Typography>
          }
          sx={{
            textAlign: "center"
          }}
        />

        {alertMessage ? (
          <>
            <CardContent>
              <Alert severity={alertType || "info"}>{t(alertMessage)}</Alert>
            </CardContent>
            <CardActions sx={{ px: 2, pb: 2 }}>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                sx={{ textTransform: "none" }}
                onClick={() => navigate("/")}
              >
                {t(I18nKeys.resetPassword.login)}
              </Button>
            </CardActions>
          </>
        ) : (
          <>
            <CardContent>
              <Stack spacing={2}>
                <PasswordField
                  id="new-password"
                  autoComplete="new-password"
                  label={t(I18nKeys.resetPassword.newPassword)}
                  variant="outlined"
                  {...register("newPassword")}
                  error={!!errors.newPassword}
                  helperText={
                    errors.newPassword
                      ? t(errors.newPassword.message || "")
                      : ""
                  }
                />
                <PasswordField
                  id="confirm-password"
                  autoComplete="new-password"
                  label={t(I18nKeys.resetPassword.confirmPassword)}
                  variant="outlined"
                  {...register("confirmPassword")}
                  error={!!errors.confirmPassword}
                  helperText={
                    errors.confirmPassword
                      ? t(errors.confirmPassword.message || "")
                      : ""
                  }
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
                  disabled={isSubmitting}
                >
                  {t(I18nKeys.resetPassword.submit)}
                </Button>
              </Stack>
            </CardActions>
          </>
        )}
      </Card>
    </form>
  );
}
