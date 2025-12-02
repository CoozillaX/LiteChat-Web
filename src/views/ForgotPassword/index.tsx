import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { forgotPasswordSchema } from "@/schemas/auth/forgotPassword";
import type { ForgotPasswordSchemaValues } from "@/schemas/auth/forgotPassword";

export default function ForgotPasswordPage() {
  const { t } = useTranslation();

  // Form success response
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  // React Hook Form setup
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<ForgotPasswordSchemaValues>({
    resolver: zodResolver(forgotPasswordSchema)
  });

  // Form submission handler
  const onValidSubmit = (data: ForgotPasswordSchemaValues) => {
    console.log("Password reset email sent to:", data.email);
    // TODO: Integrate with backend API to handle password reset request
    setSuccessMessage("forgotPassword.success.emailSent");
    reset();
  };

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
              {t("forgotPassword.title")}
            </Typography>
          }
          subheader={
            <Typography variant="body2" color="text.secondary" sx={{ pt: 1 }}>
              {t("forgotPassword.subtitle")}
            </Typography>
          }
          sx={{
            textAlign: "center"
          }}
        />
        <CardContent>
          {successMessage && (
            <Alert
              severity="success"
              onClose={() => setSuccessMessage(null)}
              sx={{ mb: 2 }}
            >
              {t(successMessage)}
            </Alert>
          )}
          <Stack>
            <TextField
              id="email"
              label={t("forgotPassword.email")}
              variant="outlined"
              {...register("email")}
              error={!!errors.email}
              helperText={errors.email ? t(errors.email.message || "") : ""}
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
              {t("forgotPassword.submit")}
            </Button>
            <Typography
              variant="body2"
              color="text.secondary"
              align="center"
              sx={{ mt: 2 }}
            >
              <Link to="/" style={{ color: "#1976d2" }}>
                {t("forgotPassword.login")}
              </Link>
            </Typography>
          </Stack>
        </CardActions>
      </Card>
    </form>
  );
}
