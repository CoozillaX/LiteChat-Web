import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
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
  TextField,
  Typography
} from "@mui/material";
import {
  requestSignupSchema,
  type RequestSignupSchemaValues
} from "@/schemas/auth/requestSignup";

export default function RequestSignupPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  // Form success response
  const [alertMessage, setAlertMessage] = useState<string | null>(null);
  const [alertType, setAlertType] = useState<"success" | "error" | null>(null);

  // React Hook Form setup
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<RequestSignupSchemaValues>({
    resolver: zodResolver(requestSignupSchema)
  });

  // Form submission handler
  const onValidSubmit = (data: RequestSignupSchemaValues) => {
    console.log("Signup request sent for:", data.email);
    // TODO: Integrate with backend API to handle password reset request
    setAlertMessage(I18nKeys.requestSignup.success.requestSent);
    setAlertType("success");
    reset();
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
              {t(I18nKeys.requestSignup.title)}
            </Typography>
          }
          subheader={
            !alertMessage && (
              <Typography variant="body2" color="text.secondary" sx={{ pt: 1 }}>
                {t(I18nKeys.requestSignup.subtitle)}
              </Typography>
            )
          }
          sx={{
            textAlign: "center"
          }}
        />
        {alertMessage ? (
          <>
            <CardContent>
              <Alert severity={alertType || "info"} sx={{ mb: 2 }}>
                {t(alertMessage)}
              </Alert>
            </CardContent>
            <CardActions sx={{ px: 2 }}>
              <Stack sx={{ width: 1 }}>
                <Button
                  fullWidth
                  type="submit"
                  variant="contained"
                  color="primary"
                  sx={{ textTransform: "none" }}
                  onClick={() => navigate("/")}
                >
                  {t(I18nKeys.requestSignup.login)}
                </Button>
              </Stack>
            </CardActions>
          </>
        ) : (
          <>
            <CardContent>
              <Stack>
                <TextField
                  id="email"
                  label={t(I18nKeys.requestSignup.email)}
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
                  {t(I18nKeys.requestSignup.submit)}
                </Button>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  align="center"
                  sx={{ mt: 2 }}
                >
                  <Link to="/" style={{ color: "#1976d2" }}>
                    {t(I18nKeys.requestSignup.login)}
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
