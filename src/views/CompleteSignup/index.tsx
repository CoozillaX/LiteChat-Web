import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
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
import PasswordField from "@/components/PasswordField";
import {
  completeSignupSchema,
  type CompleteSignupSchemaValues
} from "./schema";

export default function Index() {
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
  } = useForm<CompleteSignupSchemaValues>({
    resolver: zodResolver(completeSignupSchema)
  });

  // Form submission handler
  const onValidSubmit = (data: CompleteSignupSchemaValues) => {
    console.log("Token:", token);
    console.log("Signup completed with data:", data);
    // TODO: Integrate with backend API to handle password reset request
    setAlertMessage(I18nKeys.completeSignup.success.signupComplete);
    setAlertType("success");
  };

  // Check for token in URL
  useEffect(() => {
    if (
      !token /* && verifyToken(token) // TODO: Add token verification logic */
    ) {
      setAlertMessage(I18nKeys.completeSignup.error.invalidLink);
      setAlertType("error");
    }
  }, [token]);

  return (
    <form onSubmit={handleSubmit(onValidSubmit)} noValidate>
      <Card
        sx={{
          borderRadius: 3,
          boxShadow: 4,
          py: 2
        }}
      >
        <CardHeader
          title={
            <Typography variant="h5" fontWeight={600}>
              {t(I18nKeys.completeSignup.title)}
            </Typography>
          }
          subheader={
            <Typography variant="body2" color="text.secondary" sx={{ pt: 1 }}>
              {t(I18nKeys.completeSignup.subtitle)}
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
                onClick={() => navigate("/auth")}
              >
                {t(I18nKeys.resetPassword.login)}
              </Button>
            </CardActions>
          </>
        ) : (
          <>
            <CardContent>
              <Stack spacing={2}>
                <TextField
                  id="first-name"
                  autoComplete="given-name"
                  label={t(I18nKeys.completeSignup.firstName)}
                  variant="outlined"
                  {...register("firstName")}
                  error={!!errors.firstName}
                  helperText={
                    errors.firstName ? t(errors.firstName.message || "") : ""
                  }
                />
                <TextField
                  id="last-name"
                  autoComplete="family-name"
                  label={t(I18nKeys.completeSignup.lastName)}
                  variant="outlined"
                  {...register("lastName")}
                  error={!!errors.lastName}
                  helperText={
                    errors.lastName ? t(errors.lastName.message || "") : ""
                  }
                />
                <PasswordField
                  id="new-password"
                  autoComplete="new-password"
                  label={t(I18nKeys.completeSignup.password)}
                  variant="outlined"
                  {...register("password")}
                  error={!!errors.password}
                  helperText={
                    errors.password ? t(errors.password.message || "") : ""
                  }
                />
                <PasswordField
                  id="confirm-password"
                  autoComplete="new-password"
                  label={t(I18nKeys.completeSignup.confirmPassword)}
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
                  {t(I18nKeys.completeSignup.submit)}
                </Button>
              </Stack>
            </CardActions>
          </>
        )}
      </Card>
    </form>
  );
}
